<template>
  <div class="calendar-card">
    <div class="calendar-card__title">
      <h4>{{ title }}</h4>

      <button class="calendar-card__button"></button>
    </div>

    <div class="calendar-card__content">
      <div class="calendar-card__lessons"></div>

      <div class="calendar-card__add">
        <span>Создать {{ add }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarCard',
  props: {
    title: {
      type: String,
      required: true
    },
    add: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.calendar-card
  margin-bottom: 30px
  border-radius: 4px
  background-color: #fff
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)

  &__title
    padding: 16px 12px 10px
    display: flex
    justify-content: space-between
    align-items: center
    border-bottom: 1px solid #F8FAFB

  &__button
    width: 24px
    height: 24px
    border: 0
    background-color: transparent
    background: url(../../assets/calendar-card_button.svg) center center no-repeat

  &__content
    padding: 19px 13px
    min-height: 200px
    display: flex
    flex-direction: column
    justify-content: flex-end

  &__lessons
    width: 100%
    height: 100%

  &__add
    display: block
    width: 100%
    padding: 15px 30px
    border: 1px dashed #008DFF
    border-radius: 4px

    span
      position: relative
      margin-left: 30px
      font-family: SF Pro Display
      font-weight: 500
      font-size: 12px
      line-height: 14px
      text-transform: uppercase
      color: #008DFF

      &:before
        content: ''
        position: absolute
        top: 50%
        left: -30px
        width: 20px
        height: 20px
        background: url(../../assets/calendar-card_add.svg) center center no-repeat
        transform: translateY(-50%)
</style>
