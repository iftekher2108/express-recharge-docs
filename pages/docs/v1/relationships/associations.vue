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

    <h5 class="text-base mb-3">
      Eager Loading Example
    </h5>

    <p>
      <CodePreview endpoint="model.js" code="const awesomeCaptain = await Captain.findOne({
  where: {
    name: 'Jack Sparrow',
  },
  include: Ship,
});
// Now the ship comes with it
console.log('Name:', awesomeCaptain.name);
console.log('Skill Level:', awesomeCaptain.skillLevel);
console.log('Ship Name:', awesomeCaptain.ship.name);
console.log('Amount of Sails:', awesomeCaptain.ship.amountOfSails);
" />
    </p>

    <p class="my-3">
      As shown above, Eager Loading is performed in Sequelize by using the include option. Observe that here only one
      query was performed to the database (which brings the associated data along with the instance).
    </p>

    <p class="my-3">
      This was just a quick introduction to Eager Loading in Sequelize. There is a lot more to it, which you can learn
      at the <NuxtLink class="text-primary" target="_blank"
        to="https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/">dedicated guide on Eager Loading
      </NuxtLink>.
    </p>

    <hr class=" opacity-20 my-5">

    <h4 class="text-lg my-3">Creating, updating and deleting</h4>

    <p>
      The above showed the basics on queries for fetching data involving associations. For creating, updating and
      deleting, you can either:
    </p>

    <li class="mb-3">Use the standard model queries directly:</li>

    <p>
      <CodePreview endpoint="model.js" code="// Example: creating an associated model using the standard methods
Bar.create({
  name: 'My Bar',
  fooId: 5,
});
// This creates a Bar belonging to the Foo of ID 5 (since fooId is
// a regular column, after all). Nothing very clever going on here.
" />
    </p>

    <p class="my-3">
      <span class="text-error font-bold">Note:</span> The save() instance method is not aware of associations. In other
      words, if you change a value from a child
      object that was eager loaded along a parent object, calling save() on the parent will completely ignore the change
      that happened on the child.
    </p>

    <h5 class="text-base">the default setup</h5>
    <p class="mb-3">
      By using simply Ship.belongsTo(Captain), sequelize will generate the foreign key name automatically:
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Ship.belongsTo(Captain); // This creates the `captainId` foreign key in Ship.

// Eager Loading is done by passing the model to `include`:
console.log((await Ship.findAll({ include: Captain })).toJSON());
// Or by providing the associated model name:
console.log((await Ship.findAll({ include: 'captain' })).toJSON());

// Also, instances obtain a `getCaptain()` method for Lazy Loading:
const ship = Ship.findOne();
console.log((await ship.getCaptain()).toJSON());
" />
    </p>

    <h5 class="text-base my-3">Providing the foreign key name directly</h5>

    <p class="mb-3">
      The foreign key name can be provided directly with an option in the association definition, as follows:
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Ship.belongsTo(Captain, { foreignKey: 'bossId' }); // This creates the `bossId` foreign key in Ship.

// Eager Loading is done by passing the model to `include`:
console.log((await Ship.findAll({ include: Captain })).toJSON());
// Or by providing the associated model name:
console.log((await Ship.findAll({ include: 'Captain' })).toJSON());

// Also, instances obtain a `getCaptain()` method for Lazy Loading:
const ship = await Ship.findOne();
console.log((await ship.getCaptain()).toJSON());
" />
    </p>

    <h5 class="text-base my-3">Defining an Alias</h5>

    <p>
      Defining an Alias is more powerful than simply specifying a custom name for the foreign key. This is better
      understood with an example:
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Ship.belongsTo(Captain, { as: 'leader' }); // This creates the `leaderId` foreign key in Ship.

// Eager Loading no longer works by passing the model to `include`:
console.log((await Ship.findAll({ include: Captain })).toJSON()); // Throws an error
// Instead, you have to pass the alias:
console.log((await Ship.findAll({ include: 'leader' })).toJSON());
// Or you can pass an object specifying the model and alias:
console.log(
  (
    await Ship.findAll({
      include: {
        model: Captain,
        as: 'leader',
      },
    })
  ).toJSON(),
);

// Also, instances obtain a `getLeader()` method for Lazy Loading:
const ship = await Ship.findOne();
console.log((await ship.getLeader()).toJSON());
" />
    </p>

    <p class="mt-3">
      Aliases are especially useful when you need to define two different associations between the same models. For
      example, if we have the models Mail and Person, we may want to associate them twice, to represent the sender and
      receiver of the Mail. In this case we must use an alias for each association, since otherwise a call like
      mail.getPerson() would be ambiguous. With the sender and receiver aliases, we would have the two methods available
      and working: mail.getSender() and mail.getReceiver(), both of them returning a Promise.
    </p>

    <p>
      When defining an alias for a hasOne or belongsTo association, you should use the singular form of a word (such as
      leader, in the example above). On the other hand, when defining an alias for hasMany and belongsToMany, you should
      use the plural form. Defining aliases for Many-to-Many relationships (with belongsToMany) is covered in the
      <NuxtLink class="text-primary" target="_blank"
        to="https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/">Advanced Many-to-Many
        Associations guide</NuxtLink>.
    </p>

    <hr class=" opacity-20 my-5">

    <h5 class="text-base my-3">Doing both things</h5>

    <p class="mb-3">
      We can define and alias and also directly define the foreign key:
    </p>

    <p>
      <CodePreview endpoint="model.js" code="Ship.belongsTo(Captain, { as: 'leader', foreignKey: 'bossId' }); // This creates the `bossId` foreign key in Ship.

// Since an alias was defined, eager Loading doesn't work by simply passing the model to `include`:
console.log((await Ship.findAll({ include: Captain })).toJSON()); // Throws an error
// Instead, you have to pass the alias:
console.log((await Ship.findAll({ include: 'leader' })).toJSON());
// Or you can pass an object specifying the model and alias:
console.log(
  (
    await Ship.findAll({
      include: {
        model: Captain,
        as: 'leader',
      },
    })
  ).toJSON(),
);

// Also, instances obtain a `getLeader()` method for Lazy Loading:
const ship = await Ship.findOne();
console.log((await ship.getLeader()).toJSON());
" />
    </p>


    <h4 class="text-lg my-3">Special methods/mixins added to instances</h4>

    <p>
      When an association is defined between two models, the instances of those models gain special methods to interact
      with their associated counterparts.
    </p>

    <p class="mb-3">
      For example, if we have two models, Foo and Bar, and they are associated, their instances will have the following
      methods/mixins available, depending on the association type:
    </p>


    <h5 class="text-base my-3">foo.hasOne(Bar)</h5>
    <li>foo.getBar()</li>
    <li>foo.setBar()</li>
    <li>foo.createBar()</li>

    <p class="my-3">Example:</p>

    <p>
      <CodePreview endpoint="model.js" code="const foo = await Foo.create({ name: 'the-foo' });
const bar1 = await Bar.create({ name: 'some-bar' });
const bar2 = await Bar.create({ name: 'another-bar' });
console.log(await foo.getBar()); // null
await foo.setBar(bar1);
console.log((await foo.getBar()).name); // 'some-bar'
await foo.createBar({ name: 'yet-another-bar' });
const newlyAssociatedBar = await foo.getBar();
console.log(newlyAssociatedBar.name); // 'yet-another-bar'
await foo.setBar(null); // Un-associate
console.log(await foo.getBar()); // null
" />
    </p>


    

  </div>
</template>