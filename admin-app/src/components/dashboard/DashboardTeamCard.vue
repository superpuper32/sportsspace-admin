<template>
  <div class="dashboard-card">
    <div class="dashboard-card__main">
      <div v-if="team.avatar_file_name" class="dashboard-card__img">
        <img :src="imageUrl" />
      </div>

      <div v-else class="dashboard-card__img">
        <img src="../../assets/avatar_team.svg" />
      </div>

      <div class="dashboard-card__title">
        {{ team.name }}
        <span>г. {{ team.address }}</span>
      </div>

      <div class="dashboard-card__name">
        <div>
          <span>Капитан:</span>
          {{ captainName }}
        </div>

        <div>
          <span>Тренер:</span>
          -
        </div>
      </div>
    </div>

    <div class="dashboard-card__info">
      0 / 0{{ team.occupancy }}
      <span>Игроков</span>
    </div>

    <div class="dashboard-card__info">
      0{{ team.wins }}
      <span>Побед</span>
    </div>

    <div class="dashboard-card__info">
      0{{ team.losing }}
      <span>Поражений</span>
    </div>

    <div class="dashboard-card__link">
      <router-link
        :to="`/teams/${team.id}`"
        class="dashboard-card__status dashboard-card__status_primary"
        >Перейти</router-link
      >

      <button class="dashboard-card__button"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardTeamCard',
  props: {
    team: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      const imageUrl = `https://sportsspace.ru/images/command/${this.team.id}/logo/${this.team.id}`

      return this.team.avatar_file_name.split('.')[1] === 'jpeg'
        ? `${imageUrl}.jpeg`
        : `${imageUrl}.jpg`
    },
    captainName() {
      return this.team.user
        ? `${this.team.user.first_name} ${this.team.user.last_name}`
        : `${this.team.user_id}`
    }
  }
}
</script>

<style lang="sass" scoped>
.dashboard-card
  margin-bottom: 6px
  padding: 20px 25px
  display: flex
  justify-content: space-between
  align-items: center
  background-color: #fff
  border-radius: 4px
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  font-family: SF Pro Display
  font-style: normal
  font-weight: normal
  font-size: 16px
  line-height: 19px
  color: #485C73

  @media (max-width: 540px)
    padding: 16px 20px

  &__main
    display: flex
    justify-content: space-between
    align-items: center

  &__img
    margin-right: 24px
    width: 40px
    height: 40px

    img
      height: 100%
      width: 100%
      border-radius: 50%

  &__title
    margin-right: 24px
    width: 200px
    font-size: 17px
    line-height: 22px

    span
      display: block
      font-size: 14px
      line-height: 21px
      color: #98A9BC

    @media (max-width: 540px)
      width: 140px

  &__name
    margin-right: 24px
    width: 220px

    div
      color: #008dff

    span
      font-size: 14px
      line-height: 21px
      color: #98A9BC

    @media (max-width: 540px)
      display: none

  &__info

    span
      display: block
      font-size: 14px
      line-height: 21px
      color: #98A9BC

    @media (max-width: 540px)
      display: none

  &__date
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: #485C73

  &__status
    padding: 10px
    font-weight: 500
    font-size: 14px
    line-height: 17px
    text-align: center
    border-radius: 4px

    &_primary
      background-color: rgba(0, 141, 255, .08)
      color: #008DFF

  &__button
    margin-left: 34px
    width: 16px
    height: 16px
    border: 0
    outline: none
    background-color: transparent
    background: url(../../assets/dashboard_btn.svg) center center no-repeat

    @media (max-width: 540px)
      display: none
</style>
