<template>
  <section class="team-info">
    <div v-if="!team">Loading >>></div>

    <div class="team-info__header">
      <div class="team-info__left">
        <div v-if="haveImg" class="team-info__logo">
          <img :src="imageUrl" />
        </div>

        <div v-else class="team-info__logo">
          <img src="../../assets/avatar_team.svg" alt />
        </div>

        <div class="team-info__main">
          <h3>Кoманда {{ team.name }}</h3>

          <div class="team-info__prop">
            <span>Адрес игровой площадки:</span>
            {{ team.address }}
          </div>

          <div class="team-info__prop">
            <span>Дни тренировок:</span>
            Пн Вт Ср
          </div>
        </div>
      </div>

      <div class="team-info__scores">
        <div class="team-info__points">
          <div class="team-info__captain">
            <span>{{ team.users[0].nickname }}</span>
            Капитан
          </div>

          <div class="team-info__wins">
            <span>0</span>
            Побед
          </div>

          <div class="team-info__loses">
            <span>0</span>
            Поражений
          </div>
        </div>

        <div class="team-info__status">
          <a>В команде</a>
        </div>
      </div>
    </div>

    <div class="team-info__players">
      <div v-for="user in team.users" v-bind:key="user.index">
        <player-card v-bind:user="user" />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TeamInfo',
  components: {
    PlayerCard: () => import('@/components/PlayerCard')
  },
  data: () => ({
    team: null,
    restUrl: 'https://devtest.sportsspace.ru/api/v1/commands/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}.json`
    },
    haveImg() {
      return this.team.avatar_file_name !== null
    },
    imageUrl() {
      const imageUrl = `https://sportsspace.ru/images/command/${this.team.id}/logo/${this.team.id}`

      return this.team.avatar_file_name.split('.')[1] === 'jpeg'
        ? `${imageUrl}.jpeg`
        : `${imageUrl}.jpg`
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

<style lang="sass" scoped>
.team-info

  &__header
    display: flex
    justify-content: space-between
    margin-bottom: 30px
    padding: 20px 28px 75px 24px
    background-color: #ffffff
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
    border-radius: 8px

  &__left
    display: flex

  &__scores
    display: flex
    flex-direction: column
    justify-content: space-between
    color: #485C73

  &__points
    display: flex

    div
      margin: 0px 8px

      span
        padding: 4px 10px
        border-radius: 4px

  &__captain

    span
      color: #008DFF
      background: rgba(0, 141, 255, .08)

  &__wins

    span
      color: #0D9372
      background: rgba(17, 184, 38, 0.08)

  &__loses

    span
      color: #F43F3F
      background: rgba(255, 49, 49, 0.08)

  &__logo
    padding-right: 26px

    img
      width: 100px
      height: 100px
      border-radius: 50%

  &__prop
    margin-bottom: 8px
    font-family: SF Pro Text
    font-style: normal
    font-weight: 600
    font-size: 12px
    line-height: 16px
    text-transform: uppercase
    color: #008DFF

    span
      margin-bottom: 3px
      display: block
      font-family: SF Pro Display
      font-weight: 500
      font-size: 14px
      line-height: 17px
      text-transform: none
      color: #485C73

  &__status
    display: flex
    justify-content: flex-end

    a
      padding: 10px 14px 9px
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      color: #32BF84
      background: rgba(50, 191, 132, .08)

  &__players
    display: flex
    justify-content: flex-start
    flex-wrap: wrap
</style>
