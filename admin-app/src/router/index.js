import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { title: 'Профиль' }
      }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    name: 'Settings',
    meta: { title: 'Настройки' },
    hidden: true,
    children: [
      {
        path: '/settings',
        component: () => import('@/views/settings'),
        name: 'ProfileSettings'
      }
    ]
  },

  {
    path: '/calendar',
    component: Layout,
    name: 'Calendar',
    meta: { title: 'Календарь', icon: 'calendar-sidebar' },
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
                component: () => import('@/views/calendar/teams/CalendarTeams.vue'),
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
                name: 'CalendarTournaments',
                component: () => import('@/views/calendar/tournaments/CalendarTournaments.vue'),
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
                name: 'CalendarPlaygrounds',
                component: () => import('@/views/calendar/playgrounds/CalendarPlaygrounds.vue'),
                meta: { title: 'Площадки' }
              },
              {
                path: 'accreditation',
                name: 'AccreditationPlayground',
                component: () => import('@/views/calendar/playgrounds/AccreditationPlayground.vue'),
                meta: { title: 'Аккредитация' }
              },
              {
                path: 'create-playground',
                name: 'CreatePlayground',
                component: () => import('@/views/calendar/playgrounds/CreatePlayground.vue'),
                meta: { title: 'Создание' }
              },
              {
                path: 'edit/:id',
                name: 'EditPlayground',
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
    meta: { title: 'Турниры', icon: 'tournaments' },
    children: [
      {
        path: '/tournaments',
        redirect: '/tournaments/tournaments-all',
        component: () => import('@/views/tournaments'),
        name: 'TournamentsContent',
        children: [
          {
            path: 'tournaments-all',
            name: 'AllTournaments',
            component: () => import('@/views/tournaments/Tournaments.vue'),
            meta: { title: 'Список' }
          },
          {
            path: ':id',
            name: 'TournamentInfo',
            component: () => import('@/views/tournaments/TournamentInfo.vue'),
            meta: { title: 'Concrete' }
          }
        ]
      }
    ]
  },

  {
    path: '/teams',
    component: Layout,
    meta: { title: 'Команды', icon: 'teams' },
    children: [
      {
        path: '/teams',
        redirect: '/teams/teams-all',
        component: () => import('@/views/teams'),
        name: 'TeamsContent',
        children: [
          {
            path: 'teams-all',
            name: 'AllTeams',
            component: () => import('@/views/teams/Teams.vue'),
            meta: { title: 'Список' }
          },
          {
            path: ':id',
            name: 'TeamInfo',
            component: () => import('@/views/teams/TeamInfo.vue'),
            meta: { title: 'Concrete' }
          }
        ]
      }
    ]
  },

  {
    path: '/trainers',
    component: Layout,
    meta: { title: 'Тренера', icon: 'trainers' },
    hidden: true,
    children: [
      {
        path: '/trainers',
        name: 'Trainers',
        component: () => import('@/views/trainers')
      }
    ]
  },

  {
    path: '/playgrounds',
    component: Layout,
    meta: { title: 'Площадки', icon: 'playgrounds' },
    children: [
      {
        path: '/playgrounds',
        redirect: '/playgrounds/playgrounds-all',
        component: () => import('@/views/playgrounds'),
        name: 'PlaygroundsContent',
        children: [
          {
            path: 'playgrounds-all',
            name: 'AllPlaygrounds',
            component: () => import('@/views/playgrounds/Playgrounds.vue'),
            meta: { title: 'Список' }
          },
          {
            path: ':id',
            name: 'PlaygroundInfo',
            component: () => import('@/views/playgrounds/PlaygroundInfo.vue'),
            meta: { title: 'Concrete' }
          }
        ]
      }
    ]
  },

  {
    path: '/contacts',
    component: Layout,
    meta: { title: 'Контакты', icon: 'contacts' },
    hidden: true,
    children: [
      {
        path: '/contacts',
        name: 'Contacts',
        component: () => import('@/views/Contacts.vue')
      }
    ]
  }
]

const createRouter = () =>
  new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// const token = '123'

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (token !== '123') {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
