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

        <h1 class="text-3xl font-bold mb-4">Model Getter & Setter</h1>

        <h5 class="text-base my-3">Getters</h5>

        <p class="mb-3">
            A getter is a get() function defined for one column in the model definition:
        </p>

        <p>
            <CodePreview endpoint="user.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init({
  // Let's say we wanted to see every username in uppercase, even
  // though they are not necessarily uppercase in the database itself
  username: {
    type: DataTypes.STRING,
    get() {
      const rawValue = this.getDataValue('username');
      return rawValue ? rawValue.toUpperCase() : null;
    },
  },
});
" />
        </p>

        <p class="my-3">
            This getter, just like a standard JavaScript getter, is called automatically when the field value is read.
        </p>

        <h5 class="text-base my-3">Setters</h5>

        <p class="mb-3">
            A setter is a set() function defined for one column in the model definition. It receives the value being
            set:
        </p>

        <p>
            <CodePreview endpoint="user.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      this.setDataValue('password', hash(value));
    },
  },
});
" />
        </p>


        <p class="my-3">
            If we wanted to involve another field from our model instance in the computation, that is possible and very
            easy!
        </p>

        <p>
            <CodePreview endpoint="user.js" code="const { DataTypes, Model } = require('sequelize');
const sequelize = require('@config/database');

class User extends Model {}

User.init({
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      // Storing passwords in plaintext in the database is terrible.
      // Hashing the value with an appropriate cryptographic hash function is better.
      // Using the username as a salt is better.
      this.setDataValue('password', hash(this.username + value));
    },
  },
});
" />
        </p>

        <p class="my-3">
            More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
                to="https://sequelize.org/docs/v6/core-concepts/getters-setters-virtuals/">Sequelize website</NuxtLink>
        </p>


        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/query-finder`" class="btn md:px-8 py-5 btn-primary">Query finder
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/database/query-finder`" class="btn md:px-8 py-5 btn-primary">Query Finder
            </NuxtLink>
        </div>



    </div>
</template>