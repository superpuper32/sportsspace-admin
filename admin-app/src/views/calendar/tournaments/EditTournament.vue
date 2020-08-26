<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create create-team">
        <h3>Настройки турнира</h3>

        <div v-if="!tournament">Загрузка данных ...</div>
        <tournament-form v-else v-model="tournament" />

        <div class="calendar__flex">
          <button type="button" class="button button__main" @click="save">Сохранить</button>
          <button type="button" class="button button__resting" @click="remove">Удалить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditTournament',
  components: {
    TournamentForm: () => import('@/components/TournamentForm')
  },
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
    }
  },
  mounted() {
    this.loadTournaments()
  },
  methods: {
    loadTournaments() {
      axios
        .get(this.url)
        .then(response => (this.tournament = response.data))
        .catch(error => console.error(error))
    },

    backToTournaments() {
      this.$router.push({ path: '/calendar/tournaments' })
    },

    save() {
      axios
        .patch(this.url, this.tournament)
        .then(() => this.backToTournaments())
        .catch(error => console.error(error))
    },

    remove() {
      const confirmed = confirm('Удалить турнир?')
      if (!confirmed) {
        return
      }

      axios.delete(this.url).then(() => this.backToTournaments())
    }
  }
}
</script>

<style lang="sass" scoped>
.calendar-form
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

.form__create
  padding: 20px 56px 20px 20px
  background-color: #fff
  border-left-top-radius: 4px
  border-left-bottom-radius: 4px

h3
  margin-bottom: 30px
</style>
