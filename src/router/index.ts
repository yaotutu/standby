import { createRouter, createWebHashHistory } from "vue-router";
import Standby from "@/layout/standby/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: Standby }],
});
export default router;
