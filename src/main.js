// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import routes from '@/router';
import store from './store'
Vue.use(Router)
Vue.config.productionTip = false
const router = new Router({
  // mode: 'history',
  routes
});
/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
