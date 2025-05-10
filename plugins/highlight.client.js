import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.min.css' // or any other style

export default defineNuxtPlugin(() => {
  return {
    provide: {
      highlight: (el) => {
        hljs.highlightElement(el)
      }
    }
  }
})