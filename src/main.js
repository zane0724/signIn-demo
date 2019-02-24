import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import  './styles/common.css'
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from "axios"
// 将Axios挂载到Vue原型上
Vue.prototype.$http =axios
axios.defaults.baseURL="http://www.litc.pro:9999/v1"



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
