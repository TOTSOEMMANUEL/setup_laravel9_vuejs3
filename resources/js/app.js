import './bootstrap';

import { createApp } from 'vue';

import router from './router.js';

/* const app = createApp({});
 */
import app from './components/app.vue';

/* app.component('app', app);
app.mount("#app"); */

createApp(app)
    .use(router)
    .mount("#app")
