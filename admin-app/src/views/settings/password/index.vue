<template>
  <div>
    <h3>Безопасность</h3>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">Изменить пароль</label>
        <input type="text" name="name" placeholder="Введите пароль" />
      </div>

      <div class="settings__input">
        <label for="email">Новый пароль</label>
        <input type="email" name="email" placeholder="Введите новый пароль" />
      </div>
    </form>

    <h5>Вопросы безопасности</h5>

    <form class="settings__form">
      <div class="settings__input">
        <label for="position">Вопрос 1</label>
        <input type="text" name="position" placeholder="Как зовут твоего друга" />
      </div>

      <div class="settings__input">
        <label for="position">Ответ</label>
        <input type="text" name="position" placeholder="Антон" />
      </div>

      <div class="settings__input">
        <label for="position">Вопрос 2</label>
        <input type="text" name="position" placeholder="Пожалуйста, выберите вопрос" />
      </div>

      <div class="settings__input">
        <label for="position">Ответ</label>
        <input type="text" name="position" placeholder="Введите ответ" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Password',
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
