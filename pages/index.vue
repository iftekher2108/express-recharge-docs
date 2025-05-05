<script setup>
definePageMeta({
  layout: 'home',
})
</script>
<template>
  <div class="home-hero lg:p-10 md:p-7 p-4">
    <div class="grid lg:grid-cols-2 gap-4 items-center">
      <div class="col-span-1">
          <h1 class="title text-4xl mb-3"><span class="title-fs">Express Recharge</span> - <span class="title-fe">API System</span></h1>
          <div class="mb-3">
            <p>Express Recharge API Framework – Powerful MySQL Integration & Automated Route Generation for Fast Development</p>
            <p> Fast, Feature-Rich Tools for Seamless Integration & Scalable Productivity.</p>
            <p>Versatile & Developer-Friendly Express Recharge API System for Seamless Integration.</p>
          
            <div class=" p-10">
                npx 
            </div>
          
          </div>  
          
            <div class="flex gap-3 items-center mb-3">
              <NuxtLink to="/docs/v1_0_0/introduction" class="btn btn-primary">Get Started</NuxtLink>
              <NuxtLink to="/docs/v1_0_0/installation" class="btn btn-primary btn-outline">Installation</NuxtLink>
              
            </div>
          </div>

      <div class="col-span-1">
          <NuxtImg src="/images/hero-image.png" class="rounded" alt="Hero-image" />
      </div>

    </div>
    
  </div>   
</template>

<style lang="scss" scoped>

.title {
  .title-fs {
    color: var(--color-primary);
    font-weight: 800;
  }
  .title-fe {
    color: var(--color-primary);
    font-weight: 200;
  }
  

}

</style>
