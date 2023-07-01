import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.css";
import "qweather-icons/font/qweather-icons.css";
const app = createApp(App);
app.use(router);
app.mount("#app");
