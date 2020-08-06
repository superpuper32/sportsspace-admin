<template>
  <section>
    <h3>{{ team.name }}</h3>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditAllTeam',
  data: () => ({
    team: null,
    restUrl: 'https://devtest.sportsspace.ru/api/v1/commands'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}.json`
    }
  },
  mounted() {
    this.loadTeam()
  },
  methods: {
    loadTeam() {
      axios
        .get(this.url)
        .then(response => (this.team = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
