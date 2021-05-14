import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Gala from './components/Gala'
import CanIGo from './components/CanIGo'
import JoeAndVi from './components/JoeAndVi'
import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  { path: '/gala', component: Gala },
  { path: '/', component: CanIGo },
  { path: '/joeandvi', component: JoeAndVi },
  { path: "/:pathMatch(.*)", component: CanIGo }
]

const router = createRouter({
history: createWebHashHistory(),
routes, 
})
  
createApp(App).use(router).mount('#app')
