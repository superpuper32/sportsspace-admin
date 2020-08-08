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
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },

  {
    path: '/settings',
    component: Layout,
    name: 'Settings',
    meta: { title: 'Settings' },
    children: [
      {
        path: '/settings',
        // redirect: '/settings/main',
        component: () => import('@/views/settings'),
        name: 'ProfileSettings'
        // children: [
        //   {
        //     path: 'main',
        //     name: 'Main',
        //     component: () => import('@/views/settings/main'),
        //     meta: { title: 'Main' }
        //   },
        //   {
        //     path: 'social',
        //     name: 'Social',
        //     component: () => import('@/views/settings/social'),
        //     meta: { title: 'Social' }
        //   },
        //   {
        //     path: 'password',
        //     name: 'Password',
        //     component: () => import('@/views/settings/password'),
        //     meta: { title: 'Password' }
        //   },
        //   {
        //     path: 'payment',
        //     name: 'Payment',
        //     component: () => import('@/views/settings/payment'),
        //     meta: { title: 'Payment' }
        //   },
        //   {
        //     path: 'notification',
        //     name: 'Notification',
        //     component: () => import('@/views/settings/notification'),
        //     meta: { title: 'Notification' }
        //   }
        // ]
      }
    ]
  },

  {
    path: '/calendar',
    component: Layout,
    name: 'Calendar',
    meta: { title: 'Календарь' },
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
            meta: { title: 'Занятия' }
          },
          {
            path: 'teams',
            component: () => import('@/views/calendar/teams'),
            children: [
              {
                path: '',
                name: 'Teams',
                component: () => import('@/views/calendar/teams/Main.vue'),
                meta: { title: 'Команды' }
              },
              {
                path: 'create-team',
                name: 'Create-Team',
                component: () => import('@/views/calendar/teams/CreateTeam.vue'),
                meta: { title: 'Создать команду' }
              },
              {
                path: 'edit/:id',
                name: 'Edit-Team',
                component: () => import('@/views/calendar/teams/EditTeam.vue'),
                meta: { title: 'Редактировать команду' }
              }
            ]
          },
          {
            path: 'tournaments',
            component: () => import('@/views/calendar/tournaments'),
            children: [
              {
                path: '',
                name: 'Tournaments',
                component: () => import('@/views/calendar/tournaments/MainTournaments.vue'),
                meta: { title: 'Турниры' }
              },
              {
                path: 'accreditation',
                name: 'Accreditation-Tournament',
                component: () => import('@/views/calendar/tournaments/AccreditationTournament.vue'),
                meta: { title: 'Аккредитация' }
              },
              {
                path: 'create-tournament',
                name: 'Create-Tournament',
                component: () => import('@/views/calendar/tournaments/CreateTournament.vue'),
                meta: { title: 'Создание' }
              },
              {
                path: 'agreement/:id',
                name: 'Agreement-Tournament',
                component: () => import('@/views/calendar/tournaments/AgreementTournament.vue'),
                meta: { title: 'Согласование' }
              },
              {
                path: 'edit/:id',
                name: 'Edit-Tournament',
                component: () => import('@/views/calendar/tournaments/EditTournament.vue'),
                meta: { title: 'Редактирование' }
              },
              {
                path: 'manage/:id',
                name: 'Manage-Tournament',
                component: () => import('@/views/calendar/tournaments/ManageTournament.vue'),
                meta: { title: 'Управление' }
              }
            ]
          },

          {
            path: 'playgrounds',
            component: () => import('@/views/calendar/playgrounds'),
            children: [
              {
                path: '',
                name: 'Playgrounds',
                component: () => import('@/views/calendar/playgrounds/MainPlaygrounds.vue'),
                meta: { title: 'Площадки' }
              },
              {
                path: 'accreditation',
                name: 'Accreditation-Playground',
                component: () => import('@/views/calendar/playgrounds/AccreditationPlayground.vue'),
                meta: { title: 'Аккредитация' }
              },
              {
                path: 'create-playground',
                name: 'Create-Playground',
                component: () => import('@/views/calendar/playgrounds/CreatePlayground.vue'),
                meta: { title: 'Создание' }
              },
              {
                path: 'edit/:id',
                name: 'Edit-Playground',
                component: () => import('@/views/calendar/playgrounds/EditPlayground.vue'),
                meta: { title: 'Редактирование' }
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
        component: () => import('@/views/Tournaments.vue'),
        meta: { title: 'Турниры' }
      }
    ]
  },

  {
    path: '/teams',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AllTeams',
        component: () => import('@/views/Teams'),
        meta: { title: 'Все Команды' }
      },
      {
        path: 'edit/:id',
        name: 'EditAllTeam',
        component: () => import('@/views/Teams/Edit.vue'),
        meta: { title: 'О команде' }
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
        meta: { title: 'Тренера', icon: 'trainers' }
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
        component: () => import('@/views/Playgrounds.vue'),
        meta: { title: 'Площадки' }
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
  linkExactActiveClass: 'active',
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
