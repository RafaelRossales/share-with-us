import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
//Arquivo de configuração/comunicação
import store from './config/store'
import router from './config/router'
import './config/bootstrap'
import './config/msg'
// import './config/axios.js'
import './config/mq'

//Temporario
// require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuYSIsImVtYWlsIjoiYW5hQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTI4MzcxMjgsImV4cCI6MTYxMzA5NjMyOH0.gqTivXGTrG66Jz7ndqkr4NCUbRo6jauE5z8Q91t5lMg'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')