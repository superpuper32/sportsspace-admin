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

          <button class="button button__points"></button>
        </div>
      </div>

      <div class="card-agreement__content">
        <div class="team-agreement">
          <div class="team-agreement__title">
            <div class="team-agreement__img">
              <img src="../../../assets/agreement_team.svg" />
            </div>

            <div class="team-agreement__info">
              <h5>Меззище</h5>
              <span>г. Сочи</span>
            </div>

            <div class="team-agreement__info">
              <div>12 / 12</div>
              <span>Участников</span>
            </div>
          </div>

          <div class="team-agreement__buttons">
            <div class="team-agreement__status team-agreement__status_success">Статус</div>

            <button class="button button__points"></button>
          </div>
        </div>

        <div class="team-agreement">
          <div class="team-agreement__title">
            <div class="team-agreement__img">
              <img src="../../../assets/agreement_team.svg" />
            </div>

            <div class="team-agreement__info">
              <h5>Меззище</h5>
              <span>г. Сочи</span>
            </div>

            <div class="team-agreement__info">
              <div>10 / 12</div>
              <span>Участников</span>
            </div>
          </div>

          <div class="team-agreement__buttons">
            <div class="team-agreement__methods">
              <div class="team-agreement__button team-agreement__button_reject">Отклонить</div>

              <div class="team-agreement__button team-agreement__button_approve">Согласовать</div>

              <div class="team-agreement__button team-agreement__button_remove">Удалить</div>
            </div>

            <button class="button button__points"></button>
          </div>
        </div>
      </div>
    </div>

    <p>Пригласить команду</p>

    <div class="input-invite">
      <input type="text" name="teams" placeholder="Введите название команды" />

      <button class="input-invite__btn input-invite__btn_gray"></button>
    </div>

    <p>Приглашенные команды</p>

    <div class="input-invite">
      <div class="input-invite__teams">
        <div class="input-invite__team">Команда #1</div>
        <div class="input-invite__team">Команда #2</div>
      </div>

      <button class="input-invite__btn input-invite__btn_blue"></button>
    </div>

    <button class="button button__main">Согласовать</button>
    <button class="button button__resting" @click="backToTournaments">Отменить</button>
  </div>
</template>

<script>
export default {
  name: 'AgreementTournament',
  methods: {
    backToTournaments() {
      this.$router.push({ path: '/calendar/tournaments' })
    }
  }
}
</script>

<style lang="sass" scoped>
.agreement

  h2
    margin-bottom: 24px

  p
    margin-bottom: 13px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: #2C2E3F

.card-agreement
  margin-bottom: 26px
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
      font-weight: 600

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

  &__content
    padding: 24px 30px 0 24px

.team-agreement
  padding: 24px 0px 30px
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid #F8FAFB
  border-radius: 1px

  &:first-child
    padding-top: 0px

  &__title
    display: flex
    justify-content: space-between
    align-items: center

  &__img
    margin-right: 24px

  &__info
    width: 100px
    margin-right: 24px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    color: #485C73

    h5
      margin-bottom: 1px
      font-weight: normal
      font-size: 17px
      line-height: 22px

    span
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: #98A9BC

  &__buttons
    display: flex
    justify-content: space-between
    align-items: center

  &__status
    padding: 10px 42px 9px
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

  &__methods
    display: flex
    border: 1px solid #F8FAFB
    border-radius: 4px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 12px
    line-height: 14px
    text-transform: uppercase
    color: #485C73

  &__button
    position: relative
    padding: 12px 25px 10px 39px

    &_approve
      border-left: 1px solid #F8FAFB
      border-right: 1px solid #F8FAFB

    &::before
      content: ''
      position: absolute
      top: 50%
      left: 8px
      width: 20px
      height: 20px
      transform: translateY(-50%)

    &_reject::before
      background: url(../../../assets/team-agreement_reject.svg) center center no-repeat

    &_approve::before
      background: url(../../../assets/team-agreement_approve.svg) center center no-repeat

    &_remove::before
      background: url(../../../assets/team-agreement_remove.svg) center center no-repeat

.input-invite
  margin-bottom: 47px
  padding: 14px 16px 16px
  display: flex
  justify-content: space-between
  align-items: center
  background: #FFFFFF
  border: 1px solid #E8ECEF
  box-sizing: border-box
  border-radius: 4px

  input
    display: block
    width: 200px
    border: none
    outline: none
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 21px
    color: #2C2E3F

  &__btn
    width: 20px
    height: 20px
    border: none
    outline: none

    &_gray
      background: url(../../../assets/add-circle_gray.svg) center center no-repeat

    &_blue
      background: url(../../../assets/add-circle_blue.svg) center center no-repeat

  &__teams
    display: flex

  &__team
    margin-right: 16px
    padding: 10px 20px 9px
    min-width: 170px
    position: relative
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    background: #F8FAFB
    border-radius: 4px
    color: #98A9BC

    &:after
      content: ''
      position: absolute
      top: 50%
      right: 14px
      width: 12px
      height: 12px
      background: url(../../../assets/close-icon.svg) center center no-repeat
      transform: translateY(-50%)
</style>
