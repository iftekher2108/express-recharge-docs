<template>
    <Header />
    <div class="grid md:grid-cols-12 gap-5 p-4">
        <div class="col-span-3">
            <docsSidebar />
        </div>

        <div class="col-span-9">
            <NuxtPage />
        </div>
    </div>
    <Footer />
</template>
