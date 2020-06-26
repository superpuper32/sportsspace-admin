<template>
  <div class="tournament-card">
    <div class="tournament-card__status">
      <span>В процессе</span>
      <img src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&d=retro" alt />
    </div>

    <div class="row">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary">2 Круг ЮВ</strong>
        <h3 class="mb-0">🏆 title</h3>
        <div class="mb-1 text-muted">создана 26.01.2020 20:51</div>
        <p class="card-text mb-auto">Вид спорта: Волейбол</p>
        <p class="card-text mb-auto">Команды: 10</p>
        <p class="card-text mb-auto">Дата проведения: 21.12.2020 02:00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TournamentCard',
  props: {
    tournament: {
      type: Object,
      required: true,
      deep: true
    }
  }
}
</script>

<style lang="sass" scoped>
.tournament-card
  display: flex
  flex-direction: column
  border: 1px solid #E8ECEF
  background: #FFFFFF
  border-radius: 4px

  &__status
    padding: 10px 20px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 0.5px solid #E8ECEF

    span
      margin-left: 30px
      position: relative
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 12px
      line-height: 14px
      text-transform: uppercase
      color: #FFC700

      &:before
        content: ''
        position: absolute
        top: 50%
        left: -30px
        width: 20px
        height: 20px
        background: url(../../assets/tournament-card_status.svg) center center no-repeat
        transform: translateY(-50%)

    img
      width: 32px
      height: 32px
      border-radius: 50%
</style>
