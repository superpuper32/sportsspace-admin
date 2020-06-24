<template>
  <div class="dashboard-card">
    <div class="dashboard-card__img">
      <img :src="team.image" alt />
    </div>
    <div class="dashboard-card__title">
      {{ team.title }}
      <span>{{ team.role }}</span>
    </div>
    <div class="dashboard-card__sport">{{ team.sport }}</div>
    <div class="dashboard-card__title">
      {{ team.occupancy }}
      <span>Игроков</span>
    </div>

    <div class="dashboard-card__title">
      {{ team.wins }}
      <span>Побед</span>
    </div>

    <div class="dashboard-card__title">
      {{ team.loses }}
      <span>Поражений</span>
    </div>

    <div class="dashboard-card__status dashboard-card__status_primary">Перейти</div>
    <button class="dashboard-card__button"></button>
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
  }
}
</script>

<style lang="sass" scoped>
.dashboard-card
    margin-bottom: 6px
    padding: 20px 25px
    display: grid
    grid-template-columns: 1fr 2fr 2fr 3fr 3fr 3fr 2fr 50px
    align-items: center
    background-color: #fff
    border-radius: 4px
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal

    &__img
        width: 40px
        height: 40px

        img
            width: 100%
            border-radius: 50%

    &__sport
        font-size: 16px
        line-height: 19px
        color: #2C2E3F

    &__title
        font-size: 16px
        line-height: 19px
        color: #485C73

        span
            display: block
            font-size: 14px
            line-height: 21px
            color: #98A9BC

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
</style>
