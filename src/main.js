import { createApp } from "vue";

//importo il router
import router from "./router";

//importo il file styel.scss
import "./scss/style.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import App from "./App.vue";

createApp(App).use(router).mount("#app");
