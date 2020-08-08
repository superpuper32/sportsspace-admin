<template>
  <section>
    <h2>Все Площадки</h2>

    <div class="profile__cards">
      <div v-for="playground in playgrounds" v-bind:key="playground.index">
        <dashboard-playground-card v-bind:playground="playground" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Playgrounds',
  components: {
    DashboardPlaygroundCard: () => import('@/components/DashboardPlaygroundCard')
  },
  data: function() {
    return {
      playgrounds: []
    }
  },
  mounted() {
    this.loadTournaments()
  },
  methods: {
    loadTournaments() {
      axios
        .get('https://devtest.sportsspace.ru/api/v1/playgrounds.json')
        .then(response => (this.playgrounds = response.data.items))
        .catch(error => console.error(error))
    }
  }
}
</script>
