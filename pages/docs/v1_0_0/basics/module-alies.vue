<script setup>
const doc_v = "v1_0_0"
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
                <li>basics</li>
                <li>module-alies</li>
            </ul>
        </div>

        <h1 class=" text-3xl font-bold mb-4">Module Alies of Express Recharge</h1>

        <p>
            In large-scale Express applications like Express Recharge, managing deeply nested import paths can become
            messy and error-prone. Module aliasing helps simplify your imports by allowing you to define custom shortcut
            paths (aliases) to directories.
        </p>

        <h5 class="text-base my-3">🔍 What Are Module Aliases?</h5>
        <p class="mb-3">
            Module aliases allow you to replace long, relative paths like:
        </p>

        <p>
            <CodePreview endpoint="js" code="const User = require('../../../Modules/Users/models/User');
" />
        </p>

        <p class="my-3">
            With clean, short paths like:
        </p>

        <p>
            <CodePreview endpoint="js" code="const User = require('@modules/Users/models/User');
" />
        </p>

        <p class="my-3">
            This makes your code easier to read, maintain, and refactor.
        </p>

        <h5 class="text-base my-3">🧱 Typical Aliases in Express Recharge</h5>


        <div class="overflow-x-auto rounded-box border border-primary/30 ">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr class="bg-primary/20">
                        <th>Alias</th>
                        <th>Path</th>
                        <th>Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>@modules</td>
                        <td>Modules/</td>
                        <td>All modular code (Users, Admin, etc.)</td>
                    </tr>

                    <tr>
                        <td>@config</td>
                        <td>Config/</td>
                        <td>Database, environment configs</td>
                    </tr>

                    <tr>
                        <td>@middleware</td>
                        <td>Middlewares/</td>
                        <td>Global middleware</td>
                    </tr>

                    <tr>
                        <td>@utils</td>
                        <td>Utilities/</td>
                        <td>Custom helper functions</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h5 class="my-3">🧠 Why Use Aliases?</h5>

        <li>✅ Cleaner import statements</li>
        <li>✅ Easier to refactor and move files</li>
        <li>✅ Reduces relative path confusion (../../../)</li>
        <li>✅ More scalable for growing codebases</li>

        <h3 class="text-base my-3">🛠 Troubleshooting Tips</h3>


        <li>Ensure you restart the server after adding or changing aliases.</li>
        <li>Paths in _moduleAliases must match your actual folder structure.</li>
        <li>Always add require('module-alias/register') at the top before other imports.</li>

        <h2 class="text-base my-3">📌 Summary</h2>

        <p>
            Using module aliases in Express improves your code organization and readability. It’s a small setup step
            with
            big productivity benefits, especially in modular architectures like Express Recharge.
        </p>



        <div class="flex my-4 justify-between p-4">
            <NuxtLink :to="`/docs/${doc_v}/basics/middleware`" class="btn md:px-8 py-5 btn-primary">Middleware
            </NuxtLink>
            <NuxtLink :to="`/docs/${doc_v}/basics/module-alies`" class="btn md:px-8 py-5 btn-primary">Module alies
            </NuxtLink>
        </div>



    </div>
</template>