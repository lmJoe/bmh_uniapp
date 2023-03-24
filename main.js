
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'
Vue.config.productionTip = false;
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import * as Pinia from 'pinia';
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia());
  return {
    app,
    Pinia
  }
}
// #endif