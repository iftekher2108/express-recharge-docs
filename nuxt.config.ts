// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss(),],
  },

  css:[
    '~/assets/app.css',
  ],

  app: {
    pageTransition: {
      name:"page",
      mode:"out-in"
    },
    head: {
      title: "Express Recharge - iftekher", // default fallback title
      meta: [
        {
          name: 'author',
          content: 'iftekher mahmud <iftekhermahmud1@gmail.com>'
        },
        {
          name: 'description',
          content: 'Default site description about Express Recharge API system.'
        }
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxt/image", '@nuxtjs/sitemap', '@nuxtjs/robots'],
  image: {
    // domains:['localhost']
    quality: 50,
    format: ['webp'],
  },
  // sitemap: {
  //   hostname: 'https://yourdomain.com',
  //   gzip: true,
  //   // routes: async () => {
  //   //   // Optionally fetch dynamic routes like blog posts
  //   //   // return fetchBlogRoutes();
  //   // }
  // },
  // robots: {
  //   UserAgent: '*',
  //   Disallow: '',
  //   Sitemap: 'https://yourdomain.com/sitemap.xml'
  // }
});
