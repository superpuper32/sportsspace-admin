<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create">
        <h3>Добавление игровой площадки</h3>

        <playground-form v-model="playground" />

        <div class="calendar__flex">
          <button type="button" class="button button__main" @click="create">Создать</button>
          <button class="button button__resting" @click="backToPlaygounds">Отменить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

const defaultPlayground = {
  id: null,
  index: '',
  title: '',
  quantityPlayers: 0,
  address: '',
  created: '',
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
  name: 'CreatePlayground',
  components: {
    PlaygroundForm: () => import('@/components/PlaygroundForm')
  },
  data: () => ({
    playground: defaultPlayground,
    url: 'http://localhost:3004/playgrounds/'
  }),
  methods: {
    backToPlaygounds() {
      this.$router.push({ path: '/calendar/playgrounds' })
    },

    create() {
      axios.post(this.url, this.playground).then(() => this.backToPlaygounds())
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
