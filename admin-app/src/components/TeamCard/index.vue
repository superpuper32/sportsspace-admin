<template>
  <div class="team-card">
    <div class="team-card__title">
      <div>
        <img src="../../assets/playground-card__avatar.svg" alt />
      </div>

      <div class="team-card__heading">
        <h4>{{ team.title }}</h4>
        <span>{{ team.address }}</span>
      </div>

      <div class="team-card__rate-info">
        <div class="team-card__status">{{ team.status }}</div>

        <div class="team-card__rate">{{ team.rate }}</div>
      </div>
    </div>

    <div class="team-card__created">
      <span>создан {{ team.created }}</span>
    </div>

    <div class="team-card__properties">
      <div class="team-card__property">
        <div class="team-card__key">Вид спорта:</div>
        <div class="team-card__value">Волейбол</div>
      </div>

      <div class="team-card__property">
        <div class="team-card__key">Капиатн:</div>
        <div class="team-card__value">Макаревич</div>
      </div>
    </div>

    <div class="team-card__buttons">
      <button class="button button__main">Управлять</button>

      <button class="button button__resting">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    team: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.team-card
  margin-bottom: 20px
  padding: 20px 16px
  display: flex
  flex-direction: column
  border: 1px solid #E8ECEF
  border-radius: 4px
  background: #FFFFFF

  &__title
    padding-bottom: 20px
    display: flex
    justify-content: space-between
    align-items: center

  &__heading
    font-family: SF Pro Display
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 21px

  &__status
    padding: 7px 10px 5px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 17px
    text-align: center
    color: #008DFF
    background: rgba(0, 141, 255, .08)
    border-radius: 4px

  &__rate
    position: relative
    margin-top: 10px
    font-family: SF Pro Display
    font-style: normal
    font-weight: 600
    font-size: 14px
    line-height: 17px
    letter-spacing: 1px
    text-align: right

    &::before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 16px
      height: 16px
      background: url(../../assets/playground-card_rate.svg) center center no-repeat
      transform: translateY(-50%)

  &__created
    margin-top: 8px

    span
      font-family: SF Pro Text
      font-style: normal
      font-weight: 500
      font-size: 11px
      line-height: 13px
      color: #98A9BC

  &__property
    margin-top: 8px
    padding: 10px 16px
    display: flex
    justify-content: space-between
    align-items: center
    background: #F8FAFB
    border-radius: 6px

  &__key
    position: relative
    padding-left: 24px
    font-family: SF Pro Text
    font-style: normal
    font-weight: 600
    font-size: 12px
    line-height: 16px
    text-transform: uppercase
    color: #485C73

    &::before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 16px
      height: 16px
      background: url(../../assets/playground-card_ball.svg) center center no-repeat
      transform: translateY(-50%)

  &__value
    font-family: SF Pro Text
    font-style: normal
    font-weight: 500
    font-size: 11px
    line-height: 13px
    text-transform: uppercase
    color: #008DFF

  &__buttons
    margin-top: 24px
    display: flex
    justify-content: space-between
</style>
