import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 全局样式
import "@/styles/index.css";
// 和风天气图标
import "qweather-icons/font/qweather-icons.css";
// 引入组件样式
import "vant/lib/index.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
