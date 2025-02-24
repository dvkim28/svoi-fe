import './assets/main.css'
import HomePage from './pages/HomePage.vue'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const routes = [{ path: '/', name: 'mainPage', component: HomePage }]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
