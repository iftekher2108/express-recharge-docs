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
                <li>raw-queries</li>
            </ul>
        </div>

        <h1 class="text-3xl font-bold mb-4">Raw Queries</h1>

        <p>
            As there are often use cases in which it is just easier to execute raw / already prepared SQL queries, you
            can use the sequelize.query method.
        </p>

        <p class="mb-3">
            By default the function will return two arguments - a results array, and an object containing metadata (such
            as amount of affected rows, etc). Note that since this is a raw query, the metadata are dialect specific.
            Some dialects return the metadata "within" the results object (as properties on an array). However, two
            arguments will always be returned, but for MSSQL and MySQL it will be two references to the same object.
        </p>

        <p>
            <CodePreview endpoint="js" code="const [results, metadata] = await sequelize.query('UPDATE users SET y = 42 WHERE x = 12');
// Results will be an empty array and metadata will contain the number of affected rows.
" />
        </p>

        <p class="my-3">
            In cases where you don't need to access the metadata you can pass in a query type to tell sequelize how to
            format the results. For example, for a simple select query you could do:
        </p>

        <p>
            <CodePreview endpoint="js" code="const { QueryTypes } = require('sequelize');
            const sequelize = require('@config/database');

const users = await sequelize.query('SELECT * FROM `users`', {
  type: QueryTypes.SELECT,
});
// We didn't need to destructure the result here - the results were returned directly
" />
        </p>

        <p>
            Several other query types are available. Peek into the source for details.
        </p>

        <p>
            Several other query types are available. Peek into the source for details.
        </p>


        <p>
            <CodePreview endpoint="js" code="const { QueryTypes } = require('sequelize');
            const sequelize = require('@config/database');

const users = await sequelize.query('SELECT * FROM `users`', {
  type: QueryTypes.SELECT,
});
// We didn't need to destructure the result here - the results were returned directly
" />
        </p>



        <h5 class="text-base my-3">
            Replacements
        </h5>

        <p>
            Replacements in a query can be done in two different ways, either using named parameters (starting with :),
            or unnamed, represented by a ?. Replacements are passed in the options object.
        </p>

        <li>
            If an array is passed, ? will be replaced in the order that they appear in the array
        </li>
        <li class="mb-3">
            If an object is passed, :key will be replaced with the keys from that object. If the object contains keys
            not found in the query or vice versa, an exception will be thrown.
        </li>


        <p>
            <CodePreview endpoint="js" code="const { QueryTypes } = require('sequelize');

await sequelize.query('SELECT * FROM projects WHERE status = ?', {
  replacements: ['active'],
  type: QueryTypes.SELECT,
});

await sequelize.query('SELECT * FROM projects WHERE status = :status', {
  replacements: { status: 'active' },
  type: QueryTypes.SELECT,
});
" />
        </p>

        <p class="my-3">
            Array replacements will automatically be handled, the following query searches for projects where the status
            matches an array of values.
        </p>

        <p>
            <CodePreview endpoint="js" code="const { QueryTypes } = require('sequelize');

await sequelize.query('SELECT * FROM projects WHERE status IN(:status)', {
  replacements: { status: ['active', 'inactive'] },
  type: QueryTypes.SELECT,
});
" />
        </p>


        <p class="my-3">
            To use the wildcard operator %, append it to your replacement. The following query matches users with names
            that start with 'ben'.
        </p>

        <p>
            <CodePreview endpoint="js" code="const { QueryTypes } = require('sequelize');

await sequelize.query('SELECT * FROM users WHERE name LIKE :search_name', {
  replacements: { search_name: 'ben%' },
  type: QueryTypes.SELECT,
});
" />
        </p>

        <br>

         <p class="my-3">
            More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
                to="https://sequelize.org/docs/v6/core-concepts/raw-queries/">Sequelize website</NuxtLink>
        </p>

        <br>


        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/validation-const`" class="btn md:px-8 py-5 btn-primary">Validation & Constraints
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/database/paranoid`" class="btn md:px-8 py-5 btn-primary">Paranoid
            </NuxtLink>
        </div>




    </div>
</template>