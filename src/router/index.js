import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Product from "../views/Product.vue";
import Stock from "../views/Stock.vue";
import Update from "../views/Update.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },

  {
    path: "/product",
    name: "Product",
    component: Product,
  },

  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },

  {
    path: "/update",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Change document titles

// Route guard for auth routes

export default router;
