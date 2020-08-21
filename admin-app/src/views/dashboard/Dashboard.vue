<template>
  <section>
    <div v-if="!profile">Loading ...</div>

    <div v-else class="profile">
      <profile-user :profile="profile" />
      <h5>Команды</h5>

      <div v-if="teams" class="profile__cards">
        <div v-for="team in teams" v-bind:key="team.index">
          <dashboard-team-card v-bind:team="team" />
        </div>
      </div>

      <h5>Турниры</h5>

      <div class="profile__cards">
        <div v-for="tournament in tournaments" v-bind:key="tournament.index">
          <dashboard-tournament-card :tournament="tournament" />
        </div>
      </div>

      <h5>Площадки</h5>

      <div class="profile__cards">
        <div v-for="playground in playgrounds" v-bind:key="playground.index">
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
    ProfileUser: () => import('@/components/ProfileUser/index.vue'),
    DashboardTournamentCard: () => import('@/components/DashboardTournamentCard'),
    DashboardTeamCard: () => import('@/components/DashboardTeamCard'),
    // DashboardPracticeCard: () => import('@/components/DashboardPracticeCard'),
    DashboardPlaygroundCard: () => import('@/components/DashboardPlaygroundCard')
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
