<template>
  <div class="tournament-panel">
    <div class="tournament-panel__header">
      <h5>Игра-1 тур-пловина выбывает</h5>

      <div class="tournament-panel__info">
        <div class="tournament-panel__place">
          <span>СК - «Прометей»</span>
        </div>

        <div class="tournament-panel__date">
          <span>28.02.2020</span>
        </div>
      </div>
    </div>

    <div class="tournament-panel__content">
      <h5>Таблица очков</h5>

      <h5>Лучший игрок</h5>

      <h5>Таблица счёта</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TournamentPanel'
}
</script>

<style lang="sass" scoped>
.tournament-panel
  margin-top: 70px
  position: absolute
  top: 0
  right: 0

  h5
    font-family: SF Pro Text
    font-style: normal
    font-weight: 600
    font-size: 17px
    line-height: 22px

  &__header
    padding: 24px 12px 28px 15px

    h5
      margin-bottom: 12px
      color: #2C2E3F

  &__info

    span
      margin-bottom: 1px
      margin-left: 35px
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: #485C73

  &__place
    position: relative

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0px
      width: 16px
      height: 16px
      background: url(../../assets/tournament-panel_place.svg) center center no-repeat
      transform: translateY(-50%)

  &__date
    position: relative

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0px
      width: 16px
      height: 16px
      background: url(../../assets/tournament-panel_date.svg) center center no-repeat
      transform: translateY(-50%)

  &__content
    padding: 24px 30px 24px 15px
    background: #FFFFFF
    box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
    border-radius: 4px

    h5
      margin-bottom: 16px
      color: #485C73
</style>
