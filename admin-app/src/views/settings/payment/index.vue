<template>
  <div>
    <h3>Настройки оплаты</h3>

    <payment-detail />
    <payment-detail />

    <h5>История платежей</h5>

    <payment-history />
    <payment-history />
  </div>
</template>

<script>
export default {
  name: 'Payment',
  components: {
    PaymentHistory: () => import('@/components/PaymentHistory'),
    PaymentDetail: () => import('@/components/PaymentDetail')
  },
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
