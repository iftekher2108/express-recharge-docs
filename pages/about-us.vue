<script setup>
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div class="about-section lg:p-10 md:p-6 p-4">
    <div class="grid lg:grid-cols-2 items-center justify-center">
      <div class="col-span-1">
        <div class="mb-6">
          <span class="text-xl rounded p-4 bg-primary font-bold capitalize">Iftekher Mahmud Pervez</span>
        </div>
        <div class="social-icon flex items-center gap-2 mb-1">
          <NuxtLink href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i>
          </NuxtLink>
          <NuxtLink href="https://github.com/iftekher2108" target="_blank"><i class="fa-brands fa-github"></i>
          </NuxtLink>
          <NuxtLink href="https://www.linkedin.com/in/iftekhermahmud1/" target="_blank"><i
              class="fa-brands fa-linkedin-in"></i></NuxtLink>
        </div>
        <p>Computer Programmer | Software Engineer</p>
      </div>

      <div class="col-span-1">
        <NuxtImg src="/images/hero-image.png" class="rounded" alt="Iftekher" />
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
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
</style>