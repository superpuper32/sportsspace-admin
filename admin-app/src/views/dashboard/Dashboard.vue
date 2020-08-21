<template>
  <section>
    <div v-if="!profile">Loading ...</div>

    <div v-else class="profile">
      <div class="profile__background">
        <span>Загрузить изображение</span>
      </div>

      <profile-user :profile="profile" />

      <div v-if="practices" class="profile__cards">
        <h5>Practice</h5>

        <div v-for="practice in practices" :key="practice.index">
          <dashboard-practice-card :practice="practice" />
        </div>
      </div>

      <div v-if="teams" class="profile__cards">
        <h5>Команды</h5>

        <div v-for="team in teams" :key="team.index">
          <dashboard-team-card :team="team" />
        </div>
      </div>

      <div v-if="tournaments" class="profile__cards">
        <h5>Турниры</h5>

        <div v-for="tournament in tournaments" :key="tournament.index">
          <dashboard-tournament-card :tournament="tournament" />
        </div>
      </div>

      <div v-if="playgrounds" class="profile__cards">
        <h5>Площадки</h5>

        <div v-for="playground in playgrounds" :key="playground.index">
          <dashboard-playground-card :playground="playground" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    ProfileUser: () => import('@/components/dashboard/ProfileUser.vue'),
    DashboardTournamentCard: () => import('@/components/dashboard/DashboardTournamentCard.vue'),
    DashboardTeamCard: () => import('@/components/dashboard/DashboardTeamCard.vue'),
    DashboardPracticeCard: () => import('@/components/dashboard/DashboardPracticeCard.vue'),
    DashboardPlaygroundCard: () => import('@/components/dashboard/DashboardPlaygroundCard.vue')
  },
  computed: {
    ...mapGetters(['profile', 'teams', 'tournaments']),

    practices() {
      return this.profile.practice
    },

    playgrounds() {
      return this.profile.i_cap_playgrounds
    }
  },
  mounted() {
    this.$store.dispatch('profile/GET_PROFILE')
    this.$store.dispatch('profile/GET_TEAMS')
    this.$store.dispatch('profile/GET_TOURNAMENTS')
  }
}
</script>
