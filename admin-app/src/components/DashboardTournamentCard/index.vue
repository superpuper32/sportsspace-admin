<template>
  <div class="dashboard-card">
    <div v-if="tournament.avatar_file_name" class="dashboard-card__img">
      <img :src="imageUrl" />
    </div>

    <div v-else class="dashboard-card__img">
      <img src="../../assets/voleyball_logo.svg" />
    </div>

    <div class="dashboard-card__sport">{{ sportName }}</div>

    <div class="dashboard-card__title">{{ tournamentName }}</div>

    <div class="dashboard-card__date">{{ tournament.data_and_time }}</div>

    <div class="dashboard-card__status dashboard-card__status_warning">Стартовал</div>

    <router-link tag="button" :to="`/tournaments/${tournament.id}`" class="dashboard-card__button"></router-link>
  </div>
</template>

<script>
export default {
  name: 'DashboardTournamentCard',
  props: {
    tournament: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      const imageUrl = `https://sportsspace.ru/images/tournaments/${this.tournament.id}/logo/${this.tournament.id}`

      return this.tournament.avatar_file_name.split('.')[1] === 'jpeg'
        ? `${imageUrl}.jpeg`
        : `${imageUrl}.jpg`
    },
    tournamentName() {
      return this.tournament.name.toLowerCase()
    },
    sportName() {
      const str = this.tournament.sport
      return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
  }
}
</script>

<style lang="sass" scoped>
.dashboard-card
  margin-bottom: 6px
  padding: 20px 25px
  display: grid
  grid-template-columns: 1fr 2fr 8fr 3fr 2fr 50px
  align-items: center
  background-color: #fff
  border-radius: 4px
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)

  &__img
    width: 40px
    height: 40px

    img
      height: 100%
      width: 100%
      border-radius: 50%

  &__sport
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 16px
    line-height: 19px
    color: #2C2E3F

  &__title
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 21px
    color: #485C73

  &__date
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: #485C73

  &__status
    padding: 10px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    border-radius: 4px
    text-align: center

    &_success
      background-color: rgba(30, 215, 96, .08)
      color: #1ED760

    &_warning
      background-color: rgba(255, 199, 0, .08)
      color: #FFC700

  &__button
    margin-left: 34px
    width: 16px
    height: 16px
    border: 0
    outline: none
    background-color: transparent
    background: url(../../assets/dashboard_btn.svg) center center no-repeat
    cursor: pointer
</style>
