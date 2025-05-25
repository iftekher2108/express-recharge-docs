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


    <hr class=" opacity-20 my-5">

    <h4 class="text-lg pb-3">One-To-One relationships</h4>

    <h5 class="text-base">Options</h5>

    <p>
      Various options can be passed as a second parameter of the association call.
    </p>
    <p>
      <span class="text-primary font-bold">onDelete</span> and <span class="text-primary font-bold">onUpdate</span>
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

    <hr class="opacity-20 my-5">

    <h4 class="text-lg mb-3">One-To-Many relationships</h4>

    <p>
      <CodePreview endpoint="model.js" code="Team.hasMany(Player);
Player.belongsTo(Team);
" />
    </p>

    <p class="mt-3">
      This means that, unlike the One-To-One association, in which we had to choose where the foreign key would be
      placed, there is only one option in One-To-Many associations. For example, if one team has many players (and this
      way
      each player belongs to one team), then the only sensible implementation is to have a team_id column in the player
      table.
      The opposite is impossible, since one team has many players.
    </p>

    <p>
      In this example, we have the models Team and Player. We want to tell Sequelize that there is a One-To-Many
      relationship between them, meaning that one Team has many Players, while each Player belongs to a single Team.
    </p>

    <p class="mb-3">
      The main way to do this is as follows:
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Team.hasMany(Player);
Player.belongsTo(Team);
" />
    </p>

    <h5 class="text-base mt-3">Options</h5>

    <p>
      The options to be applied in this case are the same from the One-To-One case. For example, to change the name of
      the foreign key and make sure that the relationship is mandatory, we can do:
    </p>


    <p>
      <CodePreview endpoint="model.js" code="Team.hasMany(Player, {
  foreignKey: 'club_id',
});
Player.belongsTo(Team);
" />
    </p>

    <p class="my-3">
      Like One-To-One relationships, ON DELETE defaults to SET NULL and ON UPDATE defaults to CASCADE.
    </p>


    <hr class=" opacity-20 my-5">

    <h4 class="text-lg">Many-To-Many relationships</h4>

    <p>
      This cannot be represented by adding one foreign key to one of the tables, like the other relationships did.
      Instead, the concept of a <NuxtLink target="_blank" class="text-primary"
        to="https://en.wikipedia.org/wiki/Associative_entity">Junction Model</NuxtLink> is used. This will be an extra
      model (and extra table in the database) which will have two foreign key columns and will keep track of the
      associations. The junction table is also sometimes called join table or through table.
    </p>

    <p class="mb-3">
      For this example, we will consider the models Movie and Actor. One actor may have participated in many movies, and
      one movie had many actors involved with its production. The junction table that will keep track of the
      associations will be called ActorMovies, which will contain the foreign keys movieId and actorId.
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Team.hasMany(Player, {
  foreignKey: 'club_id',
});
Player.belongsTo(Team);
" />
    </p>

    <p class="my-3">
      <CodePreview endpoint="model.js" code="const Movie = require(@module/Movie/Models/movie);
Movie.belongsToMany(Actor, { through: 'ActorMovies' });
" />
    </p>

    <p>
       <CodePreview endpoint="model.js" code="const { DataTypes, Model } = require('sequelize');
const Movie = require('@module/Movie/Models/movie');
Actor extends Model {}

Actor.init({ name: DataTypes.STRING },
{
sequelize,
modelName: 'actor'
timeStamps: true
}
);

ActorMovies extends Model {}


ActorMovies.init({
  MovieId: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie, // 'Movies' would also work
      key: 'id',
    },
  },
  ActorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Actor, // 'Actors' would also work
      key: 'id',
    },
  },
    {
      sequelize,
      modelName:'actoreMovies',
      timeStamps:false
    }
});
Movie.belongsToMany(Actor, { through: ActorMovies });
Actor.belongsToMany(Movie, { through: ActorMovies });
" />
     
    </p>

    <p>

    </p>


  </div>
</template>