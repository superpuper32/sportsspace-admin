<template>
  <profile-user :tournaments="tournaments" />
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
      teams: [],
      tournaments: []
    }
  },
  mounted() {
    this.loadTournaments()
  },
  methods: {
    async loadTournaments() {
      await axios
        .get('https://devtest.sportsspace.ru/api/v1/current_user.json')
        .then(response => (this.tournaments = response.data.i_cap_tournaments))
        .catch(error => console.error(error))
    }
  }
}
</script>
