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

        





    </div>
</template>