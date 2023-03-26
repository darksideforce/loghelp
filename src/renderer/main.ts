import { createApp } from 'vue'
import '../assets/css/iconfont'
import './style.css';
import App from './App.vue'

const app = createApp(App);
import symbol from './components/symbol/index.vue'
app.component('symboldev',symbol)
app.mount('#app');
