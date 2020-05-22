<template>
  <div class="container practice">
    <h1 class="text-left">Мои Турниры</h1>

    <div class="row mb-2">
      <div class="col-md-6" v-for="tournament in tournaments" :key="tournament.index">
        <tournament-card v-bind:tournament="tournament" />
      </div>
    </div>

    <h2 class="text-left">Создание</h2>

    <p>
      Создать турнир
      <a href="#" target="_blank" rel="noopener">здесь</a>.
    </p>

    <h3 class="text-left">Стартовый комплект</h3>

    <div class="row mb-2">
      <div class="col-md-4">
        <card-recomend v-bind:tournament="tournament" />
        <a href="#" target="_blank" rel="noopener">Аккредитация для бизнеса</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Tournaments',
  components: {
    TournamentCard: () => import('@/components/TournamentCard.vue'),
    CardRecomend: () => import('@/components/CardRecomend.vue')
  },
  data: function() {
    return {
      tournaments: [],
      recomends: []
    }
  },
  mounted() {
    this.loadTournaments()
  },
  methods: {
    loadTournaments() {
      axios
        .get('http://localhost:3004/tournaments')
        .then(response => (this.tournaments = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
