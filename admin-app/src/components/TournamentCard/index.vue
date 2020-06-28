<template>
  <div class="tournament-card">
    <div class="tournament-card__status">
      <span>В процессе</span>
      <img
        src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&d=retro"
        alt="avatar"
      />
    </div>

    <div class="tournament-card__title">
      <div>
        <h4>{{ tournament.title }}</h4>
        <span>Дата создания:</span>
        {{ tournament.created }}
      </div>

      <div class="tournament-card__icons">
        <img src="../../assets/tournament-card_trophy.svg" alt="logo tournament" />
        <img src="../../assets/voleyball_logo.svg" alt="logo voleyball" />
      </div>
    </div>

    <div class="tournament-card__teams">
      <div>
        <span>Команды</span>
        <div class="tournament-card__occupancy">{{ tournament.occupancy }}</div>
      </div>

      <div class="tournament-card__team-icons">
        <img src="../../assets/avatar_team.svg" alt="avatar team" />
      </div>
    </div>

    <div class="tournament-card__date-info">
      <span>Дата проведения</span>
      <div class="tournament-card__date">
        {{ tournament.date }} {{ tournament.time }}
        <span>- Осталось 3 дня</span>
      </div>
    </div>

    <div class="tournament-card__buttons">
      <button class="tournament-card__settings"></button>
      <button class="button button__card-main">Согласовать</button>
      <button class="button button__card-resting">Удалить</button>
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

  span
    font-family: SF Pro Text
    font-style: normal
    font-weight: normal
    font-size: 8px
    line-height: 12px
    color: #98A9BC

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

  &__title
    padding: 20px 20px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 0.5px solid #E8ECEF
    font-size: 8px
    line-height: 12px
    color: #485C73

    h4
      margin-bottom: 6px
      font-family: SF Pro Display
      font-weight: 600
      font-size: 20px
      line-height: 25px
      color: #485C73

    span
      margin-right: 8px

  &__icons
    display: flex
    justify-content: space-between

    img
      width: 32px
      height: 32px

      &:first-child
        margin-right: 8px

  &__teams
    padding: 14px 20px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 0.5px solid #E8ECEF

  &__occupancy
    position: relative
    padding-left: 24px
    font-size: 14px
    line-height: 21px
    color: #485C73

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/tournament-card_occupancy.svg) center center no-repeat
      transform: translateY(-50%)

  &__date-info
    padding: 16px 20px
    border-bottom: 0.5px solid #E8ECEF

    span
      display: block

  &__date
    position: relative
    margin-top: 10px
    padding-left: 22px
    font-family: SF Pro Text
    font-style: normal
    font-weight: 600
    font-size: 12px
    line-height: 16px
    color: #485C73

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/tournament-card_date.svg) center center no-repeat
      transform: translateY(-50%)

    span
      display: inline
      font-size: 14px
      line-height: 21px
      color: #98A9BC

  &__buttons
    padding: 54px 20px 20px
    display: flex
    justify-content: flex-end

  &__settings
    width: 32px
    height: 32px
    background: url(../../assets/button_settings.svg) center center no-repeat
    border: 1px dashed #F8FAFB
    border-radius: 50%
</style>
