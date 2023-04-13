import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: false,
        title: "Home / Autókölcsönző",
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        requiresAuth: false,
        title: "About / Autókölcsönző",
      },
    },
    {
      path: "/kolcsonzesek",
      name: "kolcsonzesek",
      component: () => import("../views/KolcsonzesekView.vue"),
      meta: {
        requiresAuth: false,
        title: "Kölcsönzések / Autókölcsönző",
      },
    },
    {
      path: "/taxiKezeles",
      name: "taxiKezeles",
      component: () => import("../views/TaxiKezelesView.vue"),
      meta: {
        requiresAuth: false,
        title: "Taxi Kezelés / Autókölcsönző",
      },
    },
    {
      path: "/fuvarBevitel",
      name: "fuvarBevitel",
      component: () => import("../views/FuvarBevitel.vue"),
      meta: {
        requiresAuth: false,
        title: "Fuvar bevitel / Autókölcsönző",
      },
    },
    {
      path: "/count1",
      name: "count1",
      component: () => import("../views/Count1View.vue"),
      meta: {
        requiresAuth: false,
        title: "Counter 1 / Taxi",
      },
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminPanelView.vue"),
      meta: {
        requiresAuth: false,
        title: "Admin Panel / Autókölcsönző",
      },
    },
    {
      path: "/count2",
      name: "count2",
      component: () => import("../views/Count2View.vue"),
      meta: {
        requiresAuth: false,
        title: "Counter 2 / Taxi",
      },
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        requiresAuth: false,
        title: "Login / Autókölcsönző",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("../views/404View.vue"),
      meta: {
        requiresAuth: false,
        title: "404 / Autókölcsönző",
      },
    },
  ],
});

export default router;