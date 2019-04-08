// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index'
import App from './App';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource'

Vue.config.productionTip = false
/* eslint-disable no-new */

Vue.use(iView);
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
