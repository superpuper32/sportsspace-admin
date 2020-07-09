<template>
  <div class="calendar-notification">
    <div class="calendar-notification__title">{{ title }}</div>
    <button class="calendar-notification__btn">Перейти</button>
  </div>
</template>

<script>
export default {
  name: 'CalendarNotification',
  props: {
    title: String
  }
}
</script>

<style lang="sass" scoped>
.calendar-notification
    margin-bottom: 24px
    padding: 20px
    display: flex
    justify-content: space-between
    align-items: center
    border-radius: 4px
    background-color: #0D9372

    &__title
        padding-left: 35px
        position: relative
        font-family: SF Pro Text
        font-style: normal
        font-weight: 600
        font-size: 17px
        line-height: 22px
        color: #FFFFFF

        &:before
            content: ''
            position: absolute
            top: 50%
            left: 0
            width: 24px
            height: 24px
            background: url(../../assets/calendar-notification.svg) center center no-repeat
            transform: translateY(-50%)

    &__btn
        padding: 10px 25px 8px
        background: #FFFFFF
        border: 1px solid #E8ECEF
        border-radius: 4px
        font-family: SF Pro Display
        font-style: normal
        font-weight: 500
        font-size: 12px
        line-height: 14px
        text-align: center
        text-transform: uppercase
        color: #0D9372
        outline: none
</style>
