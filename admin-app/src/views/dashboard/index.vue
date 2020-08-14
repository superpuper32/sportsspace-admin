<template>
  <profile-user :teams="teams" :tournaments="tournaments" />
</template>

<script>
import axios from 'axios'
// import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  components: {
    ProfileUser: () => import('@/components/ProfileUser/index.vue')
  },
  data: function() {
    return {
      teams: [],
      tournaments: []
    }
  },
  mounted() {
    this.loadTeams()
    this.loadTournaments()
  },
  methods: {
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
