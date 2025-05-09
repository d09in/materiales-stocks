import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import StockList from "./components/StockList.vue";
import { getAccessToken } from "./services/googleAuth"; // Para validar autenticación

const routes = [
  { path: "/", component: Login },
  { 
    path: "/dashboard", 
    component: StockList,
    beforeEnter: (to, from, next) => {
      const token = getAccessToken();
      if (!token) {
        next("/"); // Redirigir al login si no hay sesión activa
      } else {
        next(); // Permitir acceso
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;