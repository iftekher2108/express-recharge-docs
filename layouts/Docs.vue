<template>
    <Header/>
    <div class="grid grid-cols-6">
        <div class="col-span-2">
            <docsSidebar />
        </div>

        <div class="col-span-4">
            <slot />
        </div>

    </div>
    <Footer/>
</template>
