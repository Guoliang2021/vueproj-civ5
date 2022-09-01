import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/calc",
    name: "calcIndex",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/calc/calcIndex.vue"),
    children: [
      {
        path: "battleDamage",
        name: "battleDamage",
        component: () => import("../views/calc/battleDamage.vue"),
      },
      {
        path: "immigrantProduct",
        name: "immigrantProduct",
        component: () => import("../views/calc/immigrantProduct.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
