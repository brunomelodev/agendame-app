// Components
import App from './App.vue'

import router from "./router";

// Composables
import { createApp } from 'vue'

import vuetify from './plugins/vuetify';

const app = createApp(App)

.use(router)
.use(vuetify)
app.mount('#app')
