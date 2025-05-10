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

            <p>import the create modules route file to app.js like </p>

            <p>
                  <CodePreview copy="false" endpoint="app.js" code='// modular path
const adminRoute = require("@modules/admin/routes/routes");  // import the admin module route

// modular routes Register
app.use("/",userRoute);       // register the module route here

' />
            </p>
            
            <br>



            <p>
                  <CodePreview copy="false" endpoint="app.js" code='const express = require("express");
const app = express();

// const limiter = require("./Config/rate-limiter")
// rate-limit set global
// app.use(limiter)

// json allow
app.use(express.json());
// urlencoded allow
app.use(
  express.urlencoded({
    extended: true,
  })
);

// cors allow
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// database
const db = require("@config/database");

// database init
// db.sync({ alter: true }).then(() => {
//     console.log("Database synced!");
//   }).catch(err => {
//     console.error("Database sync failed:", err);
//   });

// modular path
const userRoute = require("@modules/Users/routes/routes");
const adminRoute = require("@modules/admin/routes/routes");  // import the admin module route

// modular routes Register
app.use("/", userRoute);
app.use("/",userRoute);       // register the module route here


// app.use("/api/v1", (req, res, next) => {
//   console.log("API v1 route accessed");
//   next();
// });

// middleware
// app.use(middleware)

module.exports = app;
' />
            </p>



      </div>
</template>