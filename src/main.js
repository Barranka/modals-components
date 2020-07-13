import Vue from 'vue'
import App from './App.vue'

import router from './routers'

import Vuelidate from 'vuelidate'

//Plugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'


//exapmle global mixins
// import resetModulesMixin from '@/mixins/resetModules.mixin'
// Vue.mixin(resetModulesMixin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
