import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
//Arquivo de configuração/comunicação
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import './config/msg'

//Temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTI4MzAxNjIsImV4cCI6MTYxMzA4OTM2Mn0.Fjtmkj9AuQHXjoMP40Eiqlodi-U1Zm354dGgtQb-xIQ'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')