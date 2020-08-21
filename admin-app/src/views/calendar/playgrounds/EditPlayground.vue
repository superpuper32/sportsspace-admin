<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create create-team">
        <h3>Управление игровой площадкой {{ id }}</h3>

        <div v-if="!playground">Загрузка данных ...</div>
        <playground-form v-else v-model="playground" />

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
  name: 'EditPlayground',
  components: {
    PlaygroundForm: () => import('@/components/PlaygroundForm')
  },
  data: () => ({
    playground: null,
    restUrl: 'http://localhost:3004/playgrounds/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}`
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
    },

    backToPlaygounds() {
      this.$router.push({ path: '/calendar/playgrounds' })
    },

    save() {
      axios
        .patch(this.url, this.playground)
        .then(() => this.backToPlaygounds())
        .catch(error => console.error(error))
    },

    remove() {
      const confirmed = confirm('Удалить площадку?')
      if (!confirmed) {
        return
      }

      axios.delete(this.url).then(() => this.backToPlaygounds())
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
