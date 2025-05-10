<script setup>
const doc_v = "v1_0_0"
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

        <h1 class=" text-3xl font-bold mb-4">Routing of Express Recharge</h1>

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


        <h5 class="text-base">🔗 Basic Route Example</h5>

        <p>
            <CodePreview endpoint="Modules/Users/routes/routes.js" code="const express = require('express');
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







    </div>
</template>
