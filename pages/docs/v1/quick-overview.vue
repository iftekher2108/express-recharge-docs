<script setup>
const doc_v = "v1"

definePageMeta({
    layout: 'docs',
})

useHead({
    title: "Quick Overview - Express Recharge Node.js Backend Framework Features",
    meta: [
        {
            name: "author",
            content: "Iftekher Mahmud <iftekhermahmud1@gmail.com>"
        },
        {
            name: 'keywords',
            content: 'express recharge features, node.js backend overview, express.js modular structure, sequelize orm overview, express routing, node.js middleware, mysql2 integration, jwt authentication, backend architecture, secure node.js apps, express recharge quick overview, module based node framework'
        },
        {
            name: 'description',
            content: 'Get a quick overview of Express Recharge - a powerful Node.js backend framework with built-in modules, routing, middleware, database integration, JWT authentication, and scalable architecture.'
        },
        {
            property: 'og:title',
            content: 'Quick Overview - Features of Express Recharge Node.js Backend Framework'
        },
        {
            property: 'og:description',
            content: 'Explore the modular architecture, built-in authentication, ORM integration, middleware layers, and security features of Express Recharge.'
        },
        {
            property: 'og:type',
            content: 'article'
        },
        // {
        //   property: 'og:url',
        //   content: 'https://yourdomain.com/docs/v1_0_0/quick-overview' // Replace with actual URL
        // },
        // {
        //   property: 'og:image',
        //   content: 'https://yourdomain.com/images/express-recharge-overview-og.jpg' // Replace with your image
        // },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Quick Overview - Node.js Backend Features with Express Recharge'
        },
        {
            name: 'twitter:description',
            content: 'Take a quick tour of the powerful features included in Express Recharge: modules, routing, middleware, database ORM, security, and more.'
        },
        // {
        //   name: 'twitter:image',
        //   content: 'https://yourdomain.com/images/express-recharge-overview-og.jpg' // Replace with your image
        // }
    ],
    //   link: [
    //     {
    //       rel: 'canonical',
    //       href: 'https://yourdomain.com/docs/v1_0_0/quick-overview' // Replace with actual URL
    //     }
    //   ]
})

</script>
<template>
    <div>
        <div class="breadcrumbs text-sm">
            <ul>
                <li>home</li>
                <li>docs</li>
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

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-3">

            <div class="col-span-1">
                <CardView icon="fa-solid fa-hexagon-nodes-bolt" title="Modules" content="
                <p>
                    To generate a module-based content framework architecture in Express Recharge, create a scalable structure where each module follows a clear pattern for routes, controllers, Middleware, and models organization.
                </p>
                " :link="`/docs/${doc_v}/modules`" />


            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-route" title="Routing" content="
                <p>
                    Routing defines how an application’s endpoints respond to client requests, managing control flow and behavior using HTTP methods like GET, POST, PUT, and DELETE for efficient request processing.
                </p>
                " :link="`/docs/${doc_v}/basics/routing`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-shield-halved" title="Middleware" content="
                <p>
                    Middleware enables request handling logic like authentication, logging, and input validation, ensuring modular, reusable, and secure processing between the client request and server response.
                </p>
                " :link="`/docs/${doc_v}/basics/middleware`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-database" title="Database" content="
                <p>
                    Database integration offers seamless data management with ORM support, async/await, enabling easy queries, relationships, and dynamic migrations for efficient, secure, and scalable backend data operations.
                </p>
                " :link="`/docs/${doc_v}/database/getting-started`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-network-wired" title="Relationships" content="
                <p>
                   Database model relationship associations define how tables relate, including one-to-one, one-to-many, and many-to-many, enabling structured data organization and efficient querying across connected entities.
                </p>
                " :link="`/docs/${doc_v}/relationships/associations`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-user-tie" title="Authentication" content="
                <p>
                    Authentication and authorization are built-in systems that manage user identity and access control, ensuring only verified users can access specific resources based on defined roles and permissions.
                </p>
                " :link="`/docs/${doc_v}/authentication`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-hashtag" title="Security" content="
                <p>
                    Security features include server-side validation, authentication with Bcrypt, ORM for safe database interactions, CLI tools for secure operations, and RESTful API structure for controlled data access.
                </p>
                " :link="`/docs/${doc_v}/security`" />

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-user-tie" title="Module Alies" content="
                <p>
                    A module alias simplifies import paths in your project by creating shortcuts, making code cleaner, easier to read, and reducing long relative paths like ../../../ in large codebases.
                </p>
                " :link="`/docs/${doc_v}/basics/module-alies`" />

                <!-- // Example header to link to the icon image
                app.use((req, res, next) => {
                res.setHeader('X-Powered-By', 'MyAwesomeLib/1.0.0');
                res.setHeader('X-Icon', '/static/icon.png'); // Link to local icon
                next();
                }); -->

            </div>

            <div class="col-span-1">
                <CardView icon="fa-solid fa-user-tie" title="Utilities" content="
                <p>
                    This utilities folder includes essential tools: file handling, grouped routes, HTML-to-PDF conversion, and JWT authentication—making your backend development more modular, secure, and maintainable.
                </p>
                " :link="`/docs/${doc_v}/utilities/file-system`" />

            </div>

        </div>

        <h5 class="text-base mt-3">Modular Architecture Overview</h5>
        <p class="mb-3">
            Express Recharge uses a modular architecture where each module organizes routes, controllers, middleware,
            and models in a scalable structure. It features clean routing with HTTP methods, middleware for tasks like
            validation and authentication, ORM-based database access with relationships, and built-in authentication
            with role-based control. Security includes Bcrypt, input validation, and RESTful API design. Module aliases
            simplify imports, and utilities handle file uploads, JWT, route grouping, and PDF generation—ensuring a
            clean, maintainable, and secure backend framework.
        </p>

        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/configration`" class="btn md:px-8 py-5 btn-primary">Configration</NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/modules`" class="btn md:px-8 py-5 btn-primary">Modules
            </NuxtLink>
        </div>

    </div>
</template>