<script setup>
const doc_v = "v1"
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
        <li>getting-started</li>
      </ul>
    </div>

    this is database geting started page


    <!-- <h5 class="text-base">Globally Enforcing the table name to be equal to the model name</h5>

        <p>
            The example above will create a model named User pointing to a table also named User.
        </p>
        <p class="mb-3">
            This behavior can also be defined globally for the sequelize instance, when it is created:
        </p>

        <p>
            <CodePreview endpoint="Config/database.js" code='require("dotenv").config();
const { Sequelize } = require("sequelize");
// MYSQL CONNECTION using sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DB_CONNECTION,
    logging:
      process.env.APP_ENV === "development"
        ? true
        : process.env.APP_ENV === "production"
        ? false
        : false,
  },
  define: {
    freezeTableName: true,
  },
);

module.exports = sequelize;

' />
        </p> -->



    <div class="flex my-4 justify-between p-4">
      <NuxtLink :to="`/docs/${doc_v}/basics/module-alies`" class="btn md:px-8 py-5 btn-primary">Module Alies
      </NuxtLink>
      <NuxtLink :to="`/docs/${doc_v}/database/model-basics`" class="btn md:px-8 py-5 btn-primary">Model Basics
      </NuxtLink>
    </div>



  </div>
</template>