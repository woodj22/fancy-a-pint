import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import './index.css'
import { store } from './store'
import router from './router'


const app = createApp(App).use(router).use(store).use(VueAxios, axios).mount('#app')
