import { createApp } from "vue";
import router from "./router";
import { createPinia } from 'pinia'
import App from "./App.vue";
// 全局样式
import "@/styles/index.css";
// 和风天气图标
import "qweather-icons/font/qweather-icons.css";
// 引入组件样式
import "vant/lib/index.css";
// 引入unocss
import 'virtual:uno.css'

const app = createApp(App);
const pinia = createPinia()
app.use(pinia)
app.use(router);
app.mount("#app");
