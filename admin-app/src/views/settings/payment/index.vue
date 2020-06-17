<template>
  <div>
    <h3>Настройки оплаты</h3>

    <payment-detail />
    <payment-detail />

    <h5>История платежей</h5>

    <payment-history />
    <payment-history />

    <div class="settings__btns">
      <button class="button button__resting">Отмена</button>
      <button class="button button__main">Обновить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payment',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  components: {
    PaymentHistory: () => import('@/components/PaymentHistory'),
    PaymentDetail: () => import('@/components/PaymentDetail')
  }
}
</script>
