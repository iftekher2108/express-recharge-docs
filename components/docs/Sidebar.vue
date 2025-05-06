<script setup>
const doc_v = "v1_0_0"

</script>
<template>
    <div class="flex flex-col min-h-full items-center rounded-lg gap-4 py-4 bg-base-300">
        <div class="logo">
            <!-- <NuxtImg src="~/assets/" alt="Logo" /> -->
        </div>
        <ul class="menu w-full rounded-box">
            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/introduction`"><i
                        class="fa-solid fa-circle-info"></i>Introduction</NuxtLink>
            </li>
            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/installation`"><i
                        class="fa-solid fa-play"></i>Installation</NuxtLink>
            </li>
            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/quick-overview`"><i
                        class="fa-solid fa-hourglass-start"></i>Quick Start</NuxtLink>
            </li>

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
    li {
        .active {
            background: var(--color-primary);

            i {
                background: var(--color-neutral);
            }
        }

        color: white;

        a,
        summary {
            padding: 12px;
            margin-bottom: 5px;

            i {
                transition: all 0.3s ease-in-out;
                // padding: 10px;
                height: 35px;
                width: 35px;
                font-size: 13px;
                display: flex;
                line-height: 0;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                background: var(--color-primary);

            }

            &:hover {
                background: var(--color-primary);

                i {
                    background: var(--color-neutral);
                }
            }

        }
    }
}
</style>
