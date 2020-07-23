<template>
  <div class="agreement">
    <h2>Согласование команд участников</h2>

    <div class="card-agreement">
      <div class="card-agreement__header">
        <div class="card-agreement__title">
          <div class="card-agreement__img">
            <img src="../../../assets/tournament_icon.svg" />
          </div>

          <div class="card-agreement__info">
            <h4>Любительская Волебольная Лига 2 круга ЮВ</h4>
            <span>Заявки | Москва, п. Коммунарка</span>
          </div>
        </div>

        <div class="card-agreement__buttons">
          <button class="button button__blue">
            <a>Новые</a>
          </button>
          <button class="card-agreement__button"></button>
        </div>
      </div>

      <div class="card-agreement__content">
        <div class="card-agreement__team">
          <div>
            <div class="card-agreement__img">
              <img src="../../../assets/agreement_team.svg" />
            </div>

            <div class="card-agreement__title">
              <h5>Меззище</h5>
              <span>г. Сочи</span>
            </div>

            <div class="card-agreement__title">
              <div>12 / 12</div>
              <span>Участников</span>
            </div>
          </div>

          <div class="card-agreement__buttons">
            <div class="card-agreement__status card-agreement__status_success">Статус</div>
            <button class="card-agreement__button"></button>
          </div>
        </div>

        <div class="card-agreement__team">
          <h5>Меззище</h5>
          <span>г. Сочи</span>
        </div>
      </div>
    </div>

    <p>Пригласить команду</p>

    <div class="simple-input">
      <input type="text" name="teams" placeholder="Введите название команды" />
    </div>

    <p>Приглашенные команды</p>

    <button class="button button__main">Согласовать</button>
    <button class="button button__resting">Отменить</button>
  </div>
</template>

<script>
export default {
  name: 'AgreementTournament'
}
</script>

<style lang="sass" scoped>
.agreement

  h2
    margin-bottom: 24px

.card-agreement
  background-color: #fff
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
  border-radius: 4px

  &__header
    padding: 22px 24px 25px 30px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #F8FAFB

  &__title
    display: flex
    justify-content: space-between
    align-items: center

  &__img
    margin-right: 24px

  &__info

    h4
      margin-bottom: 3px

    span
      display: block
      font-family: SF Pro Display
      font-style: normal
      font-weight: 500
      font-size: 14px
      line-height: 17px
      color: #98A9BC

  &__buttons
    display: flex
    justify-content: space-between
    align-items: center

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
    background: url(../../../assets/dashboard_btn.svg) center center no-repeat

  &__btn
    padding: 0
    border: 0
    outline: none

    a
      display: block
      padding: 10px 26px 8px
      border-radius: 4px
      background: #008DFF
      color: #fff

      &:hover
        color: #30CFD0
        text-decoration: none

  &__content
    padding: 24px 30px 0 24px

  &__team
    padding: 24px 0px 30px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #F8FAFB
    border-radius: 1px

    &:first-child
      padding-top: 0px
</style>
