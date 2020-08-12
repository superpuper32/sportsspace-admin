<template>
  <profile-user :profile="profile" :teams="teams" :tournaments="tournaments" />
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
    ProfileUser: () => import('@/components/ProfileUser/index.vue')
  },
  data: function() {
    return {
      profile: null,
      teams: [],
      tournaments: []
    }
  },
  mounted() {
    this.loadProfile()
    this.loadTeams()
    this.loadTournaments()
  },
  methods: {
    async loadProfile() {
      await axios
        .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
        .then(response => (this.profile = response.data.current_user))
        .catch(error => console.error(error))
    },
    async loadTeams() {
      await axios
        .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
        .then(response => (this.teams = response.data.i_cap_teams))
        .catch(error => console.error(error))
    },
    async loadTournaments() {
      await axios
        .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
        .then(response => (this.tournaments = response.data.i_cap_tournaments))
        .catch(error => console.error(error))
    }
  }
}
</script>
