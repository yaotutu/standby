import { createRouter, createWebHashHistory } from "vue-router";
import Weather from "@/layout/weather/index.vue";
import Square from "@/layout/square/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Weather },
    { path: "/square", component: Square },
  ],
});
export default router;
