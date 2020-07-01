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
            children: [
              {
                path: '',
                name: 'Teams',
                component: () => import('@/views/calendar/teams/Main.vue'),
                meta: { title: 'Teams' }
              },
              {
                path: 'create-team',
                name: 'Create-Team',
                component: () => import('@/views/calendar/teams/CreateTeam.vue'),
                meta: { title: 'Create Team' }
              },
              {
                path: 'edit/:id',
                name: 'Edit-Team',
                component: () => import('@/views/calendar/teams/EditTeam.vue'),
                meta: { title: 'Edit Team' }
              }
            ]
          },
          {
            path: 'tournaments',
            name: 'Tournaments',
            props: true,
            component: () => import('@/views/calendar/tournaments'),
            meta: { title: 'Tournaments' }
          },
          {
            path: 'playgrounds',
            component: () => import('@/views/calendar/playgrounds'),
            children: [
              {
                path: '',
                name: 'Playgrounds',
                component: () => import('@/views/calendar/playgrounds/MainPlaygrounds.vue'),
                meta: { title: 'Playgrounds' }
              },
              {
                path: 'create-playground',
                name: 'Create-Playground',
                component: () => import('@/views/calendar/playgrounds/CreatePlayground.vue'),
                meta: { title: 'Create Playground' }
              },
              {
                path: 'edit/:id',
                name: 'Edit-Playground',
                component: () => import('@/views/calendar/playgrounds/EditPlayground.vue'),
                meta: { title: 'Edit Playground' }
              }
            ]
          }
        ]
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
  }
]

const router = new VueRouter({
  mode: 'history',
  // linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
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
