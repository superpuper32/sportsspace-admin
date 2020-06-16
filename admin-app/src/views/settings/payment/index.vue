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

    <button class="main__button">Обновить</button>
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
  }
}
</script>
