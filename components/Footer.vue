<script setup>
const doc_v = "v1_0_0"
const date = new Date();

</script>

<template>
    <div class="footer-section bg-base-300 p-10">
        <div class="grid lg:grid-cols-8 md:grid-cols-4 gap-6">

            <div class=" col-span-2">
                <NuxtLink to="/" class="flex gap-2">
                    <NuxtImg src="/images/logo.png" class="size-14 mb-3" alt="logo" />
                    <div class=" text-2xl text-primary">
                        <span class="leading-0 font-bold">Express</span>
                        <p class="leading-0 text-primary-content font-light">Recharge</p>
                    </div>
                </NuxtLink>
                <p>
                    Express Recharge API Framework – Powerful MySQL Integration & Automated Route Generation for Fast
                    Development
                </p>

            </div>

            <div class=" col-span-2">
                <h3 class="text-3xl font-bold uppercase text-primary mb-3">Resources</h3>
                <ul class="footer-menu flex flex-col gap-2 ">

                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink :to="`/docs/${doc_v}/introduction`">Introduction</NuxtLink>
                    </li>
                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink :to="`/docs/${doc_v}/installation`">Installation</NuxtLink>
                    </li>
                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink :to="`/docs/${doc_v}/quick-overview`">Quick Overview</NuxtLink>
                    </li>
                    
                </ul>
            </div>

            <div class=" col-span-2">
                <h3 class="text-3xl font-bold uppercase text-primary mb-3">Tools</h3>
                <ul class="footer-menu flex flex-col gap-2 ">
                    <p>Coming Soon</p>
                    <!-- <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink to="/docs/v1_0_0/introduction">Introduction</NuxtLink>
                    </li>
                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink to="/docs/v1_0_0/quick-start">Quick Start</NuxtLink>
                    </li> -->
                </ul>

            </div>





            <div class=" col-span-2">
                <h3 class="text-3xl font-bold uppercase text-primary mb-3">About Us</h3>
                <ul class="footer-menu flex flex-col gap-2 ">

                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink to="/about-us">About Us</NuxtLink>
                    </li>

                    <!-- <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink to="/team">Team</NuxtLink>
                    </li> -->

                    <li class="nav-link"><i class="fa-solid me-3 fa-arrow-right"></i>
                        <NuxtLink to="/faq">FAQ</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <hr class=" opacity-50 my-5">

        <div class="flex items-center justify-between gap-4">
            <p>Copyright © {{ date.getFullYear() }} by <span class="copyright">Express Recharge</span></p>
            <div class="social-icon flex items-center justify-center gap-2">
                <NuxtLink href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i>
                </NuxtLink>
                <NuxtLink href="https://github.com/iftekher2108" target="_blank"><i class="fa-brands fa-github"></i>
                </NuxtLink>
                <NuxtLink href="https://www.linkedin.com/in/iftekhermahmud1/" target="_blank"><i
                        class="fa-brands fa-linkedin-in"></i></NuxtLink>

            </div>
        </div>

    </div>

</template>

<style lang="scss" scoped>
.footer-section {
    .footer-menu {
        .nav-link {

            transition: all 0.3s ease-in-out;
            font-size: var(--text-base);
            font-weight: 600;
            line-height: var(--text-base--line-height);

            i {
                transition: all 0.3s ease-in-out;
            }

            &:hover {
                color: var(--color-primary);

                i {
                    margin-inline-end: calc(var(--spacing) * 1);
                }
            }

        }
    }

    .copyright {
        transition: all 0.3s ease-in-out;
        font-weight: 800;

        &:hover {
            color: var(--color-primary);
        }
    }

    .social-icon {
        a {
            color: var(--color-primary);
            display: flex;
            align-items: center;
            justify-content: center;
            // padding: 10px 15px;
            height: 50px;
            width: 50px;
            border: 2px solid var(--color-primary);
            border-radius: 5px;
            transition: all 0.3s ease-in-out;

            &:hover {
                color: white;
                background: var(--color-primary);
                border-radius: 50px;
            }

            i {
                font-size: 20px;
                transition: all 0.3s ease-in-out;
            }

        }
    }
}
</style>