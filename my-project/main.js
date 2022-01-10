import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
