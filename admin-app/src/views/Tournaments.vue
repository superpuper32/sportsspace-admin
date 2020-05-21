<template>
  <div class="container practice">
    <h1 class="text-left">Мои Турниры</h1>
    <div class="col-md-6" v-for="tournament in tournaments" :key="tournament.index">
      <tournament-card v-bind:tournament="tournament" />
    </div>

    <h1>Создание</h1>
    <p>
      Создать турнир
      <a href="#" target="_blank" rel="noopener">здесь</a>.
    </p>
    <h3>Стартовый комплект</h3>
    <ul>
      <li>
        <a href="#" target="_blank" rel="noopener">Аккредитация для бизнеса</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Помочь с выбором турнира</a>
      </li>
      <li>
        <a href="#" target="_blank" rel="noopener">Помочь с выбором Тренера</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Tournaments',
  components: {
    TournamentCard: () => import('@/components/TournamentCard.vue')
  },
  data: function() {
    return {
      tournaments: []
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
