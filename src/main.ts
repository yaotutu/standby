import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/index.css";
import "qweather-icons/font/qweather-icons.css";
import router from "./router";
const app = createApp(App);
app.use(router);
app.mount("#app");
