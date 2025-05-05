<template>
    <div class="header w-full">
        <div class="flex items-center justify-between gap-3">
            <div>

            </div>

            <div class="social-icon">

            </div>

        </div>
        <div class="navbar sticky z-30 top-0 bg-base-300 shadow-sm">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NuxtLink to="/docs/v1_0_0/introduction">Docs</NuxtLink>
                        </li>
                        <li class="static">
                            <details>
                                <summary>About Us</summary>
                                <ul class="p-1">
                                    <li class="w-full">
                                        <NuxtLink to="/about-us">About Us</NuxtLink>
                                    </li>
                                    <!-- <li class="w-full">
                                        <NuxtLink to="/">fhdfgh</NuxtLink>
                                    </li>
                                    <li class="w-full">
                                        <NuxtLink to="/">Sub menu</NuxtLink>
                                    </li> -->
                                </ul>
                            </details>
                        </li>
                        <!-- <li>
                        <a>About Us</a>
                        <ul class="p-2">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li> -->
                        <li>
                            <NuxtLink to="/about-us">Item 3</NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink to="/" class="text-xl">
                    <NuxtImg src="/images/logo.png" class=" size-14" alt="logo" />
                </NuxtLink>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu w-full menu-horizontal">
                    <li>
                        <NuxtLink to="/docs/v1_0_0/introduction">Docs</NuxtLink>
                    </li>
                    <li class="static">
                        <details>
                            <summary>About Us</summary>
                            <ul class="p-1">
                                <li class="w-full">
                                    <NuxtLink to="/about-us">About Us</NuxtLink>
                                </li>
                                <!-- <li class="w-full"><a>fhdfgh</a></li>
                                <li class="w-full"><a>Sub menu 2bhxdfh</a></li> -->
                            </ul>
                        </details>
                    </li>
                    <li>
                        <NuxtLink to="/about-us">Item 3</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <NuxtLink to="/docs/v1_0_0/introduction" class="btn btn-primary">Get Started</NuxtLink>
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>


</style>