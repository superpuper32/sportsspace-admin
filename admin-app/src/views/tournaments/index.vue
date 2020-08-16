<template>
  <section>
    <h2>Все Турниры</h2>

    <div v-if="!haveTournaments">...loading</div>

    <div class="profile__cards">
      <div v-for="tournament in tournaments" v-bind:key="tournament.index">
        <dashboard-tournament-card v-bind:tournament="tournament" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Tournaments',
  components: {
    DashboardTournamentCard: () => import('@/components/DashboardTournamentCard')
  },
  data: function() {
    return {
      tournaments: []
    }
  },
  computed: {
    haveTournaments() {
      return this.tournaments.length > 0
    }
  },
  mounted() {
    this.loadTournaments()
  },
  methods: {
    loadTournaments() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/tournaments.json')
        .then(response => (this.tournaments = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>
