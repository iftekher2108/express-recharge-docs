<script setup>
const doc_v = "v1_0_0"
definePageMeta({
  layout: "docs"
})

useHead({
  title: "Express Recharge Installation Guide - Setup Your Node.js Backend in Minutes",
  meta: [
    {
      name: "author",
      content: "Iftekher Mahmud <iftekhermahmud1@gmail.com>"
    },
    {
      name: 'keywords',
      content: 'Express Recharge installation, Node.js backend setup, Express.js CLI, backend framework, install express backend, sequelize setup, mysql2 integration, jwt backend install, multer file upload, dotenv setup, node.js starter project, express-recharge CLI, nodemon start, backend boilerplate, create express project'
    },
    {
      name: 'description',
      content: 'Learn how to install and configure Express Recharge, a modern Node.js backend framework. Includes Express CLI setup, Sequelize ORM, JWT, MySQL, file uploads, and more.'
    },
    {
      property: 'og:title',
      content: 'Install Express Recharge – Quick Start Node.js Backend Framework'
    },
    {
      property: 'og:description',
      content: 'Follow step-by-step instructions to install Express Recharge using npx. Quickly scaffold a Node.js backend with Sequelize, JWT, MySQL, and file upload support.'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    // {
    //   property: 'og:url',
    //   content: 'https://yourdomain.com/docs/v1_0_0/installation' // Replace with actual URL
    // },
    // {
    //   property: 'og:image',
    //   content: 'https://yourdomain.com/images/express-recharge-install-og.jpg' // Replace with actual image
    // },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Express Recharge Installation Guide - Setup Express.js Project Fast'
    },
    {
      name: 'twitter:description',
      content: 'Get started with Express Recharge. Install and configure a complete backend framework with Express.js 5, Sequelize, JWT, and more.'
    },
    // {
    //   name: 'twitter:image',
    //   content: 'https://yourdomain.com/images/express-recharge-install-og.jpg' // Replace with actual image
    // }
  ],
  //   link: [
  //     {
  //       rel: 'canonical',
  //       href: 'https://yourdomain.com/docs/v1_0_0/installation' // Replace with actual URL
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
        <li>configration</li>
      </ul>
    </div>

    <h1 class=" text-3xl font-bold mb-4">Configration of Express Recharge</h1>

    <p>
      Express recharge is configured with sensible defaults to make you productive.
    </p>
    <br>

    <h5 class="text-base">Step 1: Creating project</h5>

    <p>
      <Terminal>
        npx @iftekher2108/express-recharge project-name
      </Terminal>
    </p>
    <p>
      your project will create with provided name couple of time.
    </p>
    <br>
    <h5 class="text-base">Step 2: Goto project folder</h5>

    <p>
      <Terminal>
        <span class="text-primary">cd</span> project-name
      </Terminal>
    </p>

    <br>

    <h5 class="text-base">Step 3: You Need to config project cli link to npm when ever work with another project</h5>

    <p>
      <Terminal>
        <span class="text-primary">npm</span> link
      </Terminal>
    </p>

    
    <h5 class="text-base mb-3">Step 4: You Need to config your project database .env file to connect database</h5>

    <p>
      <CodePreview copy="false" endpoint=".env"
      code="PORT = 3000

# JWT Configration
JWT_SECRET = 'jwt_secret_key'
JWT_EXPIRATION = '1h'

# ENVIRONMENT Configration
APP_ENV = 'development'  # 'production', 'development'

# DATABASE Configration
DB_CONNECTION = 'mysql'  # 'postgresql', 'sqlite'.
DB_HOST = 'localhost'
DB_PORT = 3306
DB_NAME = 'express_recharge'
DB_USER = 'root'
DB_PASSWORD = 
"
      />
    </p>

    <br>

    <h5 class="text-case mb-3">step 5: now run the project with npm start</h5>

    <p>
      <Terminal>
        <span class="text-primary">npm</span> start
      </Terminal>
    </p>

    <hr class="my-5 opacity-15">

    <h5 class="text-base mb-3">This will scaffold the folder structure like:</h5>
    <p>
      <CodePreview copy="false" endpoint="Folder Architecture" 
      code="Config/
  ├── database.js
  ├── rate-limiter.js
Middlewares/
  ├── Auth.js
Modules/
  ├── Users/
        ├── controllers/
              ├── UserController.js
        ├── middlewares/
        ├── models/  
              ├── User.js     // relation to database table
        ├── routes/
              ├── routes.js
Utilities/
  ├── file_system.js          // for upload file
  ├── group_routes.js         // for route grouping in middleware
  ├── html_to_pdf.js          // use puppeter for html to pdf 
  ├── jwt.js                  // for Bearer token authentication 
.env
.env.example
app.js                        // app configration file
package.json
README.md
recharge.js
server.js                     // main server file

" />
    </p>

    <br>

    <div class="flex my-4 justify-between p-4">
      <NuxtLink :to="`/docs/${doc_v}/installation`" class="btn md:px-8 py-5 btn-primary">Installation</NuxtLink>
      <NuxtLink :to="`/docs/${doc_v}/quick-overview`" class="btn md:px-8 py-5 btn-primary">Quick Overview
      </NuxtLink>
    </div>

<!-- 
    <p>
      <CodePreview endpoint="js" code="var parvez = 'iftekher mahmud pervez';
function parvez() {
  return 'iftkeher mahmud'
}

" />
    </p>
    <br> -->

    <!-- <h5 class="text-base"></h5>

    <p>
      <CodePreview endpoint="js" code="var parvez = 'iftekher mahmud pervez';
          function parvez() {
          return 'iftkeher mahmud'
          }" />
    </p> -->

  </div>
</template>