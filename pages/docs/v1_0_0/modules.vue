<script setup>
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
                <li>installation</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Installation of Express Recharge</h1>

        <p>
            <CodePreview copy="false" endpoint="Folder Architecture" code="Modules/
  ├── Users/
        ├── controllers/
              ├── UserController.js   // build logic here
        ├── middlewares/
        ├── models/  
              ├── User.js     // relation to database table
        ├── routes/
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
            this command will create a module to Modules folder with controllers middlewares models routes
        </p>

        <p>
            <CodePreview copy="false" endpoint="Modules Folder" code="Modules/
  ├── Users/
        ├── controllers/
              ├── UserController.js   // build logic here
        ├── middlewares/
        ├── models/  
              ├── User.js     // relation to database table
        ├── routes/
              ├── routes.js  //  uri manage with Controller logic
  ├── admin/
        ├── controllers/
              ├── adminController.js   // build logic here
        ├── middlewares/
              ├── admin.js
        ├── models/  
              ├── admin.js     // relation to database table
        ├── routes/
              ├── routes.js  //  uri manage with Controller logic
              

" />
        </p>

        <br>





    </div>
</template>