<template>
    <Header />
    <div class="grid grid-cols-12 gap-5 p-4">
        <div class="lg:col-span-3 md:col-span-4 col-span-12">
            <docsSidebar />
        </div>

        <div class="lg:col-span-9 md:col-span-8 col-span-12">
            <NuxtPage />
        </div>
    </div>
    <Footer />
</template>
