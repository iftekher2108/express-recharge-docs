<script setup>
definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div class="about-section lg:p-10 md:p-6 p-4">
    <div class="grid lg:grid-cols-2 items-center justify-center gap-5">
      <div class="col-span-1">
        <h3 class="text-3xl mb-3 text-primary leading-1 font-bold uppercase">Iftekher Mahmud Pervez</h3>
        <p class="mb-3">Computer Programmer | Software Engineer</p>
        <div class="social-icon flex items-center gap-2 mb-3">
          <NuxtLink href="https://www.facebook.com/mdiftekher.mahmud/" target="_blank"><i class="fa-brands fa-facebook-f"></i>
          </NuxtLink>
          <NuxtLink href="https://github.com/iftekher2108" target="_blank"><i class="fa-brands fa-github"></i>
          </NuxtLink>
          <NuxtLink href="https://www.linkedin.com/in/iftekhermahmud1/" target="_blank"><i
              class="fa-brands fa-linkedin-in"></i></NuxtLink>
        </div>

        <p>
          <span class="font-bold text-primary">Assalamualaikum!</span> I'm Iftekher Mahmud Pervez, a passionate Computer Programmer and Software Engineer dedicated to
          crafting innovative, efficient, and user-friendly digital solutions. With expertise in a wide range of
          technologies—from web development to mobile applications—I thrive on transforming ideas into functional,
          real-world applications.
        </p>
        <p>
          I specialize in Full-Stack Development, including front-end technologies like HTML, CSS, scss, Bootstrap, tailwind, JavaScript, jquery and
          frameworks like React, Vue, Next.js and Nuxt.js, along with back-end solutions using Laravel, PHP, and MySQL. I also
          have a strong background in mobile development with Flutter and Kotlin.
        </p>
        <p>
          My goal is to create seamless and impactful user experiences through clean, maintainable code and cutting-edge
          design principles. I am always eager to collaborate on projects that push the boundaries of technology and
          design.
        </p>

        <p>
          Whether you're looking to build a website, mobile app, or a custom software solution, I'm here to bring your
          ideas to life.
        </p>

      </div>

      <div class="col-span-1">
        <NuxtImg src="/images/iftekher-author.jpg" class="rounded w-full" alt="Iftekher-mahmud" />
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