import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '工作台'}
  },
  {
    path: '/social',
    name: 'social',
    component: () => import('../views/social/index.vue'),
    redirect: '/social/agent',
    meta: { title: 'WA' },
    children: [{
      path: 'agent',
      component: () => import('../views/social/agent.vue'),
      name: 'agent',
      meta: { title: '坐席管理' }
    }, {
      path: 'account',
      component: () => import('../views/social/account.vue'),
      name: 'account',
      meta: { title: '账号管理' }
    }, {
      path: 'send',
      component: () => import('../views/social/send.vue'),
      name: 'send',
      meta: { title: '群发任务中心' }
    }, {
      path: 'map',
      component: () => import('../views/social/map.vue'),
      name: 'map',
      meta: { title: '导图中心' }
    }, {
      path: 'elm',
      component: () => import('../views/social/elm.vue'),
      name: 'elm',
      meta: { title: '新增报案' }
    }]
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('../views/download.vue'),
    meta: { title: '客户端下载' }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
