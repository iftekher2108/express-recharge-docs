<script setup>
const doc_v = "v1_0"
definePageMeta({
  layout: 'docs'
})
</script>
<template>
  <div>

    <div class="breadcrumbs text-sm">
      <ul>
        <li>home</li>
        <li>docs</li>
        <li>database</li>
        <li>query-basics</li>
      </ul>
    </div>

    <h1 class=" text-3xl font-bold mb-4">Validation & Constraints</h1>

    <h5 class="text-base my-3"></h5>

    <p>
      <CodePreview endpoint="js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init({
  password: {
    type: DataTypes.STRING(64),
    validate: {
      min: 8,
    },
  },
});
" />
    </p>

    <br>

    <h5 class="text-base">
      Difference between Validations and Constraints
    </h5>

    <p>
      Validations are checks performed in the Sequelize level, in pure JavaScript. They can be arbitrarily complex
      if you provide a custom validator function, or can be one of the built-in validators offered by Sequelize.
      If a validation fails, no SQL query will be sent to the database at all.
    </p>

    <p class="mb-3">
      On the other hand, constraints are rules defined at SQL level. The most basic example of constraint is an
      Unique Constraint. If a constraint check fails, an error will be thrown by the database and Sequelize will
      forward this error to JavaScript (in this example, throwing a SequelizeUniqueConstraintError). Note that in
      this case, the SQL query was performed, unlike the case for validations.
    </p>


    <h5 class="my-3">
      Constraint
    </h5>

    <p class="mb-3">
      Our code example above defines a unique & allowNull constraint on the username field:
    </p>

    <p>
      <CodePreview endpoint="js" code="/* ... */ {
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },
} /* ... */
" />
    </p>

    <h5 class="text-base my-5">Validators</h5>

    <p>
      Model validators allow you to specify format/content/inheritance validations for each attribute of the
      model. Validations are automatically run on create, update and save. You can also call validate() to
      manually validate an instance.
    </p>


    <h5 class="text-base">
      Per-attribute validations
    </h5>

    <p class="mb-3">
      You can define your custom validators or use several built-in validators, implemented by validator.js
      (10.11.0), as shown below.
    </p>

    <p>
      <CodePreview endpoint="js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init({
  bar: {
    type: DataTypes.STRING,
    validate: {
      is: /^[a-z]+$/i,          // matches this RegExp
      is: ['^[a-z]+$'','i'],     // same as above, but constructing the RegExp from a string
      not: /^[a-z]+$/i,         // does not match this RegExp
      not: ['^[a-z]+$'','i'],    // same as above, but constructing the RegExp from a string
      isEmail: true,            // checks for email format (foo@bar.com)
      isUrl: true,              // checks for url format (https://foo.com)
      isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
      isIPv4: true,             // checks for IPv4 (129.89.23.1)
      isIPv6: true,             // checks for IPv6 format
      isAlpha: true,            // will only allow letters
      isAlphanumeric: true,     // will only allow alphanumeric characters, so '_abc' will fail
      isNumeric: true,          // will only allow numbers
      isInt: true,              // checks for valid integers
      isFloat: true,            // checks for valid floating point numbers
      isDecimal: true,          // checks for any numbers
      isLowercase: true,        // checks for lowercase
      isUppercase: true,        // checks for uppercase
      notNull: true,            // won't allow null
      isNull: true,             // only allows null
      notEmpty: true,           // don't allow empty strings
      equals: 'specific value', // only allow a specific value
      contains: 'foo',          // force specific substrings
      notIn: [['foo', 'bar']],  // check the value is not one of these
      isIn: [['foo', 'bar']],   // check the value is one of these
      notContains: 'bar',       // don't allow specific substrings
      len: [2,10],              // only allow values with length between 2 and 10
      isUUID: 4,                // only allow uuids
      isDate: true,             // only allow date strings
      isAfter: '2011-11-05',    // only allow date strings after a specific date
      isBefore: '2011-11-05',   // only allow date strings before a specific date
      max: 23,                  // only allow values <= 23
      min: 23,                  // only allow values >= 23
      isCreditCard: true,       // check for valid credit card numbers

      // Examples of custom validators:
      isEven(value) {
        if (parseInt(value) % 2 !== 0) {
          throw new Error('Only even values are allowed!');
        }
      }
      isGreaterThanOtherField(value) {
        if (parseInt(value) <= parseInt(this.otherField)) {
          throw new Error('Bar must be greater than otherField.');
        }
      }
    }
  }
});
" />
    </p>

    <p class="my-3">
      To use a custom error message instead of that provided by validator.js, use an object instead of the plain
      value or array of arguments, for example a validator which needs no argument can be given a custom message
      with
    </p>

    <p>
      <CodePreview endpoint="js" code="isInt: {
  msg: 'Must be an integer number of pennies';
}
" />
    </p>

    <p class="my-3">
      or if arguments need to also be passed add an args property:
    </p>

    <p>
      <CodePreview endpoint="js" code="isIn: {
  args: [['en', 'zh']],
  msg: 'Must be English or Chinese'
}
" />
    </p>

    <h5 class="text-base my-3">allowNull interaction with other validators</h5>

    <p>
      If a particular field of a model is set to not allow null (with allowNull: false) and that value has been
      set to null, all validators will be skipped and a ValidationError will be thrown.
    </p>

    <p>
      On the other hand, if it is set to allow null (with allowNull: true) and that value has been set to null,
      only the built-in validators will be skipped, while the custom validators will still run.
    </p>

    <p class="mb-3">
      This means you can, for instance, have a string field which validates its length to be between 5 and 10
      characters, but which also allows null (since the length validator will be skipped automatically when the
      value is null):
    </p>

    <p>
      <CodePreview endpoint="js" code="class User extends Model {}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5, 10],
      },
    },
  },
  { sequelize },
);
" />
    </p>

    <p class="my-3">
      You also can conditionally allow null values, with a custom validator, since it won't be skipped:
    </p>

    <p>
      <CodePreview endpoint="js" code="class User extends Model {}
User.init(
  {
    age: Sequelize.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        customValidator(value) {
          if (value === null && this.age !== 10) {
            throw new Error('name can't be null unless age is 10');
          }
        },
      },
    },
  },
  { sequelize },
);
" />
    </p>

    <p class="my-3">
      You can customize allowNull error message by setting the notNull validator:
    </p>

    <p>
      <CodePreview endpoint="js" code="class User extends Model {}
User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please enter your name',
        },
      },
    },
  },
  { sequelize },
);
" />
    </p>

    <p class="my-3">
      More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
        to="https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/">Sequelize website</NuxtLink>
    </p>


    <div class="flex my-4 justify-between p-4">
      <NuxtLink :to="`/docs/${doc_v}/database/getter-setter`" class="btn md:px-8 py-5 btn-primary">Getter & Setter
      </NuxtLink>
      <NuxtLink :to="`/docs/${doc_v}/database/query-finder`" class="btn md:px-8 py-5 btn-primary">Query Finder
      </NuxtLink>
    </div>


  </div>
</template>