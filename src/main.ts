import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './routes/router'

const _pinia = createPinia();

createApp(App).use(router).use(_pinia).mount('#app')
