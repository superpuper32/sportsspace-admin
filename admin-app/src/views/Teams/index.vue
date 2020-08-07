<template>
  <section>
    <h2>Команды</h2>

    <div class="profile__cards">
      <div v-for="team in teams" v-bind:key="team.index">
        <dashboard-team-card v-bind:team="team" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AllTeams',
  components: {
    DashboardTeamCard: () => import('@/components/DashboardTeamCard')
  },
  data: function() {
    return {
      teams: []
    }
  },
  mounted() {
    this.loadTeams()
  },
  methods: {
    loadTeams() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/commands.json')
        .then(response => (this.teams = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>
