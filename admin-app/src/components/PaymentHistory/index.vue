<template>
  <div class="payment-history">
    <div class="payment-history__date">20 May 2020</div>

    <div class="payment-history__title">Занятие с тренером</div>

    <div class="payment-history__price">500 руб</div>

    <button class="payment-history__btn">Выставленный счет</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentHistory'
}
</script>

<style lang="sass" scoped>
.payment-history
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px
  padding: 20px 25px
  border: 1px solid #E8ECEF
  border-radius: 4px
  color: #2C2E3F

  &__date
    position: relative
    padding-left: 26px
    font-weight: 500
    font-size: 14px
    line-height: 17px

    &:before
      content: ''
      position: absolute
      top: 50%
      left: 0
      width: 18px
      height: 18px
      background: url(../../assets/payment_date.svg) center center no-repeat
      transform: translateY(-50%)

  &__title
    font-weight: normal
    font-size: 15px
    line-height: 20px

  &__price
    font-weight: 600
    font-size: 14px
    line-height: 17px
    letter-spacing: 1px
    text-transform: uppercase

  &__btn
    padding: 10px 20px
    border: none
    border-radius: 4px
    background-color: rgba(0, 140, 255, 0.08)
    font-weight: 500
    font-size: 14px
    line-height: 17px
    color: #008DFF
</style>
