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
                <li>middleware</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Middleware</h1>

        <p>
            Middleware in Express.js refers to functions that execute during the request–response cycle. They can
            manipulate the request (req) or response (res) objects or terminate the request cycle. Middleware is
            essential for authentication, validation, logging, and more.
        </p>

        <h5 class="text-base my-3">🧠 What is Middleware?</h5>

        <p>
            Middleware functions are functions that have access to:
        </p>

        <li>req (request object)</li>
        <li>res (response object)</li>
        <li>next (function to pass control to the next middleware)</li>

        <p class="my-3">Basic structure:</p>
        <p>
            <CodePreview endpoint="Modules/Users/Middlewares/example.js" code=" const example = (req, res, next) => {
  // your logic here
  next(); // proceed to next middleware or route
}
  module.exports = example
" />
        </p>

        <h5 class="text-base my-3">⚙️ Where Middleware is Used</h5>

        <li>Request logging</li>
        <li>Authentication & Authorization</li>
        <li>Body parsing</li>
        <li>Error handling</li>
        <li>Custom headers</li>
        <li>Input validation</li>


        <h5 class="text-base my-3">🧾 Global Middleware Example</h5>

        <p>
            <CodePreview endpoint="Middlewares/example.js" code="const express = require('express');
const app = express();

// Global middleware
app.use((req, res, next) => {
  console.log(`Request made to: ${req.url}`);
  next(); // move to the next handler
});
" />
        </p>


        <h5 class="text-base my-3">🔐 Authentication Middleware Example</h5>

        <p>
            <CodePreview endpoint="Middlewares/Auth.js" code='const jwt = require("jsonwebtoken");
const User = require("@modules/Users/model/User");
const { verifyToken } = require("recharge-utils");

const Auth = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from the header (Authorization: Bearer <token>)

  if (!token) {
    return res.status(401).json({ message: "Authentication required" });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = user; // Attach user data to the request object
    next();
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = Auth;
' />
        </p>

        <h5 class="text-base my-3">🛣️ Using Middleware in module Routes</h5>

        <p>
            <CodePreview endpoint="Modules/Users/Routes/routes.js" code='const express = require("express");
const router = express.Router();
const Auth = require("@middlewares/Auth");
const UserController = require("@modules/Users/controllers/UsersController");

// Use middleware in route
router.get("/dashboard", auth, UserController.dashboard);

module.exports = router;
' />
        </p>

        <h5 class="text-base my-3">🌍 Applying Middleware Globally</h5>

        <p class="mb-3">If you want middleware applied to all routes (like CORS or rate limiters), register it in
            app.js:</p>


        <p>
            <CodePreview endpoint="mainRoute.js" code='const cors = require("cors");
const rateLimiter = require("@middlewares/rateLimiter");

router.use(cors({ origin: "*" }));
router.use(rateLimiter); // custom middleware
' />
        </p>


        <h5 class="text-base my-3">🧰 Custom Middleware with Parameters</h5>

        <p class="mb-3">You can even create factory functions for dynamic behavior:</p>

        <p>
            <CodePreview endpoint="Middlewares/role.js" code='module.exports = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
};
' />
        </p>

        <p class="my-3">Use in routes:</p>

        <p>
            <CodePreview endpoint="Middlewares/role.js" code='const roleCheck = require("@middlewares/role");

router.get("/admin/only", roleCheck("admin"), AdminController.onlyForAdmins);
' />
        </p>

        <h5 class="text-base my-3">🧠 Summary</h5>
        <p>
            Middleware is one of the most powerful features of Express. In Express Recharge, we organize middleware in
            each module to keep logic separated and scalable.
        </p>

        <h4 class="text-base">✅ Best Practices:</h4>

        <li>Keep middleware reusable and modular.</li>
        <li>Use named files like Auth.js, etc.</li>
        <li>Avoid overly large middleware – keep them focused.</li>



        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/basics/routing`" class="btn md:px-8 py-5 btn-primary">Routing
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/basics/module-alies`" class="btn md:px-8 py-5 btn-primary">Module alies
            </NuxtLink>
        </div>



    </div>
</template>