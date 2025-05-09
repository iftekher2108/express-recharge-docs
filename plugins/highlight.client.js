import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css' // or any other style

export default defineNuxtPlugin(() => {
  return {
    provide: {
      highlight: (el) => {
        hljs.highlightElement(el)
      }
    }
  }
})