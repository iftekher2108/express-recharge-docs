<script setup>
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
                <li>configration</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Model Basics of Express Recharge</h1>

        <p>
            Models define the structure of your data, including the columns, their data types, and any constraints or
            configurations
        </p>

        <h5 class="text-base my-3">Defining a Model</h5>

        <p>
            You can define a model in Sequelize in two primary ways:
        </p>

        <p class="mb-3">
            Using sequelize.define(): This is the traditional method where you call the define method on your Sequelize
            instance.
        </p>

        <p>
            <CodePreview endpoint="Modules/Users/models/user.js" code='const { DataTypes, TableHints } = require("sequelize");
const db = require("@config/database");

const User = db.define(
  "user",
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
    paranoid: true, // for createAt, updateAt and deleteAt
  }
);


module.exports = User;

' />
        </p>




        <h5 class="text-base my-3">Model Name and Table Name</h5>

        <li>Model Name: This is the name you use in your JavaScript code to refer to the model (e.g., User, Product).
            It's typically singular and PascalCase.</li>
        <li>Table Name: This is the actual name of the table in your database (e.g., users, products). Sequelize can
            automatically pluralize your model name to determine the table name (e.g., User becomes users), but you can
            configure this behavior using the tableName option.</li>


        <hr class=" my-5 opacity-30">

        <h5 class="text-base">Enforcing the table name to be equal to the model name</h5>
        <p>
            You can stop the auto-pluralization performed by Sequelize using the <span
                class="bg-primary/20 p-1 rounded">freezeTableName: true</span> option. This way,
            Sequelize will infer the table name to be equal to the model name, without any modifications:
        </p>

        <p>
            <CodePreview endpoint="Modules/Users/models/user.js" code='
' />
        </p>

    </div>
</template>