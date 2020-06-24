<template>
  <div class="dashboard-card">
    <div class="dashboard-card__img">
      <img src="../../assets/voleyball_logo.svg" alt />
    </div>
    <div class="dashboard-card__title">Волейбол</div>
    <div class="dashboard-card__name">{{ tournament.title }}</div>
    <div class="dashboard-card__date">{{ tournament.date }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    tournament: {
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
    display: flex
    justify-content: space-between
    align-items: center
    background-color: #fff
    border-radius: 4px
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)

    &__title
        font-family: SF Pro Display
        font-style: normal
        font-weight: normal
        font-size: 16px
        line-height: 19px
        color: #2C2E3F

    &__name
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
</style>
