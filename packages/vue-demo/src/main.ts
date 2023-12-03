import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { ComponentLibrary } from 'stencil-vue-lib';
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// @ts-expect-error TS2345
app.use(ComponentLibrary)

app.mount('#app')
