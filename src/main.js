import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/ui/BaseCard.vue";

import "../src/css/main.min.css";
import "bootstrap";

const app = createApp(App);
// app.use(InstagramFeed);
app.component("base-card", BaseCard);
// app.use(VueSmoothScroll);
app.mount("#app");
