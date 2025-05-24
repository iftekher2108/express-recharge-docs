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
                <li>relationships</li>
                <li>associations</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Model Associations</h1>

        <p class="my-3">
            To do this, Sequelize provides four types of associations that should be combined to create them:
        </p>

        <li>The HasOne association</li>
        <li>The BelongsTo association</li>
        <li>The HasMany association</li>
        <li class="mb-3">The BelongsToMany association</li>

        <p>
            The guide will start explaining how to define these four types of associations, and then will follow up to
            explain how to combine those to define the three standard association types (One-To-One, One-To-Many and
            Many-To-Many).
        </p>


        <h5 class="text-base mt-3">Defining the Sequelize associations</h5>

        <p class="mb-3">
            The four association types are defined in a very similar way. Let's say we have two models, A and B. Telling
            Sequelize that you want an association between the two needs just a function call:
        </p>

        <p>
            <CodePreview endpoint="user.js" code="const post = require('@module/Post/Models/post')
User.hasOne(post); // User HasOne post
User.belongsTo(post); // User BelongsTo post
User.hasMany(post); // User HasMany post
User.belongsToMany(post, { through: 'C' }); // User BelongsToMany post through the junction table C
" />
        </p>

        <p class="my-3">
            They all accept an options object as a second parameter (optional for the first three, mandatory for
            belongsToMany containing at least the through property):
        </p>

        <p>
            <CodePreview endpoint="user.js" code="User.hasOne(post, {
  /* options */
});
User.belongsTo(post, {
  /* options */
});
User.hasMany(post, {
  /* options */
});
User.belongsToMany(post, { through: 'C', /* options */ });
" />
        </p>


        <h4 class="text-lg my-3">One-To-One relationships</h4>

        <h5 class="text-base">Options</h5>

        <p>
            Various options can be passed as a second parameter of the association call.
        </p>
        <p>
            <span class="text-primary font-bold">onDelete</span> and <span
                class="text-primary font-bold">onUpdate</span>
        </p>
        <p class="mb-3">
            For example, to configure the ON DELETE and ON UPDATE behaviors, you can do:
        </p>

        <p>
            <CodePreview endpoint="user.js" code="User.hasOne(post, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
});
User.belongsTo(post);
" />
        </p>

        <p class="mt-3">
            The possible choices are RESTRICT, CASCADE, NO ACTION, SET DEFAULT and SET NULL.
        </p>
        <p class="mb-3">
            The defaults for the One-To-One associations is SET NULL for ON DELETE and CASCADE for ON UPDATE.
        </p>


        <h5 class="text-base mt-3">
            Customizing the foreign key
        </h5>

        <p class="mb-3">
            Both the hasOne and belongsTo calls shown above will infer that the foreign key to be created should be
            called fooId. To use a different name, such as myFooId:
        </p>


        <p>
            <CodePreview endpoint="User.js" code="// Option 1
User.hasOne(post, {
  foreignKey: 'post_id',
});
post.belongsTo(User);

// Option 2
User.hasOne(post, {
  foreignKey: {
    name: 'post_id',
  },
});
post.belongsTo(User);

// Option 3
User.hasOne(post);
post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Option 4
User.hasOne(post);
post.belongsTo(User, {
  foreignKey: {
    name: 'user_id',
  },
});
" />
        </p>

        <p class="mt-3">
            As shown above, the foreignKey option accepts a string or an object. When receiving an object, this object
            will be used as the definition for the column just like it would do in a standard sequelize.define call.
            Therefore, specifying options such as type, allowNull, defaultValue, etc, just work.
        </p>

        <p class="mb-3">
            For example, to use UUID as the foreign key data type instead of the default (INTEGER), you can simply do:
        </p>

         <p>
            <CodePreview endpoint="User.js" code="const { DataTypes } = require('Sequelize');

User.hasOne(post, {
  foreignKey: {
    // name: 'post_id'
    type: DataTypes.UUID,
  },
});
post.belongsTo(User);
" />
        </p>


        <h4 class="text-lg my-3">One-To-Many relationships</h4>






    </div>
</template>