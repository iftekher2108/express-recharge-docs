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
            <div class="card glass bg-base-100 hover:bg-primary/30 transition-all duration-300 ease-in-out shadow-xl">
                <div class="card-body p-4">
                    <i :class="icon"></i>
                    <h1 class="card-title text-lg uppercase text-primary justify-center">{{ title }}</h1>
                    <div class="content" v-html="content"></div>
                </div>
            </div>
        </NuxtLink>

    </div>
</template>

<style lang="scss" scoped>
.card {
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