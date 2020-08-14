<template>
  <div class="tournament-card">
    <div class="tournament-card__left">
      <div class="tournament-card__title">
        <div class="tournament-card__img">
          <img src="../../assets/tournament_icon.svg" alt="avatar" />
        </div>

        <div>
          <h4>{{ tournament.name }}</h4>

          <span>Дата создания: {{ createdAt }}</span>

          <p>
            Положение о проведении соревнований по классическому волейболу среди любительских
            мужских (смешанных) и женских команд в рамках Любительской Волейбольной Лиги Юго-Востока
            Московской области (ЛВЛ ЮВ МО).
          </p>
        </div>
      </div>

      <div class="tournament-card__status">
        <span>В процессе</span>

        <div class="tournament-card__buttons">
          <router-link
            tag="button"
            :to="`/calendar/tournaments/edit/${tournament.id}`"
            class="tournament-card__settings"
          />

          <router-link
            tag="button"
            :to="`/calendar/tournaments/agreement/${tournament.id}`"
            class="button button__blue"
          >
            <a>Согласовать</a>
          </router-link>
        </div>
      </div>
    </div>

    <div class="tournament-card__info">
      <div class="tournament-card__place">
        <span>Место проведения турнира</span>
        Спортивный комплекс - СК «Прометей»
        <br />
        {{ tournament.address }}
      </div>

      <div class="tournament-card__team">
        <span>Команда</span>
        Команда «Зенит»
      </div>

      <div class="tournament-card__date">
        <span>Информация</span>
        {{ dateTour }}
        <br />
        Начало в {{ timeTour }}
      </div>

      <div class="tournament-card__price">
        <span>Цена</span>
        {{ priceTour }} ₽
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
      required: true
    }
  },
  computed: {
    createdAt() {
      return this.tournament.created_at.slice(0, 10)
    },
    priceTour() {
      if (this.tournament.price) {
        return this.tournament.price
      }
      return '0'
    },
    dateTour() {
      return this.tournament.data_and_time.slice(0, 10)
    },
    timeTour() {
      return this.tournament.data_and_time.slice(11, 16)
    }
  }
}
</script>

<style lang="sass" scoped>
.tournament-card
  margin-bottom: 12px
  display: flex
  border: 1px solid #E8ECEF
  background: #FFFFFF
  border-radius: 4px

  &__left
    border-right: 1px solid #F8FAFB

  &__title
    padding: 30px 24px 30px
    display: flex
    border-bottom: 1px solid #F8FAFB

    h4
      margin-bottom: 8px
      font-family: SF Pro Display
      font-style: normal
      font-weight: 600
      font-size: 22px
      line-height: 27px
      color: #2C2E3F

    span
      margin-bottom: 8px
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      color: #98A9BC

    p
      max-width: 500px
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      text-align: justify
      color: #485C73

  &__img
    margin-right: 30px

    img
      width: 128px
      height: 128px

  &__status
    padding: 48px 24px 38px 30px
    display: flex
    justify-content: space-between
    align-items: center

    span
      margin-left: 30px
      display: block
      position: relative
      font-family: SF Pro Display
      font-style: normal
      font-weight: normal
      font-size: 14px
      line-height: 21px
      text-align: right
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

  &__buttons
    display: flex
    justify-content: flex-end
    align-items: center

  &__settings
    margin-right: 12px
    width: 32px
    height: 32px
    background: url(../../assets/button_settings.svg) center center no-repeat
    border: 1px dashed #F8FAFB
    border-radius: 50%
    outline: none

  &__info
    padding: 30px 33px 38px 24px
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 21px
    color: #2C2E3F

    span
      margin-bottom: 4px
      display: block
      font-family: SF Pro Text
      font-style: normal
      font-weight: normal
      font-size: 11px
      line-height: 13px
      color: #98A9BC

    div
      margin-bottom: 20px
</style>
