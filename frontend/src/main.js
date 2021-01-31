import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
//Arquivo de configuração/comunicação
import store from './config/store'
import './config/bootstrap'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')