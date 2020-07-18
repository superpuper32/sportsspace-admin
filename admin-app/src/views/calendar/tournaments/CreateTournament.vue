<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create">
        <h3>Создание турнира</h3>

        <tournament-form v-model="tournament" />

        <div class="calendar__flex">
          <button type="button" class="button button__main" @click="create">Создать</button>
          <button class="button button__resting" @click="backToTournaments">Отменить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const defaultTournament = {
  id: null,
  index: '',
  title: '',
  sportKind: '',
  formTournament: '',
  address: '',
  location: '',
  created: '',
  quantityPlayers: '',
  status: '',
  rate: '',
  latitude: '',
  longitude: '',
  sport: { kind: '' },
  workHours: { start: '', close: '' },
  parameters: { length: '', width: '', covering: '' },
  price: '',
  about: '',
  description: ''
}

export default {
  name: 'CreateTournament',
  components: {
    TournamentForm: () => import('@/components/TournamentForm')
  },
  data: () => ({
    tournament: defaultTournament,
    url: 'http://localhost:3004/tournaments/'
  }),
  methods: {
    backToTournaments() {
      this.$router.push({ path: '/calendar/tournaments' })
    },

    create() {
      axios.post(this.url, this.tournament).then(() => this.backToTournaments())
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
