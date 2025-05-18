<script setup>
const doc_v = 'v1_0'
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
                <li>query-finder</li>
            </ul>
        </div>

        <h1 class="text-3xl font-bold mb-4">Model Querying - Finders</h1>

        <h5 class="text-base">findAll</h5>
        <p>
            The findAll method is already known from the previous tutorial. It generates a standard SELECT query which
            will retrieve all entries from the table (unless restricted by something like a where clause, for example).
        </p>
        <h5>findByPk</h5>
        <p class="mb-3">
            The findByPk method obtains only a single entry from the table, using the provided primary key.
        </p>

        <p>
            <CodePreview endpoint="js" code="const project = await Project.findByPk(123);
if (project === null) {
  console.log('Not found!');
} else {
  // Its primary key is 123
}
" />
        </p>


        <h5 class="text-base">findOne</h5>
        <p>
            The findOne method obtains the first entry it finds (that fulfills the optional query options, if provided).
        </p>

        <p>
            <CodePreview endpoint="js" code="const project = await Project.findOne({ where: { title: 'My Title' } });
if (project === null) {
  console.log('Not found!');
} else {
  console.log(project.title); // 'My Title'
}
" />
        </p>

        <h5 class="text-base">findOrCreate</h5>
        <p>
            The method findOrCreate will create an entry in the table unless it can find one fulfilling the query
            options. In both cases, it will return an instance (either the found instance or the created instance) and a
            boolean indicating whether that instance was created or already existed.
        </p>

        <p>
            The where option is considered for finding the entry, and the defaults option is used to define what must be
            created in case nothing was found. If the defaults do not contain values for every column, Sequelize will
            take the values given to where (if present).
        </p>

        <p>
            Let's assume we have an empty database with a User model which has a username and a job.
        </p>

        <p>
            <CodePreview endpoint="js" code="const [user, created] = await User.findOrCreate({
  where: { username: 'sdepold' },
  defaults: {
    job: 'Technical Lead JavaScript',
  },
});
console.log(user.username); // 'sdepold'
console.log(user.job); // This may or may not be 'Technical Lead JavaScript'
console.log(created); // The boolean indicating whether this instance was just created
if (created) {
  console.log(user.job); // This will certainly be 'Technical Lead JavaScript'
}
" />
        </p>

        <br>

        <p class="my-3">
            More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
                to="https://sequelize.org/docs/v6/core-concepts/model-querying-finders/">Sequelize website</NuxtLink>
        </p>

        <br>


        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/query-basics`" class="btn md:px-8 py-5 btn-primary">Query Basics
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/database/getter-setter`" class="btn md:px-8 py-5 btn-primary">Getter & Setter
            </NuxtLink>
        </div>


    </div>
</template>