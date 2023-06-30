import { createRouter, createWebHashHistory } from "vue-router";
import Square from "@/layout/square/index.vue";
import Standby from "@/layout/standby/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Standby },
    { path: "/square", component: Square },
  ],
});
export default router;
