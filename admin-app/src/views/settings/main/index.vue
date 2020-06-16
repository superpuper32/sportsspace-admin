<template>
  <div>
    <h3>Основная информация</h3>

    <div class="settings__img">Загрузить изображение</div>

    <form class="settings__form">
      <div>
        <label for="name">{{ settings.name }}</label>
        <input type="text" name="name" placeholder="Иванов" />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" />
      </div>

      <div>
        <label for="phone">Телефон</label>
        <input type="tel" name="phone" placeholder="Введите номер телефона" />
      </div>

      <div>
        <label for="position">Должность</label>
        <input type="text" name="position" placeholder="Тренер" />
      </div>
    </form>

    <button class="main__button">Обновить</button>
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
