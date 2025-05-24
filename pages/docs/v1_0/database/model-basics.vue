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
        <li>model-basics</li>
      </ul>
    </div>

    <h1 class=" text-3xl font-bold mb-4">Model Basics</h1>

    <p>
      Models define the structure of your data, including the columns, their data types, and any constraints or
      configurations
    </p>

    <h5 class="text-base mt-3">Defining a Model</h5>

    <p>
      You can define a model in Sequelize in two primary ways:
    </p>

    <p class="mb-3">
      Using Model This is the traditional instance method where you can extends the Model method on your Sequelize
      instance.
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code='const { DataTypes, Model } = require("sequelize");
const sequelize = require("@config/database");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false, // by default true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, // by default true
      validate: {
        notNull: {
          msg: "name field is required",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // by default true
      unique: true,
      validate: {
        isEmail: {
          msg: "email field is not valid",
        },
        notNull: {
          msg: "email field is required",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // by default true
      validate: {
        notNull: {
          msg: "password field is required",
        },
        len: {
          args: [8, 64],
          msg: "password field must be between 8 and 64 characters",
        },
      },
    },
  },
  {
  sequelize,
  modelName:"user",
  paranoid: true, // for createAt, updateAt and deleteAt
  }
);

module.exports = User;

' />
    </p>

    <h5 class="text-base mt-3">Model Name and Table Name</h5>

    <li>Model Name: This is the name you use in your JavaScript code to refer to the model (e.g., User, Product).
      It's typically singular and PascalCase.</li>
    <li>Table Name: This is the actual name of the table in your database (e.g., users, products). Sequelize can
      automatically pluralize your model name to determine the table name (e.g., User becomes users), but you can
      configure this behavior using the tableName option.</li>


    <hr class=" my-5 opacity-30">

    <h5 class="text-base">Enforcing the table name to be equal to the model name</h5>
    <p class="mb-3">
      You can stop the auto-pluralization performed by Sequelize using the <span
        class="bg-primary/20 p-1 rounded">freezeTableName: true</span> option. This way,
      Sequelize will infer the table name to be equal to the model name, without any modifications:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init(
  {
    // ... (attributes)
  },
  {
  sequelize,
  modelName:'user',
    freezeTableName: true,
  }
);
" />
    </p>

    <p class="my-3">
      The example above will create a model named User pointing to a table also named User.
    </p>

    <h4 class="text-base">Model synchronization ( If need you can use here too )</h4>

    <p>
      When you define a model, you're telling Sequelize a few things about its table in the database. However, what if
      the table actually doesn't even exist in the database? What if it exists, but it has different columns, less
      columns, or any other difference?
    </p>

    <li> <span class="bg-primary/20 rounded p-1">User.sync()</span> - This creates the table if it doesn't exist (and
      does
      nothing if it already exists)</li>
    <li> <span class="bg-primary/20 rounded p-1">User.sync({ force: true })</span> - This creates the table, dropping it
      first if it already existed</li>
    <li> <span class="bg-primary/20 rounded p-1">User.sync({ alter: true })</span> - This checks what is the current
      state
      of the table in the database (which columns
      it
      has, what are their data types, etc), and then performs the necessary changes in the table to make it match the
      model.</li>

    <br>

    <p>

      <CodePreview endpoint="Modules/Users/Models/User.js" code='const { DataTypes, Model } = require("sequelize");
const sequelize = require("@config/database");

class User extends Model {}

User.init(
  "user",
  {
    // model field data 
  },
  {
    paranoid: true, // this is for createAt, updateAt and deleteAt
  }
);

