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
                <li>basics</li>
                <li>routing</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Routing</h1>

        <h5 class="text-base">🧭 What is Routing?</h5>

        <p>
            Routing refers to how an application’s endpoints (URIs) respond to client requests. Each route can have:
        </p>

        <p>
            A path (e.g. /users)
        </p>

        <p>
            An HTTP method (e.g. GET, POST)
        </p>

        <p>
            A callback function to handle the logic
        </p>


        <h5 class="text-base mb-3">🔗 Basic Route Example</h5>

        <p>
            <CodePreview endpoint="Modules/Users/Routes/routes.js" code="const express = require('express');
const router = express.Router();

// GET route
router.get('/users', (req, res) => {
  res.send('List of users');
});

// POST route
router.post('/users', (req, res) => {
  res.send('User created');
});

module.exports = router;

" />
        </p>

        <h5 class="text-base my-3">In the example above:</h5>

        <li><span class="p-1 rounded bg-primary/20">GET /users</span> returns a list of users.</li>
        <li><span class="p-1 rounded bg-primary/20">POST /users</span> handles user creation.</li>


        <h5 class="text-base mb-3">You can then import this route in your main app.js:</h5>

        <p>
            <CodePreview endpoint="app.js" code="const userRoute = require('./routes/userRoutes');
app.use('/', userRoute);
" />
        </p>

        <br>

        <h5 class="text-base">📁 Folder-Based Routing in Modular Projects</h5>


        <p>
            In Express Recharge, routes are defined inside each module, under Modules/{ModuleName}/routes/routes.js.
        </p>

        <p class="mb-3">
            Example project structure:
        </p>

        <p>
            <CodePreview copy="false" endpoint="Folder Stracture" code="Modules/
  └── Users/
      ├── controllers/
          └── UserController.js
      ├── routes/
          └── routes.js
" />
        </p>


        <h5 class="text-base py-3">Step 1: Define Controller Logic</h5>

        <p>
            <CodePreview endpoint="Modules/Users/Controllers/UserController.js" code="
exports.getUsers = (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }]);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `User ${name} created.` });
};
" />
        </p>


        <h5 class="text-base my-3">Step 2: Connect Routes</h5>

        <p>
            <CodePreview endpoint="Modules/Users/Routes/routes.js" code="const express = require('express');
const router = express.Router();
const UserController = require('@modules/Users/Controllers/UserController');

// GET users
router.get('/users', UserController.getUsers);

// POST create user
router.post('/users', UserController.createUser);

module.exports = router;
" />
        </p>

        <h5 class="text-base my-3">Step 3: Register in mainRoute.js</h5>

        <p>
            <CodePreview endpoint="mainRoute.js" code="const userRoute = require('@modules/Users/Routes/routes');
app.use('/', userRoute);

" />
        </p>

        <h5 class="text-base my-3">✨ Advanced Routing Tips</h5>

        <li>Use middleware in routes to add validation, authentication, or logging.</li>
        <li>Group routes using express.Router() for each module.</li>
        <li>Prefix routes using app.use('/api/users', userRoutes) to scope endpoints.</li>
        <li>Use async/await with try/catch in controllers for better error handling.</li>



        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/modules`" class="btn md:px-8 py-5 btn-primary">Modules
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/basics/middleware`" class="btn md:px-8 py-5 btn-primary">Middleware
            </NuxtLink>
        </div>


    </div>
</template>
