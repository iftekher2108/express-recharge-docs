<template>
  <div class=" overflow-x-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('@fortawesome/fontawesome-free/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


h1,h2,h3,h4,h5,h6 {
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
}

a,p,li {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(100%);
}
</style>
