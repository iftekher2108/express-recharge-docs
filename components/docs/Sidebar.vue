<script setup>
import { NuxtLink } from '#components';

const doc_v = "v1_0_0"

</script>
<template>
    <div class="flex flex-col min-h-full w-full items-center rounded-lg gap-4 py-4 bg-base-300">
        <div class="logo">
            <!-- <NuxtImg src="~/assets/" alt="Logo" /> -->
        </div>
        <ul class="menu w-full rounded-box">
            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/introduction`"><i
                        class="fa-solid fa-circle-info"></i>
                    Introduction</NuxtLink>
            </li>
            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/installation`"><i
                        class="fa-solid fa-play"></i>
                    Installation</NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/configration`">
                    <i class="fa-solid fa-sliders"></i>
                    Configration
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/quick-overview`"><i
                        class="fa-solid fa-hourglass-start"></i>
                    Quick Overview</NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/modules`">
                    <i class="fa-solid fa-hexagon-nodes-bolt"></i>
                    Modules
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/routing`">
                    <i class="fa-solid fa-route"></i>
                    Routing
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/middleware`">
                    <i class="fa-solid fa-shield-halved"></i>
                    Middleware
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/database`">
                    <i class="fa-solid fa-database"></i>
                    Database
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/authentication`">
                    <i class="fa-solid fa-database"></i>
                    Authentication
                </NuxtLink>
            </li>

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/security`">
                    <i class="fa-solid fa-hashtag"></i>
                    Security
                </NuxtLink>
            </li>

            <!-- <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/security`">
                    <i class="fa-solid fa-hashtag"></i>
                    Security
                </NuxtLink>
            </li> -->

            <li>
                <NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/module-alies`">
                    <i class="fa-solid fa-hashtag"></i>
                    Module Alies
                </NuxtLink>
            </li>


            <li>
                <details>
                    <summary><i class="fa-solid fa-rocket"></i> Utilities</summary>
                    <ul>
                        <li><NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/utilities/file-system`"><i class="fa-regular fa-file-powerpoint"></i> File System</NuxtLink></li>
                        <!-- <li><NuxtLink to="">Submenu 2</NuxtLink></li> -->
                        <li><NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/utilities/html-to-pdf`"><i class="fa-solid fa-file-code"></i> Html to pdf</NuxtLink></li>
                        <li><NuxtLink exact-active-class="active" :to="`/docs/${doc_v}/utilities/jwt`"><i class="fa-solid fa-square-binary"></i> JWT</NuxtLink></li>
                        <!-- <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> -->
                    </ul>
                </details>
            </li>

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
            transition: all 0.1s ease-in-out;

            &:active {
                transform: translateY(2px) scale(1.01);
            }

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
