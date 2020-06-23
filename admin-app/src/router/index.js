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
            name: 'Main',
            component: () => import('@/views/settings/main'),
            meta: { title: 'Main' }
          },
          {
            path: 'social',
            name: 'Social',
            component: () => import('@/views/settings/social'),
            meta: { title: 'Social' }
          },
          {
            path: 'password',
            name: 'Password',
            component: () => import('@/views/settings/password'),
            meta: { title: 'Password' }
          },
          {
            path: 'payment',
            name: 'Payment',
            component: () => import('@/views/settings/payment'),
            meta: { title: 'Payment' }
          },
          {
            path: 'notification',
            name: 'Notification',
            component: () => import('@/views/settings/notification'),
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
            name: 'Practice',
            component: () => import('@/views/calendar/practice'),
            meta: { title: 'Practice' }
          },
          {
            path: 'teams',
            component: () => import('@/views/calendar/teams'),
            meta: { title: 'Teams' },
            children: [
              {
                path: '',
                name: 'Teams',
                component: () => import('@/views/calendar/teams/Main.vue')
              },
              {
                path: 'create-team',
                name: 'Create-Team',
                component: () => import('@/views/calendar/teams/CreateTeam.vue'),
                meta: { title: 'Create Team' }
              }
            ]
          },
          {
            path: 'tournaments',
            name: 'Tournaments',
            component: () => import('@/views/calendar/tournaments'),
            meta: { title: 'Tournaments' }
          },
          {
            path: 'playgrounds',
            name: 'Playgrounds',
            component: () => import('@/views/calendar/playgrounds'),
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
        name: 'AllTeams',
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
        name: 'AllTournaments',
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
        name: 'AllPlaygrounds',
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
