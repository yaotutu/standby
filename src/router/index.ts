import { createRouter, createWebHashHistory } from "vue-router";
import Weather from "@/layout/Weather.vue";
import Square from "@/layout/Square.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Weather },
    { path: "/square", component: Square },
  ],
});
export default router;
