<script setup>
defineProps({
    icon: { required: true },
    title: { required: true },
    content: { required: true },
    link: { type: String, default: '/' }
})
</script>
<template>
    <div>
        <NuxtLink :to="link">
            <div class="card glass bg-base-100 hover:border-2 hover:border-primary/60 lg:min-h-[20rem] min-h-60 hover:bg-primary/30 transition-all duration-300 ease-in-out shadow-xl">
                <div class="card-body p-3">
                    <i :class="icon"></i>
                    <h1 class="card-title text-lg text-center mt-2 uppercase text-primary justify-center">{{ title }}</h1>
                    <div class="content text-center text-sm" v-html="content"></div>
                </div>
            </div>
        </NuxtLink>

    </div>
</template>

<style lang="scss" scoped>
.card {
    border-style: var(--tw-border-style);
    border-color: rgba(0, 0, 0, 0.311);
    border-width: 2px;
    .card-body {
        i {
            font-size: 50px;
            text-align: center;
            margin-bottom: 5px;
        }

        .card-title {
            letter-spacing: 2px;
        }
    }
}
</style>