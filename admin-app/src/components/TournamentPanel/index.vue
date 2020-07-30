<template>
  <div class="tournament-panel">
    <div class="tournament-panel__sticky">
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
        <div class="tournament-panel__score">
          <div class="tournament-panel__team">
            <div class="tournament-panel__icon">
              <img src="../../assets/tournament-panel_team-icon.svg" alt />
            </div>
            <h6>Команда А</h6>
            <span>Дома</span>
          </div>

          <div class="tournament-panel__result">0:0</div>

          <div class="tournament-panel__team">
            <div class="tournament-panel__icon">
              <img src="../../assets/tournament-panel_team-icon.svg" alt />
            </div>
            <h6>Команда B</h6>
            <span>На выезде</span>
          </div>
        </div>

        <h5>Таблица очков</h5>
        <span>Выигранные партии</span>
        <div class="tournament-panel__games">
          <div class="tournament-panel__game">
            <span>3</span>
          </div>
          <div class="tournament-panel__game">
            <span>2</span>
          </div>
        </div>

        <span>Забитые мячи</span>
        <div class="tournament-panel__games">
          <div class="tournament-panel__game">
            <span>85</span>
          </div>
          <div class="tournament-panel__game">
            <span>53</span>
          </div>
        </div>

        <h5>Лучший игрок</h5>
        <span>Команда А</span>
        <div class="tournament-panel__name tournament-panel__name_player">
          <span>Иванов Иван Иванович</span>
        </div>
        <span>Команда B</span>
        <div class="tournament-panel__name tournament-panel__name_player">
          <span>Иванов Иван Иванович</span>
        </div>

        <h5>Таблица счёта</h5>

        <ul class="score-table">
          <li>
            <span>Партия 1</span>
            <div class="score-table__cell">
              <span>25:15</span>
            </div>
          </li>
          <li>
            <span>Партия 2</span>
            <div class="score-table__cell">
              <span>20:25</span>
            </div>
          </li>
          <li>
            <span>Партия 3</span>
            <div class="score-table__cell">
              <span>25:15</span>
            </div>
          </li>
          <li>
            <span>Партия 4</span>
            <div class="score-table__cell">
              <span>25:15</span>
            </div>
          </li>
          <li>
            <span>Партия 5</span>
            <div class="score-table__cell">
              <span>25:15</span>
            </div>
          </li>
        </ul>

        <h5>Судейство</h5>
        <span>Команда А</span>
        <div class="tournament-panel__name tournament-panel__name_judge">
          <span>Иванов Иван Иванович</span>
        </div>
        <span>Команда B</span>
        <div class="tournament-panel__name tournament-panel__name_judge">
          <span>Иванов Иван Иванович</span>
        </div>
      </div>
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

  &__sticky
    padding-bottom: 168px
    position: fixed
    height: 100%
    top: 70px
    right: 0px
    overflow-y: scroll
    scrollbar-width: none

    &::-webkit-scrollbar
      display: none

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

    span
      margin-bottom: 4px
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: #98A9BC

  &__score
    margin-bottom: 24px
    display: flex
    justify-content: space-between
    align-items: center

  &__team
    text-align: center
    font-style: normal

    h6
      font-family: SF Pro Text
      margin-bottom: 0px
      font-weight: 600
      font-size: 15px
      line-height: 20px

    span
      display: block
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: #98A9BC

  &__icon
    margin: auto
    margin-bottom: 8px
    width: 52px
    height: 52px
    border-radius: 50%

  &__result
    font: 600 34px/39px "SF Pro Display", sans-serif
    font-style: normal
    color: #008DFF

  &__games
    margin-bottom: 8px
    display: flex
    justify-content: space-between

  &__game
    display: flex
    align-items: center
    width: 128px
    height: 36px
    background-color: rgba(0, 141, 255, .08)
    border-radius: 4px

    &:first-child
      margin-right: 8px

    span
      margin: auto
      display: block
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      text-align: center
      color: #008DFF

  &__name
    margin-bottom: 8px
    display: flex
    align-items: center
    width: 100%
    height: 36px
    border-radius: 4px

    &_player
      background-color: rgba(48, 207, 208, .08)

      span
        color: #30CFD0

    &_judge
      background-color: rgba(244, 63, 63, .08)

      span
        color: #F43F3F

    span
      margin: auto
      display: block
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      text-align: center

.score-table
  margin: 0px 0px 16px
  padding: 0px
  max-width: 264px
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  list-style: none

  &__cell
    display: flex
    align-items: center
    width: 128px
    height: 36px
    background-color: rgba(30, 215, 96, .08)
    border-radius: 4px

    span
      display: block
      margin: auto
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      color: #1ED760
</style>
