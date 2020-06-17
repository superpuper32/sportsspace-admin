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
    path: '/trainers',
    component: Layout,
    children: [
      {
        path: '/trainers',
        name: 'Trainers',
        component: () => import('@/views/trainers'),
        meta: { title: 'Trainers', icon: 'trainers' }
      }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    name: 'Settings',
    meta: { title: 'Settings' },
    children: [
      {
        path: '/settings',
        redirect: '/settings/main',
        component: () => import('@/views/settings'),
        name: 'ProfileSettings',
        children: [
          {
            path: 'main',
            component: () => import('@/views/settings/main'),
            name: 'Main',
            meta: { title: 'Main' }
          },
          {
            path: 'social',
            component: () => import('@/views/settings/social'),
            name: 'Social',
            meta: { title: 'Social' }
          },
          {
            path: 'password',
            component: () => import('@/views/settings/password'),
            name: 'Password',
            meta: { title: 'Password' }
          },
          {
            path: 'payment',
            component: () => import('@/views/settings/payment'),
            name: 'Payment',
            meta: { title: 'Payment' }
          },
          {
            path: 'notification',
            component: () => import('@/views/settings/notification'),
            name: 'Notification',
            meta: { title: 'Notification' }
          }
        ]
      }
    ]
  },

  {
    path: '/calendar',
    component: Layout,
    name: 'Calendar',
    meta: { title: 'Calendar' },
    children: [
      {
        path: '/calendar',
        redirect: '/calendar/practice',
        component: () => import('@/views/calendar'),
        name: 'CalendarContent',
        children: [
          {
            path: 'practice',
            component: () => import('@/views/calendar/practice'),
            name: 'Practice',
            meta: { title: 'Practice' }
          },
          {
            path: 'teams',
            component: () => import('@/views/calendar/teams'),
            name: 'Teams',
            meta: { title: 'Teams' }
          },
          {
            path: 'tournaments',
            component: () => import('@/views/calendar/tournaments'),
            name: 'Tournaments',
            meta: { title: 'Tournaments' }
          },
          {
            path: 'playgrounds',
            component: () => import('@/views/calendar/playgrounds'),
            name: 'Playgrounds',
            meta: { title: 'Playgrounds' }
          }
        ]
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
