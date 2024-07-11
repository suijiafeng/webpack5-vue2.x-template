import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

export const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
    meta: { requiresAuth: true,icon:'el-icon-menu' }
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
    component: () => import('../pages/UserList'),
    meta: { icon:'el-icon-user' }
  },
  {
    path: '/home',
    name: 'Home1111',
    component: () => import('../pages/Home'),
    meta: { title:'Home',icon:'el-icon-s-home' }
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
  
  // 如果路由需要认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      // 用户未登录，重定向到登录页
      next({ name: 'Login', query: { redirect: to.fullPath } })
    } else {
      // 用户已登录，允许访问
      next()
    }
  } 
  // 如果路由是针对未登录用户（如登录页）
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isLoggedIn) {
      // 用户已登录，重定向到主页
      next({ name: 'Home' })
    } else {
      // 用户未登录，允许访问
      next()
    }
  } 
  // 对于不需要特殊权限的路由
  else {
    next()
  }
})

export default router