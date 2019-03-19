// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import addrouter from './router/addroutes'
import creatnewV from '@/common/axios.js'
import state from './vuex/stores'
import dicts from '@/common/dict.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(creatnewV)
Vue.use(Antd)
Vue.use(dicts)
Vue.use(addrouter, {
  router,
  state
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
