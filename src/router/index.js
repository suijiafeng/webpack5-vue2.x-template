import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '*',
    component: ()=>import('pages/Home')
  }
]


Vue.use(Router)

export default new Router({
  routes
})
