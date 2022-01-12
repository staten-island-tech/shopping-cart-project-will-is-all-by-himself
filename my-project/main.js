import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './style.css'

createApp(App).mount('#app')

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
