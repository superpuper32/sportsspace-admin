<template>
  <div>
    <h3>Безопасность</h3>

    <form class="settings__form">
      <div>
        <label for="name">Изменить пароль</label>
        <input type="text" name="name" placeholder="Введите пароль" />
      </div>

      <div>
        <label for="email">Новый пароль</label>
        <input type="email" name="email" placeholder="Введите новый пароль" />
      </div>

      <div>
        <label for="position">Вопрос 1</label>
        <input type="text" name="position" placeholder="Как зовут твоего друга" />
      </div>
    </form>

    <button class="main__button">Обновить</button>
  </div>
</template>

<script>
export default {
  name: 'Password'
}
</script>
