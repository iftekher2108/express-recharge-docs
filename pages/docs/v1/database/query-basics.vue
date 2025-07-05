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
                <li>query-basics</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Model Querying</h1>

        <h5 class="text-base my-3">Simple INSERT queries</h5>

        <p>
            <CodePreview endpoint="js" code="// Create a new user
const jane = await User.create({ firstName: 'Jane', lastName: 'Doe' });
console.log('Jane's auto-generated ID:'', jane.id);
" />
        </p>

        <p class="my-3">
            The <span class="bg-primary/20 rounded p-1">Model.create()</span> method is a shorthand for building an
            unsaved instance with <span class="bg-primary/20 rounded p-1">Model.build()</span> and saving the instance
            with <span class="bg-primary/20 rounded p-1">instance.save()</span>.
        </p>

        <h5 class="text-base my-3">Creating in bulk</h5>

        <p>
            Sequelize provides the Model.bulkCreate method to allow creating multiple records at once, with only one
            query.
        </p>
        <p>
            The usage of Model.bulkCreate is very similar to Model.create, by receiving an array of objects instead of a
            single object.
        </p>

        <p>
            <CodePreview endpoint="js" code="const captains = await Captain.bulkCreate([{ name: 'Jack Sparrow' }, { name: 'Davy Jones' }]);
console.log(captains.length); // 2
console.log(captains[0].name); // 'Jack Sparrow'
console.log(captains[0].id); // 1 // (or another auto-generated value)
" />
        </p>



        <h5 class="text-base">Simple SELECT queries</h5>
        <p class="mb-3">
            You can read the whole table from the database with the findAll method:
        </p>

        <p>
            <CodePreview endpoint="js" code="// Find all users
const users = await User.findAll();
console.log('All users:', users.toJSON());
// or
console.log('All users:', JSON.stringify(users, null, 2));
" />
        </p>

        <br>

        <p>
            <CodePreview endpoint="sql" code="SELECT * FROM user
" />
        </p>
        <br>

        <h5 class="text-base">Specifying attributes for SELECT queries</h5>
        <p class="mb-3">
            To select only some attributes, you can use the attributes option:
        </p>

        <p>
            <CodePreview endpoint="js" code="user.findAll({
  attributes: ['foo', 'bar'],
});
" />
        </p>
        <br>

        <p>
            <CodePreview endpoint="sql" code="SELECT foo, bar FROM user
" />
        </p>
        <br>
        <p>
            Attributes can be renamed using a nested array:
        </p>

        <p>
            <CodePreview endpoint="js" code="user.findAll({
  attributes: ['foo', ['bar', 'baz'], 'qux'],
});
" />
        </p>

        <br>

        <p>
            <CodePreview endpoint="sql" code="SELECT foo, bar AS baz, qux FROM user
" />
        </p>

        <br>

        <p>
            You can use sequelize.fn to do aggregations:
        </p>
        <br>
        <p>
            <CodePreview endpoint="js" code="user.findAll({
  attributes: ['foo', [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'], 'bar'],
});
" />
        </p>
        <br>
        <p>
            <CodePreview endpoint="sql" code="SELECT foo, COUNT(hats) AS n_hats, bar FROM user
" />
        </p>

        <br>

        <h5 class="text-base my-3">Applying WHERE clauses</h5>

        <p>
            <CodePreview endpoint="js" code="Post.findAll({
  where: {
    authorId: 12,
    status: 'active',
  },
});
" />
        </p>

        <br>

        <p>
            <CodePreview endpoint="sql" code="SELECT * FROM post WHERE authorId = 12 AND status = 'active';
