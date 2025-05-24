<script setup>
const doc_v = "v1_0"
definePageMeta({
      layout: 'docs'
})

useHead({
      title: 'Express Recharge Module Architecture',
      meta: [
            { name: 'description', content: 'Understand the modular folder structure used in Express Recharge for scalable Express.js apps.' },
            { property: 'og:title', content: 'Express Recharge Module Architecture' },
            { property: 'og:description', content: 'Detailed explanation of the module-based folder structure in Express Recharge, including controllers, models, middlewares, and routes.' },
            { property: 'og:type', content: 'article' },
            //     { property: 'og:url', content: 'https://yourdomain.com/docs/modules' },
            { name: 'twitter:card', content: 'summary_large_image' }
      ]
})

</script>
<template>
      <div>
            <div class="breadcrumbs text-sm">
                  <ul>
                        <li>home</li>
                        <li>docs</li>
                        <li>modules</li>
                  </ul>
            </div>

            <h1 class=" text-3xl font-bold mb-4">Module Architecture</h1>

            <p>
                  Express Recharge follows a modular architecture approach that improves code organization, scalability,
                  and maintainability. Each feature or domain is organized as a separate module under the <span
                        class="text-primary">Modules/</span> directory. This approach allows developers to isolate
                  features and manage them independently.
            </p>

            <br>

            <h5 class="text-base"> 📁 Folder Structure</h5>

            <p>A standard module contains the following subfolders:</p>
            <li><span class="bg-primary/20 p-0.5 rounded">Controllers/:</span> Handles the request/response logic.</li>
            <li><span class="bg-primary/20 p-0.5 rounded">Middlewares/:</span> Contains middleware functions specific to
                  the module.</li>
            <li><span class="bg-primary/20 p-0.5 rounded">Models/:</span> Defines data models and ORM relationships.
            </li>
            <li><span class="bg-primary/20 p-0.5 rounded">Routes/:</span> Manages HTTP routes and maps them to
                  controller actions.</li>

            <br>











            <p>
                  <CodePreview copy="false" endpoint="Folder Architecture" code="Modules/
  ├── Users/
        ├── Controllers/
              ├── UserController.js   // build logic here
        ├── Middlewares/
        ├── Models/  
              ├── User.js     // relation to database table
        ├── Routes/
              ├── routes.js  //  uri manage with Controller logic

" />
            </p>

            <br>

            <h5 class="text-base">Step 1: Create a New Module </h5>

            <p>
                  <Terminal>
                        recharge make:module --name=admin
                  </Terminal>
            </p>

            <p class="mb-3">
                  This command will automatically generate the module with the necessary folders: <span
                        class="p-1 rounded bg-primary/20">Controllers</span>, <span
                        class="p-1 rounded bg-primary/20">Models</span>, <span
                        class="p-1 rounded bg-primary/20">Middlewares</span>, and <span
                        class="p-1 rounded bg-primary/20">Routes</span>.
            </p>

            <h5 class="text-base">Example: After Creating the Admin Module</h5>

            <p class="mb-3">
                  After running the command, your project structure might look like this:
            </p>

            <p>
                  <CodePreview copy="false" endpoint="Modules Folder" code="Modules/
  ├── Users/
  ├── admin/
        ├── Controllers/
              ├── adminController.js   // build logic here
        ├── Middlewares/
              ├── admin.js
        ├── Models/  
              ├── admin.js     // relation to database table
        ├── Routes/
              ├── routes.js  //  uri manage with Controller logic
              

" />
            </p>

            <p class="my-3">Each module is now self-contained and can be maintained independently.</p>

            <h5 class="text-base">Step 2: Register Module Routes in mainRoute.js</h5>

            <p class="mb-3">
                  To make your module functional, import its routes in the main mainRoute.js file and register them using
                  Express middleware.
            </p>

            <p>
                  <CodePreview copy="false" endpoint="mainRoute.js" code='// modular path
const adminRoute = require("@modules/admin/Routes/routes");  // import the admin module route

// modular routes Register
router.use("/",adminRoute);       // register the module route here

' />
            </p>

            <p class="my-3">
                  This enables Express to handle requests defined inside your module’s routes.js.
            </p>




            <h5 class="text-base my-3">🧠 Benefits of Modular Architecture</h5>

            <li>Separation of Concerns: Each module focuses on a single responsibility.</li>
            <li>Scalability: Easily add new modules without affecting existing ones.</li>
            <li>Maintainability: Debug and maintain code in isolation.</li>
            <li>Team Collaboration: Multiple teams can work on separate modules concurrently.</li>


            <div class="flex my-4 justify-between p-4">
                  <NuxtLink :to="`/docs/${doc_v}/quick-overview`" class="btn md:px-8 py-5 btn-primary">Quick Overview
                  </NuxtLink>
                  <NuxtLink :to="`/docs/${doc_v}/basics/routing`" class="btn md:px-8 py-5 btn-primary">Routing
                  </NuxtLink>
            </div>

      </div>
</template>