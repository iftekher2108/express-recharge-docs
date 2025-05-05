<script setup>
definePageMeta({
  layout: 'home',
})
</script>
<template>
  <div class="home-hero lg:p-10 md:p-7 p-4">
    <div class="grid lg:grid-cols-2 gap-4 items-center">
      <div class="col-span-1">
        <h1 class="title text-4xl mb-3"><span class="title-fs">Express Recharge</span> - <span class="title-fe">API
            System</span></h1>
        <div class="mb-3">
          <p>Express Recharge API Framework – Powerful MySQL Integration & Automated Route Generation for Fast
            Development</p>
          <p> Fast, Feature-Rich Tools for Seamless Integration & Scalable Productivity.</p>
          <p>Versatile & Developer-Friendly Express Recharge API System for Seamless Integration.</p>

          <div class="bg-base-200 rounded-lg my-3 p-6">
            npx @iftekher2108/express-recharge project-name
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

  <div class="feature-section p-5">

    <div class="grid grid-cols-10 mb-4">

      <div class="lg:col-span-6">
        <h1 class="font-extrabold text-4xl mb-4">features & grow</h1>
        <p>
          Recharge grows and adapts with your needs while providing
          an exceptional developer experience. Build anything from simple back-end system
          to complex web applications that scale for teams of hundreds of developers.
          We've designed & developed the architecture to be approachable for developers of all skill levels.
        </p>
      </div>
    </div>


    <div class="grid grid-cols-3 gap-3">

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Zero Configuration</h3>
            <p>
              Start coding with express recharge immediately — recharge already handles all the setup for you.
            </p>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Routing & Layouts</h3>
            <p>
              Use our file-based routing system to build complex url-based API while reusing for performance.

            </p>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Modular Architecture</h3>
            <p>
              Extend express recharge features with cli modules creating to ship your application faster.

            </p>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Middleware</h3>
            <p>
              Protect or add custom logic localization before API system.
            </p>
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Approachable</h3>
            <p>
              Builds on top of JavaScript with intuitive API and User-friendly documentation.
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Performance</h3>
            <p>
              Truly optimized system that rarely optimization for API system.
            </p>
          </div>
        </div>
      </div> -->

      <div class="col-span-1">
        <div class="glass card transition duration-300 ease-in-out hover:bg-primary/80">
          <div class="text-center card-body">
            <h3 class="uppercase font-bold tracking-widest text-2xl">Versatile</h3>
            <p>
              A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.
            </p>
          </div>
        </div>
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

.feature-section .card {
  min-height: 200px;
}


</style>
