import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

export const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login'),
    meta: { fullScreen: true,hideInNav:true }
  },
  {
    path: '/users',
    name: 'UserList',
    component: () => import('../pages/UserList')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/Home')
  },

  {
    path: '*',
    component: () => import('../pages/404')
  }
]


Vue.use(Router)

const router =  new Router({
  mode: 'hash', //history
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters['user/isLoggedIn']
  
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isLoggedIn) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router