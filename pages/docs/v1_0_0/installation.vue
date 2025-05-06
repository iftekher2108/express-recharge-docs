<script setup>
const doc_v = "v1_0_0"
definePageMeta({
    layout: 'docs',
})
</script>
<template>
    <div>
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
            <NuxtLink :to="`/docs/${doc_v}/installation`" class="btn md:px-8 py-5 btn-primary">Quick Overview</NuxtLink>
        </div>
    </div>


</template>