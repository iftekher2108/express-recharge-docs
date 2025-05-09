<script setup>
const doc_v = "v1_0_0"
definePageMeta({
    layout: 'docs',
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
                <li>installation</li>
            </ul>
        </div>
        <h1 class=" text-3xl font-bold mb-4">Installation of Express Recharge</h1>

        <p>
            Follow the instructions below to install and set up your Express Recharge project locally.
        </p>

        <h5 class="text-base">Prerequisites</h5>
        <br>

        <p>
            Ensure the following tools are installed on your system:
        </p>

        <li>Node.js (v20 or newer) <NuxtLink to="https://nodejs.org/en" target="_blank">DownLoad Node JS</NuxtLink>
        </li>
        <li>npm (comes with Node.js)</li>

        <br>

        <h5 class="text-base">Step 1: Create a New Project</h5>

        <p>
            Run the following command in your terminal:
        </p>

        <Terminal>
            npx @iftekher2108/express-recharge project-name
        </Terminal>

        <br>

        <p>
            Replace project-name with your preferred folder name. This command will:
        </p>

        <li>
            Download the project boilerplate from the @iftekher2108/express-recharge package
        </li>

        <li>
            Extract and initialize the project in a new folder
        </li>

        <br>


        <h5 class="text-base">Step 2: Navigate Into the Project</h5>

        <Terminal>
            <span class="text-primary">cd</span> project-name
        </Terminal>

        <br>

        <h5 class="text-base">Step 3: Install Dependencies</h5>

        <p>
            Install all required packages with:
        </p>

        <Terminal>
            npm install
        </Terminal>

        <br>

        <h5 class="text-base">Step 4 (Optional): Link for Local Development</h5>

        <p>
            If you are developing and want to link this project as a local package:
        </p>

        <Terminal>
            npm link
        </Terminal>

        <br>

        <h5 class="text-base">Step 6: Start the Development Server</h5>

        <Terminal>
            npm start
        </Terminal>

        <p>
            Visit <span class="text-primary">http://localhost:3000</span> to view your site in the browser.
        </p>

        <br>

        <h4 class="text-lg">🤝 Need Help?</h4>

        <p>
            If you face issues or have questions, feel free to check the GitHub Repository (if available) or contact the
            developer.
        </p>

        <br>




        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/introduction`" class="btn md:px-8 py-5 btn-primary">Introduction</NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/quick-overview`" class="btn md:px-8 py-5 btn-primary">Quick Overview
            </NuxtLink>
        </div>
    </div>


</template>