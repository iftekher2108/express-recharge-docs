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

        <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-3">

            <div class="col-span-1">
                <CardView
                icon="fa-solid fa-hexagon-nodes-bolt"
                title="Module"
                content="
                <p>
                    To generate a module-based content framework architecture in Express Recharge, you can create a scalable structure where each module pattern.
                </p>
                "
                />
<!-- :link="`/docs/${doc_v}/module`" -->

            </div>

            <div class="col-span-1">
                <CardView
                
                />

            </div>

        </div>

    </div>
</template>