module.exports = User;
' />

    </p>

    <br>

    <h5 class="text-base">Timestamps</h5>

    <p>
      By default, Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type
      DataTypes.DATE. Those fields are automatically managed as well - whenever you use Sequelize to create or update
      something, those fields will be set correctly. The createdAt field will contain the timestamp representing the
      moment of creation, and the updatedAt will contain the timestamp of the latest update.
    </p>

    <p class="mb-3">
      This behavior can be disabled for a model with the timestamps: false option:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init(
  {
    // ... (attributes)
  },
  {
  sequeilze,
  modelName:'user',
    timestamps: false,
  },
);
" />
    </p>

    <p class="my-3">
      It is also possible to enable only one of createdAt/updatedAt, and to provide a custom name for these columns:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init(
  {
    // ... (attributes)
  },
  {
    sequelize,
    modelName:'user'
    // don't forget to enable timestamps!
    timestamps: true,

    // I don't want createdAt
    createdAt: false,

    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp',
  },
);
" />
    </p>

    <h5 class="text-base my-3">Column declaration</h5>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init(
  {
     name: {
      type: DataTypes.STRING,
    },
  },
  {
  sequelize,
  modelName:'user'
  }

);
" />
    </p>

    <h5 class="text-base my-3">Data Types</h5>





    <p class="mb-3">
      Every column you define in your model must have a data type. Sequelize provides a lot of <NuxtLink
        class="text-primary hover:underline" target="_blank"
        to="https://github.com/sequelize/sequelize/blob/v6/src/data-types.js">built-in data types</NuxtLink>. To access
      a built-in data type, you must import DataTypes:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="const { DataTypes } = require('sequelize'); // Import the built-in data types
" />
    </p>

    <h3 class="text-sm my-3">Strings</h3>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="DataTypes.STRING; // VARCHAR(255)
DataTypes.STRING(1234); // VARCHAR(1234)
DataTypes.STRING.BINARY; // VARCHAR BINARY
DataTypes.TEXT; // TEXT
DataTypes.TEXT('tiny'); // TINYTEXT
DataTypes.CITEXT; // CITEXT          PostgreSQL and SQLite only.
DataTypes.TSVECTOR; // TSVECTOR        PostgreSQL only.
" />
    </p>

    <h3 class="text-sm my-3">Boolean</h3>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="DataTypes.BOOLEAN; // TINYINT(1)
" />
    </p>


    <h3 class="text-sm my-3">Numbers</h3>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="DataTypes.INTEGER; // INTEGER
DataTypes.BIGINT; // BIGINT
DataTypes.BIGINT(11); // BIGINT(11)

DataTypes.FLOAT; // FLOAT
DataTypes.FLOAT(11); // FLOAT(11)
DataTypes.FLOAT(11, 10); // FLOAT(11,10)

DataTypes.REAL; // REAL            PostgreSQL only.
DataTypes.REAL(11); // REAL(11)        PostgreSQL only.
DataTypes.REAL(11, 12); // REAL(11,12)     PostgreSQL only.

DataTypes.DOUBLE; // DOUBLE
DataTypes.DOUBLE(11); // DOUBLE(11)
DataTypes.DOUBLE(11, 10); // DOUBLE(11,10)

DataTypes.DECIMAL; // DECIMAL
DataTypes.DECIMAL(10, 2); // DECIMAL(10,2)
" />
    </p>

    <h3 class="text-sm my-3">Unsigned & Zerofill integers - MySQL/MariaDB only</h3>

    <p class="mb-3">
      In MySQL and MariaDB, the data types INTEGER, BIGINT, FLOAT and DOUBLE can be set as unsigned or zerofill (or
      both), as follows:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="DataTypes.INTEGER.UNSIGNED;
DataTypes.INTEGER.ZEROFILL;
DataTypes.INTEGER.UNSIGNED.ZEROFILL;
// You can also specify the size i.e. INTEGER(10) instead of simply INTEGER
// Same for BIGINT, FLOAT and DOUBLE
" />
    </p>

    <h3 class="text-sm my-3">Dates</h3>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="DataTypes.DATE; // DATETIME for mysql / sqlite, TIMESTAMP WITH TIME ZONE for postgres
