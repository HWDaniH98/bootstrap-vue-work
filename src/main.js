import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')