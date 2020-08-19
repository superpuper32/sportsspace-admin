<template>
  <section>
    <div v-if="!playground">Loading >>></div>

    <div v-else>{{ playground.name }}</div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PlaygroundInfo',
  data: () => ({
    playground: null,
    restUrl: 'https://devtest.sportsspace.ru/api/v1/playgrounds/'
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
    this.loadPlayground()
  },
  methods: {
    loadPlayground() {
      axios
        .get(this.url)
        .then(response => (this.playground = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
