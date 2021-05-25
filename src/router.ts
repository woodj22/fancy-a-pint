import { createRouter, createWebHashHistory } from "vue-router";
// const routerHistory = createWebHistory();
import Gala from './components/Gala.vue'
import CanIGo from './components/CanIGo.vue'
import JoeAndVi from './components/JoeAndVi.vue'

const routes = [
    { path: '/gala', component: Gala },
    { path: '/', component: CanIGo },
    { path: '/joeandvi', component: JoeAndVi },
    { path: "/:pathMatch(.*)", component: CanIGo }
  ]
  

const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
export default router;
  