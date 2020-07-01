<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create create-team">
        <h3>Управление игровой площадкой {{ id }}</h3>

        <div v-if="!playground">Загрузка данных ...</div>
        <playground-form v-else :playground="playground" />
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
  data: function() {
    return {
      playground: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadPlayground()
  },
  methods: {
    loadPlayground() {
      axios
        .get('http://localhost:3004/playgrounds/' + this.id)
        .then(response => (this.playground = response.data))
        .catch(error => console.error(error))
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
