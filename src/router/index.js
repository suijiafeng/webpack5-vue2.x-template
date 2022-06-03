import Vue from 'vue'
import Router from 'vue-router'
const config = require('../../config/utils')

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('pages/user')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('pages/about')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('pages/index')
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
