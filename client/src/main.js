import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/magnific-popup.css'
import '../src/assets/css/default.css'
import '../src/assets/css/style.css'
import '../src/assets/css/custom.css'
import {store} from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
