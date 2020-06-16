<template>
  <div>
    <h3>Уведомления</h3>

    <form class="settings__form">
      <div>
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Иванов" />
      </div>

      <div>
        <label for="email">Должность</label>
        <input type="email" name="email" placeholder="Введите email" />
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
  name: 'Notification'
}
</script>
