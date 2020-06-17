<template>
  <div>
    <h3>Настройки оплаты</h3>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Иванов" />
      </div>

      <div class="settings__input">
        <label for="email">Должность</label>
        <input type="email" name="email" placeholder="Введите email" />
      </div>

      <div class="settings__input">
        <label for="position">Должность</label>
        <input type="text" name="position" placeholder="Тренер" />
      </div>
    </form>

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
    PaymentHistory: () => import('@/components/PaymentHistory')
  }
}
</script>
