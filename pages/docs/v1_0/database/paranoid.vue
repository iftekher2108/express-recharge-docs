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
                <li>paranoid</li>
            </ul>
        </div>

        <h1 class="text-3xl font-bold mb-4">Paranoid - model soft delete</h1>

        <p>
            Sequelize supports the concept of paranoid tables. A paranoid table is one that, when told to delete a
            record, it will not truly delete it. Instead, a special column called deletedAt will have its value set to
            the timestamp of that deletion request.
        </p>

        <p>
            This means that paranoid tables perform a soft-deletion of records, instead of a hard-deletion.
        </p>

        <h5 class="text-base my-3">Defining a model as paranoid</h5>

        <p>
            To make a model paranoid, you must pass the paranoid: true option to the model definition. Paranoid requires
            timestamps to work (i.e. it won't work if you also pass timestamps: false).
        </p>

        <p class="my-3">
            You can also change the default column name (which is deletedAt) to something else.
        </p>

        <p>
            <CodePreview endpoint="js" code="class Post extends Model {}
Post.init(
  {
    /* attributes here */
  },
  {
    sequelize,
    paranoid: true,

    // If you want to give a custom name to the deletedAt column
    deletedAt: 'destroyTime',
  },
);
" />
        </p>

        <h5 class="text-base my-3">Deleting</h5>

        <p class="mb-3">
            When you call the destroy method, a soft-deletion will happen:
        </p>

        <p>
            <CodePreview endpoint="js" code="await Post.destroy({
  where: {
    id: 1,
  },
});
// UPDATE 'posts' SET 'deletedAt'=[timestamp] WHERE 'deletedAt' IS NULL AND 'id' = 1
" />
        </p>

        <p class="my-3">
            If you really want a hard-deletion and your model is paranoid, you can force it using the force: true
            option:
        </p>

        <p>
            <CodePreview endpoint="js" code="await Post.destroy({
  where: {
    id: 1,
  },
  force: true,
});
// DELETE FROM 'posts' WHERE 'id' = 1
" />
        </p>


        <p class="my-3">
            The above examples used the static destroy method as an example (Post.destroy), but everything works in the
            same way with the instance method:
        </p>

        <p>
            <CodePreview endpoint="js" code="const post = await Post.create({ title: 'test' });
console.log(post instanceof Post); // true
await post.destroy(); // Would just set the `deletedAt` flag
await post.destroy({ force: true }); // Would really delete the record
" />
        </p>


        <h5 class="text-base my-3">Restoring</h5>

        <p class="mb-3">
            To restore soft-deleted records, you can use the restore method, which comes both in the static version as
            well as in the instance version:
        </p>

        <p>
            <CodePreview endpoint="js" code="// Example showing the instance `restore` method
// We create a post, soft-delete it and then restore it back
const post = await Post.create({ title: 'test' });
console.log(post instanceof Post); // true
await post.destroy();
console.log('soft-deleted!');
await post.restore();
console.log('restored!');

// Example showing the static `restore` method.
// Restoring every soft-deleted post with more than 100 likes
await Post.restore({
  where: {
    likes: {
      [Op.gt]: 100,
    },
  },
});
" />
        </p>


        <h5 class="text-base my-3">Behavior with other queries</h5>

        <p>
            Every query performed by Sequelize will automatically ignore soft-deleted records (except raw queries, of
            course).
        </p>

        <p>
            This means that, for example, the findAll method will not see the soft-deleted records, fetching only the
            ones that were not deleted.
        </p>

        <p>
            Even if you simply call findByPk providing the primary key of a soft-deleted record, the result will be null
            as if that record didn't exist.
        </p>

        <p class="mb-3">
            If you really want to let the query see the soft-deleted records, you can pass the paranoid: false option to
            the query method. For example:
        </p>

        <p>
            <CodePreview endpoint="js" code="await Post.findByPk(123); // This will return `null` if the record of id 123 is soft-deleted
await Post.findByPk(123, { paranoid: false }); // This will retrieve the record

await Post.findAll({
  where: { foo: 'bar' },
}); // This will not retrieve soft-deleted records

await Post.findAll({
  where: { foo: 'bar' },
  paranoid: false,
}); // This will also retrieve soft-deleted records
" />
        </p>


        <br>

        <p class="my-3">
            More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
                to="https://sequelize.org/docs/v6/core-concepts/raw-queries/">Sequelize website</NuxtLink>
        </p>

        <br>


        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/raw-queries`" class="btn md:px-8 py-5 btn-primary">Raw Queries
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/relationships/associations`" class="btn md:px-8 py-5 btn-primary">Table associations
            </NuxtLink>
        </div>


    </div>
</template>