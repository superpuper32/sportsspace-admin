import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/practice',
    component: Layout,
    children: [
      {
        path: '/practice',
        name: 'Calendar',
        component: () => import('@/views/Calendar.vue')
      }
    ]
  },
  {
    path: '/teams',
    component: Layout,
    children: [
      {
        path: '/teams',
        name: 'Teams',
        component: () => import('@/views/Teams.vue'),
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/tournaments',
    component: Layout,
    children: [
      {
        path: '/tournaments',
        name: 'Tournaments',
        component: () => import('@/views/Tournaments.vue')
      }
    ]
  },
  {
    path: '/playgrounds',
    component: Layout,
    children: [
      {
        path: '/playgrounds',
        name: 'Playgrounds',
        component: () => import('@/views/Playgrounds.vue')
      }
    ]
  },
  {
    path: '/contacts',
    component: Layout,
    children: [
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts.vue')
      }
    ]
  },
  {
    path: '/edit/:id',
    name: 'EditTeam',
    component: () => import('@/views/EditTeam.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

const token = '123'

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (token !== '123') {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
