import Vue from 'vue'
import Router from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('pages/Home')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('pages/user')
  },

  {
    path: '*',
    component: () => import('pages/404')
  }
]


Vue.use(Router)

export default new Router({
  routes
})
