<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create-team create-team">
        <h3>Редактирование команды {{ id }}</h3>

        <div v-if="!team">Загрузка данных ...</div>
        <team-form v-else v-model="team" />
      </div>

      <div class="calendar__help">
        <h5>Подсказка</h5>

        <button class="button button__main" @click="save">Изменить</button>
        <button class="button button__resting" @click="remove">Удалить</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditTeam',
  components: {
    TeamForm: () => import('@/components/TeamForm')
  },
  data: () => ({
    team: null,
    restUrl: 'http://localhost:3004/teams/'
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
    this.loadTeam()
  },
  methods: {
    loadTeam() {
      axios
        .get(this.url)
        .then(response => (this.team = response.data))
        .catch(error => console.error(error))
    },

    backToTeams() {
      this.$router.push({ path: '/calendar/teams' })
    },

    save() {
      axios
        .patch(this.url, this.team)
        .then(() => this.backToTeams())
        .catch(error => console.error(error))
    },

    remove() {
      const confirmed = confirm('Удалить команду?')
      if (!confirmed) {
        return
      }

      axios.delete(this.url).then(() => this.backToTeams())
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../styles/colors.sass'

.calendar-form
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

.form__create-team
  padding: 20px 56px 20px 20px
  background-color: #fff
  border-left-top-radius: 4px
  border-left-bottom-radius: 4px

  h3
    margin-bottom: 30px

.create-team

  &__columns
    display: flex
    justify-content: space-between

    &__column
      width: 49%

    &__map
      margin-bottom: 26px
      width: 100%
      height: 248px
      background: url(../../../assets/Map.png) center center no-repeat
      background-size: cover
      border-radius: 4px

    &__logo
      margin-bottom: 26px

      span
        display: block
        margin-bottom: 8px
        font-family: SF Pro Display
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 17px
        color: $font-black

    &__img
      height: 177px
      border: 1px dashed #E8ECEF
      border-radius: 4px
      display: flex
      justify-content: center
      align-items: center

      span
        position: relative
        font-family: SF Pro Display
        font-style: normal
        font-weight: 500
        font-size: 12px
        line-height: 14px
        text-transform: uppercase
        color: #98A9BC

        &:before
          content: ''
          display: block
          position: absolute
          top: 50%
          left: -32px
          width: 24px
          height: 24px
          background: url(../../../assets/create_img.svg) center center no-repeat
          transform: translateY(-50%)
</style>