DataTypes.DATE(6); // DATETIME(6) for mysql 5.6.4+. Fractional seconds support with up to 6 digits of precision
DataTypes.DATEONLY; // DATE without time
" />
    </p>

    <h3 class="text-sm my-3">UUIDs</h3>

    <p class="mb-3">
      For UUIDs, use DataTypes.UUID. It becomes the UUID data type for PostgreSQL and SQLite, and CHAR(36) for MySQL.
      Sequelize can generate UUIDs automatically for these fields, simply use DataTypes.UUIDV1 or DataTypes.UUIDV4 as
      the default value:
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
}
DataTypes.DATEONLY; // DATE without time
" />
    </p>

    <h5 class="text-base my-3">Column Options</h5>

    <p class="my-3">
      When defining a column, apart from specifying the type of the column, and the allowNull and defaultValue options
      mentioned above, there are a lot more options that can be used. Some examples are below.
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="{
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4 // Or DataTypes.UUIDV1
}
DataTypes.DATEONLY; // DATE without time
" />
    </p>
    <br>
    <CodePreview endpoint="Modules/Users/Models/User.js" code="{
      // instantiating will automatically set the flag to true if not set
      flag: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

      // default values for dates => current time
      myDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },

      // setting allowNull to false will add NOT NULL to the column, which means an error will be
      // thrown from the DB when the query is executed if the column is null. If you want to check that a value
      // is not null before querying the DB, look at the validations section below.
      title: { type: DataTypes.STRING, allowNull: false },

      // Creating two objects with the same value will throw an error. The unique property can be either a
      // boolean, or a string. If you provide the same string for multiple columns, they will form a
      // composite unique key.
      uniqueOne: { type: DataTypes.STRING, unique: 'compositeIndex' },
      uniqueTwo: { type: DataTypes.INTEGER, unique: 'compositeIndex' },

      // The unique property is simply a shorthand to create a unique constraint.
      someUnique: { type: DataTypes.STRING, unique: true },

      // Go on reading for further information about primary keys
      identifier: { type: DataTypes.STRING, primaryKey: true },

      // autoIncrement can be used to create auto_incrementing integer columns
      incrementMe: { type: DataTypes.INTEGER, autoIncrement: true },

      // You can specify a custom column name via the 'field' attribute:
      fieldWithUnderscores: {
      type: DataTypes.STRING,
      field: 'field_with_underscores',
      },

      // It is possible to create foreign keys:
      bar_id: {
      type: DataTypes.INTEGER,

      references: {
      // This is a reference to another model
      model: Bar,

      // This is the column name of the referenced model
      key: 'id',

      // With PostgreSQL, it is optionally possible to declare when to check the foreign key constraint, passing the
      Deferrable type.
      deferrable: Deferrable.INITIALLY_IMMEDIATE,
      // Options:
      // - `Deferrable.INITIALLY_IMMEDIATE` - Immediately check the foreign key constraints
      // - `Deferrable.INITIALLY_DEFERRED` - Defer all foreign key constraint check to the end of a transaction
      // - `Deferrable.NOT` - Don't defer the checks at all (default) - This won't allow you to dynamically change the
      rule in a transaction
      },
          // Comments can only be added to columns in MySQL, MariaDB, PostgreSQL and MSSQL
    commentMe: {
      type: DataTypes.INTEGER,
      comment: 'This is a column name that has a comment',
    },
  },
  {

    // Using `unique: true` in an attribute above is exactly the same as creating the index in the model's options:
    indexes: [{ unique: true, fields: ['someUnique'] }],
  },
" />

    <h5 class="text-base mt-3">Taking advantage of Models being classes</h5>

    <p class="mb-3">
      The Sequelize models are ES6 classes. You can very easily add custom instance or class level methods.
    </p>

    <p>
      <CodePreview endpoint="Modules/Users/Models/User.js" code="class User extends Model {
  static classLevelMethod() {
    return 'foo';
  }
  instanceLevelMethod() {
    return 'bar';
  }
  getFullname() {
    return this.firstname+' '+ this.lastname];
  }
}
User.init(
  {
    firstname: Sequelize.TEXT,
    lastname: Sequelize.TEXT,
  },
  { sequelize },
);

console.log(User.classLevelMethod()); // 'foo'
const user = User.build({ firstname: 'Jane', lastname: 'Doe' });
console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullname()); // 'Jane Doe'
" />


    </p>


    <p class="my-3">
      More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
        to="https://sequelize.org/docs/v6/core-concepts/model-basics/">Sequelize website</NuxtLink>
    </p>


    <div class="flex my-4 justify-between p-4">
      <NuxtLink :to="`/docs/${doc_v}/database/getting-started`" class="btn md:px-8 py-5 btn-primary">Getting Started
      </NuxtLink>
      <NuxtLink :to="`/docs/${doc_v}/database/model-instances`" class="btn md:px-8 py-5 btn-primary">Model Instances
      </NuxtLink>
    </div>


  </div>
</template>