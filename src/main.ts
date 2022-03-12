import { createApp } from "vue";
import { createPinia } from "pinia";

import "@/assets/styles/index.css";

const pinia = createPinia();
import router from "@/router";

import App from "@/components/App.vue";

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
