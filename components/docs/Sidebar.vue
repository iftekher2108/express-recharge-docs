<template>
    <div class="flex flex-col justify-center items-center rounded-lg gap-4 py-4 bg-base-300">
        <div class="logo">
            <NuxtImg alt="Logo" />
        </div>
        <ul class="menu w-full rounded-box">
            <li><NuxtLink to="/docs/v1_0_0/introduction">Introduction</NuxtLink></li>
            <li> <NuxtLink to="/docs/v1_0_0/quick-start">Quick Start</NuxtLink></li>
            <li>
                <details>
                    <summary>Parent</summary>
                    <ul>
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                        <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
        </ul>


       
    </div>
</template>