" />
        </p>

        <p class="my-3">
            There are lots of operators to use for the where clause, available as Symbols from Op.
        </p>


        <p>
            <CodePreview endpoint="js" code="const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.and]: [{ a: 5 }, { b: 6 }],            // (a = 5) AND (b = 6)
    [Op.or]: [{ a: 5 }, { b: 6 }],             // (a = 5) OR (b = 6)
    someAttribute: {
      // Basics
      [Op.eq]: 3,                              // = 3
      [Op.ne]: 20,                             // != 20
      [Op.is]: null,                           // IS NULL
      [Op.not]: true,                          // IS NOT TRUE
      [Op.or]: [5, 6],                         // (someAttribute = 5) OR (someAttribute = 6)

      // Using dialect specific column identifiers (PG in the following example):
      [Op.col]: 'user.organization_id',        // = 'user'.'organization_id'

      // Number comparisons
      [Op.gt]: 6,                              // > 6
      [Op.gte]: 6,                             // >= 6
      [Op.lt]: 10,                             // < 10
      [Op.lte]: 10,                            // <= 10
      [Op.between]: [6, 10],                   // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15],               // NOT BETWEEN 11 AND 15

      // Other operators

      [Op.all]: sequelize.literal('SELECT 1'), // > ALL (SELECT 1)

      [Op.in]: [1, 2],                         // IN [1, 2]
      [Op.notIn]: [1, 2],                      // NOT IN [1, 2]

      [Op.like]: '%hat',                       // LIKE '%hat'
      [Op.notLike]: '%hat',                    // NOT LIKE '%hat'
      [Op.startsWith]: 'hat',                  // LIKE 'hat%'
      [Op.endsWith]: 'hat',                    // LIKE '%hat'
      [Op.substring]: 'hat',                   // LIKE '%hat%'
      [Op.iLike]: '%hat',                      // ILIKE '%hat' (case insensitive) (PG only)
      [Op.notILike]: '%hat',                   // NOT ILIKE '%hat'  (PG only)
      [Op.regexp]: '^[h|a|t]',                 // REGEXP/~ '^[h|a|t]' (MySQL/PG only)
      [Op.notRegexp]: '^[h|a|t]',              // NOT REGEXP/!~ '^[h|a|t]' (MySQL/PG only)
      [Op.iRegexp]: '^[h|a|t]',                // ~* '^[h|a|t]' (PG only)
      [Op.notIRegexp]: '^[h|a|t]',             // !~* '^[h|a|t]' (PG only)

      [Op.any]: [2, 3],                        // ANY (ARRAY[2, 3]::INTEGER[]) (PG only)
      [Op.match]: Sequelize.fn('to_tsquery', 'fat & rat') // match text search for strings 'fat' and 'rat' (PG only)

      // In Postgres, Op.like/Op.iLike/Op.notLike can be combined to Op.any:
      [Op.like]: { [Op.any]: ['cat', 'hat'] }  // LIKE ANY (ARRAY['cat', 'hat'])

      // There are more postgres-only range operators, see below
    }
  }
});
" />
        </p>

        <h5 class="text-base my-3">Simple UPDATE queries</h5>

        <p class="my-3">
            Update queries also accept the where option, just like the read queries shown above.
        </p>

        <p>
            <CodePreview endpoint="js" code='// Change everyone without a last name to "Doe"
await User.update(
  { lastName: "Doe" },
  {
    where: {
      lastName: null,
    },
  },
);
' />
        </p>

        <br>

        <h5 class="text-base">Simple DELETE queries</h5>

        <p class="my-3">
            Delete queries also accept the where option, just like the read queries shown above.
        </p>

        <p>
            <CodePreview endpoint="js" code='// Delete everyone named "Jane"
await User.destroy({
  where: {
    firstName: "Jane",
  },
});
' />
        </p>

        <h5 class="text-base my-3">Ordering and Grouping</h5>

        <p class="mb-3">
            Sequelize provides the order and group options to work with ORDER BY and GROUP BY.
        </p>

        <h5 class="text-base">Ordering</h5>

        <p class="mb-3">
            The order option takes an array of items to order the query by or a sequelize method. These items are
            themselves arrays in the form [column, direction]. The column will be escaped correctly and the direction
            will be checked in a whitelist of valid directions (such as ASC, DESC, NULLS FIRST, etc).
        </p>

        <p>
            <CodePreview endpoint="js" code="Subtask.findAll({
  order: [
    // Will escape title and validate DESC against a list of valid direction parameters
    ['title', 'DESC'],

    // Will order by max(age)
    sequelize.fn('max', sequelize.col('age')),

    // Will order by max(age) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],

    // Will order by  otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],

    // Will order an associated model's createdAt using the model name as the association's name.
    [Task, 'createdAt', 'DESC'],

    // Will order through an associated model's createdAt using the model names as the associations' names.
    [Task, Project, 'createdAt', 'DESC'],

    // Will order by an associated model's createdAt using the name of the association.
    ['Task', 'createdAt', 'DESC'],

    // Will order by a nested associated model's createdAt using the names of the associations.
    ['Task', 'Project', 'createdAt', 'DESC'],

    // Will order by an associated model's createdAt using an association object. (preferred method)
    [Subtask.associations.Task, 'createdAt', 'DESC'],

    // Will order by a nested associated model's createdAt using association objects. (preferred method)
    [Subtask.associations.Task, Task.associations.Project, 'createdAt', 'DESC'],

    // Will order by an associated model's createdAt using a simple association object.
    [{ model: Task, as: 'Task' }, 'createdAt', 'DESC'],

    // Will order by a nested associated model's createdAt simple association objects.
    [{ model: Task, as: 'Task' }, { model: Project, as: 'Project' }, 'createdAt', 'DESC'],
  ],

  // Will order by max age descending
  order: sequelize.literal('max(age) DESC'),

  // Will order by max age ascending assuming ascending is the default order when direction is omitted
  order: sequelize.fn('max', sequelize.col('age')),

  // Will order by age ascending assuming ascending is the default order when direction is omitted
  order: sequelize.col('age'),

  // Will order randomly based on the dialect (instead of fn('RAND') or fn('RANDOM'))
  order: sequelize.random(),
});

