<template>
  <div class="payment-detail">
    <div class="payment-detail__title">Способ оплаты</div>

    <div class="payment-detail__info">MasterCard ending in 4078, exp: 08/2020</div>

    <button class="payment-detail__btn">Обновить</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentDetail'
}
</script>

<style lang="sass" scoped>
.payment-detail
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 10px
    padding: 24px 0
    border-bottom: 1px solid #E8ECEF
    color: #252631
    font-style: normal
    font-weight: normal

    &__title
        font-size: 14px
        line-height: 21px

    &__info
        font-size: 14px
        line-height: 21px
        text-align: right

    &__btn
        border: none
        background-color: transparent
        color: #008dff
</style>
