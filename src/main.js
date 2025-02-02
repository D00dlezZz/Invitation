import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import emailjs from '@emailjs/browser'

const app = createApp(App);

emailjs.init('5jGyrKXwAWTKDvkf6');

app.use(router, emailjs)

app.mount('#app')
