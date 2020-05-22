<template>
  <div class="container teams">
    <h1 class="text-left">Команды мои</h1>

    <div class="row mb-2">
      <div class="col-md-6" v-for="team in teams" :key="team.index">
        <team-card v-bind:team="team" />
      </div>
    </div>

    <h2 class="text-left">Создание</h2>

    <p>
      Создать свою команду
      <a href="#" target="_blank" rel="noopener">здесь</a>.
    </p>

    <h3 class="text-left">Стартовый комплект</h3>

    <div class="row mb-2">
      <div class="col-md-4">
        <card-recomend v-bind="team" />
      </div>

      <div class="col-md-4">
        <card-recomend v-bind="team" />
      </div>

      <div class="col-md-4">
        <card-recomend v-bind="team" />
      </div>
    </div>

    <h3 class="text-left">Заслуживает внимания</h3>

    <div class="row mb-2">
      <div class="col-md-4" v-for="recomend in recomends" :key="recomend.index">
        <card-recomend v-bind:recomend="recomend" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Teams',
  components: {
    TeamCard: () => import('@/components/TeamCard.vue'),
    CardRecomend: () => import('@/components/CardRecomend.vue')
  },
  data: function() {
    return {
      teams: [],
      recomend: []
    }
  },
  mounted() {
    this.loadTeams()
  },
  methods: {
    loadTeams() {
      const token = '1234567890' // localStorage/cookies

      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      axios
        .get('http://localhost:3004/teams', config)
        .then(response => (this.teams = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
