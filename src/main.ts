import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/scss/app.scss';

const app = createApp(App);

app.use(createPinia()).mount('#app');
