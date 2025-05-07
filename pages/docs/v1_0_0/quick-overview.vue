<script setup>
const doc_v = "v1_0_0"

definePageMeta({
    layout: 'docs',
})


useHead({
    title: "Quick Overview - Express Recharge Node.js Backend framework",
    meta: [
        {
            name: "author",
            content: "iftekher mahmud <iftekhermahmud1@gmail.com>"
        },
        {
            name: 'keywords',
            content: 'express recharge, node.js backend, express.js 5, sequelize orm, bcryptjs, jwt authentication, multer file upload, mysql2 database, express rate limit, cors middleware, dotenv config, puppeteer automation, nodemon, express-validator, module-alias, recharge-cli'
        },
        {
            name: 'description',
            content: 'Explore the best Node.js backend framwork including Express.js, Sequelize ORM, JWT authentication, BcryptJS, and Puppeteer. Build fast, secure, and scalable APIs.'
        },
        {
            property: 'og:title',
            content: 'Top Node.js Backend framework'
        },
        {
            property: 'og:description',
            content: 'Master the latest Node.js backend tools like Express, Sequelize, and JWT to build powerful APIs.'
        },
        // { property: 'og:image', content: post.image },
        // { property: 'og:url', content: `https://yoursite.com/blog/${post.slug}` },
    ],
    // link: [
    //   { rel: 'canonical', href: `https://yoursite.com/blog/${post.slug}` }
    // ]
})


</script>
<template>
    <div>
        <div class="breadcrumbs text-sm">
            <ul>
                <li>home</li>
                <li>Docs</li>
                <li>quick-overview</li>
            </ul>
        </div>
        <h1 class=" text-3xl font-bold mb-4">Qucik Overview</h1>

        <p>
            This section highlights the core capabilities and advantages of the web framework used in this project. A
            modern web framework streamlines development by offering built-in tools, structured architecture, and
            performance optimizations.
        </p>

        <br>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-3">

            <div class="col-span-1">
                <CardView icon="fa-solid fa-hexagon-nodes-bolt" title="Modules" content="
                <p>
                    To generate a module-based content framework architecture in Express Recharge, create a scalable structure where each module follows a clear pattern for routes, controllers, Middleware, and models organization.
                </p>
                " />
                <!-- :link="`/docs/${doc_v}/module`" -->

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-route" title="Routing" content="
                <p>
                    Routing defines how an application’s endpoints respond to client requests, managing control flow and behavior using HTTP methods like GET, POST, PUT, and DELETE for efficient request processing.
                </p>
                " />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-shield-halved" title="Middleware" content="
                <p>
                    Middleware enables request handling logic like authentication, logging, and input validation, ensuring modular, reusable, and secure processing between the client request and server response.
                </p>
                " />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-database" title="Database" content="
                <p>
                    Database integration offers seamless data management with ORM support, async/await, enabling easy queries, relationships, and dynamic migrations for efficient, secure, and scalable backend data operations.
                </p>
                " />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-user-tie" title="Authentication" content="
                <p>
                    Authentication and authorization are built-in systems that manage user identity and access control, ensuring only verified users can access specific resources based on defined roles and permissions.
                </p>
                " />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-brands fa-font-awesome" title="Security" content="
                <p>
                    Security features include server-side validation, authentication with Bcrypt, ORM for safe database interactions, CLI tools for secure operations, and RESTful API structure for controlled data access.
                </p>
                " />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-user-tie" title="Authentication" content="
                <p>
                    Authentication and authorization are built-in systems that manage user identity and access control, ensuring only verified users can access specific resources based on defined roles and permissions.
                </p>
                " />

                // Example header to link to the icon image
                app.use((req, res, next) => {
                res.setHeader('X-Powered-By', 'MyAwesomeLib/1.0.0');
                res.setHeader('X-Icon', '/static/icon.png'); // Link to local icon
                next();
                });

            </div>



        </div>

    </div>
</template>