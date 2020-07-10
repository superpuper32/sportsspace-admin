<template>
  <div>
    <h3>Основная информация</h3>

    <div class="settings__img">
      <span>Загрузить изображение</span>
    </div>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Иванов" />
      </div>

      <div class="settings__input">
        <label for="position">Должность</label>
        <input type="text" name="position" placeholder="Тренер" />
      </div>

      <div class="settings__input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" />
      </div>

      <div class="settings__input">
        <label for="phone">Телефон</label>
        <input type="tel" name="phone" placeholder="Введите номер телефона" />
      </div>

      <div class="settings__input">
        <label for="phone">Язык</label>
        <input type="tel" name="phone" placeholder="Русский" />
      </div>
    </form>

    <button class="button button__main">Обновить</button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
