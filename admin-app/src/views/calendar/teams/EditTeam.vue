<template>
  <section>
    <div class="calendar__grid calendar-form">
      <div class="form__create-team create-team">
        <h3>Редактирование команды {{ id }}</h3>

        <team-form v-model="team" />

        <div class="create-team__map"></div>

        <simple-input title="Тренер" placeholder="Выберите тренера" />

        <div class="create-team__columns">
          <div class="create-team__column">
            <simple-input title="Дни недели встреч" placeholder="30.05.2020" />

            <simple-input placeholder="Понедельник — 30.05.2020" />
          </div>

          <div class="create-team__column">
            <simple-input title="Время тренировки" placeholder="16:00" />

            <simple-input placeholder="Понедельник — 30.05.2020" />
          </div>
        </div>

        <simple-input title="Описание" placeholder="Введите информацию" />

        <simple-input title="Пригласить участников " placeholder="Введите имя участника" />
      </div>

      <div class="calendar__help">
        <h5>Подсказка</h5>

        <button class="button button__main" @click="save">Изменить</button>
        <button class="button button__resting">Отменить</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditTeam',
  components: {
    SimpleInput: () => import('@/components/SimpleInput'),
    TeamForm: () => import('@/components/TeamForm')
  },
  data: function() {
    return {
      team: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    fullName() {
      return `${this.team.captainName.first} ${this.team.captainName.last}`
    }
  },
  mounted() {
    this.loadTeam()
  },
  methods: {
    loadTeam() {
      axios
        .get('http://localhost:3004/teams/' + this.id)
        .then(response => (this.team = response.data))
        .catch(error => console.error(error))
    },
    save() {
      axios
        .patch('http://localhost:3004/teams/' + this.id, this.team)
        .then(() => this.$router.push('/teams'))
        .catch(error => console.error(error))
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
