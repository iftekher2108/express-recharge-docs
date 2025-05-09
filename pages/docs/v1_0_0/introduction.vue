<script setup>
const doc_v = "v1_0_0"
definePageMeta({
    layout: 'docs',
})

useHead({
  title: "Express Recharge - Modern Node.js Backend Framework for Secure API Development",
  meta: [
    {
      name: "author",
      content: "Iftekher Mahmud <iftekhermahmud1@gmail.com>"
    },
    {
      name: 'keywords',
      content: 'Express Recharge, Node.js backend framework, Express.js 5, RESTful API, Sequelize ORM, JWT authentication, BcryptJS, MySQL2, Multer file upload, dotenv config, Puppeteer automation, Nodemon, express-rate-limit, backend CLI, CORS middleware, module-alias, scalable backend, secure APIs'
    },
    {
      name: 'description',
      content: 'Express Recharge is a powerful Node.js backend framework built with Express.js 5 and Sequelize ORM. Supports JWT, bcryptjs, MySQL2, file upload with Multer, Puppeteer automation, and more. Ideal for building fast, scalable, and secure APIs.'
    },
    {
      property: 'og:title',
      content: 'Express Recharge – Top Node.js Backend Framework for Scalable APIs'
    },
    {
      property: 'og:description',
      content: 'Build secure and scalable RESTful APIs with Express Recharge. Features include JWT authentication, Sequelize ORM, Puppeteer automation, file uploads, and CLI support.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    // {
    //   property: 'og:url',
    //   content: 'https://yourdomain.com/docs/v1_0_0/introduction' // Replace with actual URL
    // },
    // {
    //   property: 'og:image',
    //   content: 'https://yourdomain.com/images/express-recharge-og.jpg' // Replace with actual image
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Express Recharge - Secure & Scalable Node.js Backend Framework'
    },
    {
      name: 'twitter:description',
      content: 'Explore Express Recharge, a Node.js framework with Express 5, Sequelize ORM, JWT, Multer, MySQL2, and CLI tools for backend developers.'
    },
    // {
    //   name: 'twitter:image',
    //   content: 'https://yourdomain.com/images/express-recharge-og.jpg' // Replace with actual image
    // }
  ],
//   link: [
//     {
//       rel: 'canonical',
//       href: 'https://yourdomain.com/docs/v1_0_0/introduction' // Replace with actual URL
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
                <li>introduction</li>
            </ul>
        </div>
        <h1 class=" text-3xl font-bold mb-4">Introduction of Express Recharge</h1>

        <p>
            <NuxtLink class="text-primary" to="/docs/v1_0_0/installation">Express recharge</NuxtLink> is a powerful web
            application that leverages the best of modern technologies to offer a
            seamless experience for managing and securing your data. Built with Express.js, Sequelize, and integrated
            with advanced features like JWT Authentication, Rate Limiting, and more, it’s designed to be fast, reliable,
            and secure.
        </p>
        <br>

        <p>
            <NuxtLink class="text-primary" to="/docs/v1_0_0/installation">Express recharge</NuxtLink> goal is to make
            server side back-end development intuitive and performance with a great
            Developer Experience in
            mind.
        </p>
        <hr class="my-3 opacity-30">

        <p>
            <NuxtLink class="text-primary" to="/docs/v1_0_0/installation">Express recharge</NuxtLink> is a free and
            open-source framework with an intuitive and extendable way to create
            performance and production-grade back-end web applications system with
            many more intregrated features.

        </p>
        <p>
            We made everything so you can start writing files from the beginning while enjoying module architecture
            pettern
            in development and a performance application in production with best eficient server-side.

        </p>

        <hr class="my-3 opacity-30">

        <div class="feature-section">
            <h4 class="text-primary text-xl">Key Features:</h4>
            <br>

            <h5 class="text-base">Authentication & Security</h5>

            <li>
                We use JWT (JSON Web Token) for secure user authentication, ensuring that each request is verified and
                secure. The integration with bcryptjs that your passwords are hashed and safely stored.
            </li>
            <br>

            <h5 class="text-base">Advanced File Uploads</h5>

            <li>
                Handling file uploads is effortless with Multer, which manages multi-part form data, enabling file
                uploads
                with ease while maintaining robust security measures.
            </li>

            <li>
                Supports single/multiple file uploads with validation, storage customization, and safety checks.
            </li>

            <br>

            <h5 class="text-base">MySQL Integration</h5>

            <li>
                Powered by mysql2 and Sequelize, Express Recharge ensures efficient, secure database operations, with
                async/await and advanced query support for complex data management and retrieval.
            </li>

            <br>

            <h5 class="text-base">Real-Time Performance</h5>

            <li>
                The express-rate-limit middleware ensures that our application can handle thousands of requests without
                compromising on performance, by protecting against brute-force attacks and overloading.
            </li>

            <br>

            <h5 class="text-base">Data Validation & Error Handling</h5>

            <li>
                With user input is validated reaches your backend, minimizing errors
                and
                improving overall data quality.
            </li>

            <br>

            <h5 class="text-base">Efficient Crawling & Automation</h5>

            <li>
                Automated web scraping and data extraction tasks are powered by Puppeteer, making data-driven decisions
                easier than ever.
            </li>

            <br>

            <h5 class="text-base">Custom URL Aliases</h5>

            <li>
                With module-alias, we’ve made the codebase easier to manage, creating custom paths for a cleaner, more
                organized structure.
            </li>

            <br>

            <h5 class="text-base">Cross-Origin Resource Sharing (CORS)</h5>

            <li>
                Configured using cors, enabling secure and flexible cross-origin API requests for front-end
                integrations.
            </li>

            <br>

            <h5 class="text-base">Environment Configuration</h5>

            <li>
                dotenv handles environment variables (.env), keeping sensitive info like DB credentials and JWT secrets
                out of your source code.
            </li>

            <br>

            <h5 class="text-base">Command Line Utilities</h5>

            <li>
                Built-in CLI tools via recharge-cli help manage app scaffolding, setup, and custom commands for faster
                development workflows.
            </li>

            <br>

            <h5 class="text-base">Automatic Server Reloading</h5>

            <li>
                With nodemon, your development experience is smooth with automatic app reloads on file changes, speeding
                up
                the build-test-debug loop.
            </li>

            <br>



        </div>

        <div class="flex my-4 justify-end p-4">
            <NuxtLink :to="`/docs/${doc_v}/installation`" class="btn md:px-8 py-5 btn-primary">Installation</NuxtLink>
        </div>
    </div>
</template>