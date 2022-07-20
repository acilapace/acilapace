import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon);
Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
