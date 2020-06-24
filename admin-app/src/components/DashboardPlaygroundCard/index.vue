<template>
  <div class="dashboard-card">
    <div class="dashboard-card__img">
      <img src="../../assets/voleyball_logo.svg" />
    </div>
    <div class="dashboard-card__sport">
      {{ playground.sport }}
      <span>{{ playground.role }}</span>
    </div>
    <div class="dashboard-card__title">
      {{ playground.title.toLowerCase() }}
      <span>{{ playground.address }}</span>
    </div>
    <div class="dashboard-card__date">{{ playground.date }}</div>
    <div class="dashboard-card__status dashboard-card__status_success">Идет набор</div>
    <button class="dashboard-card__button"></button>
  </div>
</template>

<script>
export default {
  name: 'DashboardPlaygroundCard',
  props: {
    playground: {
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
    grid-template-columns: 1fr 2fr 8fr 3fr 2fr 50px
    align-items: center
    background-color: #fff
    border-radius: 4px
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)

    &__sport
        font-family: SF Pro Display
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 19px
        color: #2C2E3F

        span
            display: block
            font-size: 14px
            line-height: 21px
            color: #98A9BC

    &__title
        font-family: SF Pro Display
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 21px
        color: #485C73

        span
            display: block
            font-size: 14px
            line-height: 21px
            color: #98A9BC

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
</style>
