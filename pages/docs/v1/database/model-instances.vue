<script setup>
const doc_v = 'v1'
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

        <h1 class=" text-3xl font-bold mb-4">Modle instances</h1>

        <h5 class="text-base">
            Creating an instance
        </h5>

        <p class="mb-3">
            Although a model is a class, you should not create instances by using the new operator directly. Instead,
            the build method should be used:
        </p>


        <p>
            <CodePreview endpoint="js" code="const jane = User.build({ name: 'Jane' });
console.log(jane.name); // 'Jane'
" />
        </p>


        <p class="my-3">
            However, the code above does not communicate with the database at all (note that it is not even
            asynchronous)! This is because the build method only creates an object that represents data that can be
            mapped to a database. In order to really save (i.e. persist) this instance in the database, the save method
            should be used:
        </p>


        <p>

            <CodePreview endpoint="js" code="await jane.save();
console.log('Jane was saved to the database!');
" />
        </p>


        <p class="py-3">
            Note, from the usage of await in the snippet above, that save is an asynchronous method. In fact, almost
            every Sequelize method is asynchronous; build is one of the very few exceptions.
        </p>


        <h5 class="text-base">A very useful shortcut: the create method</h5>

        <p class="mb-3">
            Sequelize provides the create method, which combines the build and save methods shown above into a single
            method:
        </p>

        <p>
            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane' });
// Jane exists in the database now!
console.log(jane.name); // 'Jane'
" />
        </p>

        <h5 class="text-base">logging instances</h5>

        <p class="mb-3">
            Trying to log a model instance directly to console.log will produce a lot of clutter, since Sequelize
            instances have a lot of things attached to them. Instead, you can use the .toJSON() method (which, by the
            way, automatically guarantees the instances to be JSON.stringify-ed well).
        </p>


        <p>

            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane' });
            // console.log(jane); // Don't do this
            console.log(jane.toJSON()); // This is good!
            console.log(JSON.stringify(jane, null, 4)); // This is also good!
" />
        </p>

        <h5 class="text-base">Updating an instance</h5>
        <p class="mb-3">If you change the value of some field of an instance, calling save again will update it
            accordingly:</p>

        <p>
            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane' });
jane.set({
  name: 'Ada',
  favoriteColor: 'blue',
});
// As above, the database still has 'Jane' and 'green'
await jane.save();
// The database now has 'Ada' and 'blue' for name and favorite color
" />
        </p>


        <p class="my-3">
            Note that the save() here will also persist any other changes that have been made on this instance, not just
            those in the previous set call. If you want to update a specific set of fields, you can use update:
        </p>


        <p>

            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane' });
jane.favoriteColor = 'blue';
await jane.update({ name: 'Ada' });
// The database now has 'Ada' for name, but still has the default 'green' for favorite color
await jane.save();
// Now the database has 'Ada' for name and 'blue' for favorite color
" />
        </p>

        <h5 class="text-base">Deleting an instance</h5>
        <p class="mb-3">You can delete an instance by calling destroy:</p>

        <p>
            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane' });
console.log(jane.name); // 'Jane'
await jane.destroy();
// Now this entry was removed from the database
" />
        </p>

        <br>

        <h5 class="text-base my-3">Incrementing and decrementing integer values</h5>

        <p class="mb-3">
            In order to increment/decrement values of an instance without running into concurrency issues, Sequelize
            provides the <span class="bg-primary/20 rounded p-1">increment</span> and <span
                class="bg-primary/20 rounded p-1">decrement</span> instance methods.
        </p>


        <p>
            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane', age: 100 });
const incrementResult = await jane.increment('age', { by: 2 });
// Note: to increment by 1 you can omit the `by` option and just do `user.increment('age')`

// In PostgreSQL, `incrementResult` will be the updated user, unless the option
// `{ returning: false }` was set (and then it will be undefined).

// In other dialects, `incrementResult` will be undefined. If you need the updated instance, you will have to call `user.reload()`.
" />
        </p>

        <br>

        <p>

            <CodePreview endpoint="js" code="const jane = await User.create({ name: 'Jane', age: 100, cash: 5000 });
await jane.increment({
  age: 2,
  cash: 100,
});

// If the values are incremented by the same amount, you can use this other syntax as well:
await jane.increment(['age', 'cash'], { by: 2 });" />


        </p>
        <br>

        <p class="my-3">
      More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
        to="https://sequelize.org/docs/v6/core-concepts/model-instances/">Sequelize website</NuxtLink>
    </p>

        <br>

        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/model-basics`" class="btn md:px-8 py-5 btn-primary">Model Basics
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/database/query-basics`" class="btn md:px-8 py-5 btn-primary">Query Basics
            </NuxtLink>
        </div>

    </div>
</template>