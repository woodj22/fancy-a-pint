import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Gala from './components/Gala'
import CanIGo from './components/CanIGo'
import JoeAndVi from './components/JoeAndVi'
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  { path: '/gala', component: Gala },
  { path: '/', component: CanIGo },
  { path: '/joeandvi', component: JoeAndVi },
]

const router = createRouter({
history: createWebHistory(),
routes, 
})
  

createApp(App).use(router).mount('#app')
