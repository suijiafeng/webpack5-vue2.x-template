import Vue from 'vue'
import App from './App'
import router from './router'

import './style2.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
