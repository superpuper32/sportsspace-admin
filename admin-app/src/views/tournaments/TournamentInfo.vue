<template>
  <section class="team-info">
    <div v-if="!tournament">Loading >>></div>
    {{ tournament.name }}
    {{ tournament.address }}
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TournamentInfo',

  data: () => ({
    tournament: null,
    restUrl: 'https://devtest.sportsspace.ru/api/v1/tournaments/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}.json`
    },
    haveImg() {
      return this.tournament.avatar_file_name !== null
    },
    imageUrl() {
      const imageUrl = `https://sportsspace.ru/images/tournaments/${this.tournament.id}/logo/${this.tournament.id}`

      return this.tournament.avatar_file_name.split('.')[1] === 'jpeg'
        ? `${imageUrl}.jpeg`
        : `${imageUrl}.jpg`
    }
  },
  mounted() {
    this.loadTournament()
  },
  methods: {
    loadTournament() {
      axios
        .get(this.url)
        .then(response => (this.tournament = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="sass" scoped>
.tournament-info
    padding: 20px 28px 75px 24px
    background-color: #ffffff
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
</style>
