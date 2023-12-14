import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { ComponentLibrary } from '@tibnor/stencil-vue-lib';
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ComponentLibrary)

app.mount('#app')
