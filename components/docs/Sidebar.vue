<template>
    <div class="flex flex-col justify-center items-center rounded-lg gap-4 py-4 bg-base-300">
        <div class="logo">
            <!-- <NuxtImg src="~/assets/" alt="Logo" /> -->
        </div>
        <ul class="menu w-full rounded-box">
            <li><NuxtLink to="/docs/v1_0_0/introduction"><i class="fa-solid fa-circle-info"></i>Introduction</NuxtLink></li>
            <li> <NuxtLink to="/docs/v1_0_0/installation"><i class="fa-solid fa-play"></i>Installation</NuxtLink></li>
            <li> <NuxtLink to="/docs/v1_0_0/quick-start"><i class="fa-solid fa-hourglass-start"></i>Quick Start</NuxtLink></li>

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

<style lang="scss" scoped>
.menu {
    gap: 7px;
    li {
        color: white;
        a,summary{
            padding:12px;
            &:hover {
                background: var(--color-primary);
            }

        }
    }
}


</style>