Foo.findOne({
  order: [
    // will return `name`
    ['name'],
    // will return `username` DESC
    ['username', 'DESC'],
    // will return max(`age`)
    sequelize.fn('max', sequelize.col('age')),
    // will return max(`age`) DESC
    [sequelize.fn('max', sequelize.col('age')), 'DESC'],
    // will return otherfunction(`col1`, 12, 'lalala') DESC
    [sequelize.fn('otherfunction', sequelize.col('col1'), 12, 'lalala'), 'DESC'],
    // will return otherfunction(awesomefunction(`col`)) DESC, This nesting is potentially infinite!
    [sequelize.fn('otherfunction', sequelize.fn('awesomefunction', sequelize.col('col'))), 'DESC'],
  ],
});
" />
        </p>


        <h5 class="text-base my-3">
            Grouping
        </h5>

        <p>
            <CodePreview endpoint="js" code="Project.findAll({ group: 'name' });
// yields 'GROUP BY name'
" />
        </p>

        <h5 class="text-base my-3">Limits and Pagination</h5>

        <p class="mb-3">The limit and offset options allow you to work with limiting / pagination:</p>

        <p>
            <CodePreview endpoint="js" code="// Fetch 10 instances/rows
Project.findAll({ limit: 10 });

// Skip 8 instances/rows
Project.findAll({ offset: 8 });

// Skip 5 instances and fetch the 5 after that
Project.findAll({ offset: 5, limit: 5 });
" />
        </p>

        <br>

        <h3 class="text-lg">Utility methods</h3>
        <h5 class="text-base">count, max, min and sum</h5>
        <p class="mb-3">
            Sequelize also provides the count, max, min and sum convenience methods.
        </p>


        <p>
            <CodePreview endpoint="js" code="
await User.count({ where: { age: { [Op.lt]: 20 } } }); // 10
await User.max('age'); // 40
await User.max('age', { where: { age: { [Op.lt]: 20 } } }); // 10
await User.min('age'); // 5
await User.min('age', { where: { age: { [Op.gt]: 5 } } }); // 10
await User.sum('age'); // 55
await User.sum('age', { where: { age: { [Op.gt]: 5 } } }); // 50
" />
        </p>
        <br>
        <h5 class="text-base">increment, decrement</h5>
        <p class="mb-3">Sequelize also provides the increment convenience method. <br>
            Let's assume we have a user, whose age is 10.</p>

        <p>
           <CodePreview endpoint="js" code="await User.increment({ age: 5 }, { where: { id: 1 } }); // Will increase age to 15
await User.increment({ age: -5 }, { where: { id: 1 } }); // Will decrease age to 5
" /> 
        </p>

        <br>

        <p class="my-3">
      More you can find it out in official <NuxtLink class="text-primary hover:underline" target="_blank"
        to="https://sequelize.org/docs/v6/core-concepts/model-querying-basics/">Sequelize website</NuxtLink>
    </p>

        <br>


         <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/database/model-instances`" class="btn md:px-8 py-5 btn-primary">Model instances
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/database/query-finder`" class="btn md:px-8 py-5 btn-primary">Query Finder
            </NuxtLink>
        </div>

    </div>
</template>