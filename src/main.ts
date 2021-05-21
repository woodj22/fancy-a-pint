import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './index.css'
import Gala from './components/Gala.vue'
import CanIGo from './components/CanIGo.vue'
import JoeAndVi from './components/JoeAndVi.vue'
import { createRouter, createWebHashHistory } from "vue-router";
import { store } from './store'


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
  
createApp(App).use(router, VueAxios, axios, store).mount('#app')
