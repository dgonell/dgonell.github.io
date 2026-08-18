import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import './styles/main.css'
import './styles/responsive.css'
import './styles/personal.css'
createApp(App).use(router).use(i18n).mount('#app')
console.info('Hey developer 👋\nInterested in how this was built? Check out the source.')
