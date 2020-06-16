<template>
  <div>
    <h3>Социальные сети</h3>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">Аккаунт</label>
        <input type="text" name="name" placeholder="Facebook" />
      </div>

      <div class="settings__input">
        <label for="email">Ссылка</label>
        <input type="email" name="email" placeholder="fb.com/iotask" />
      </div>

      <div class="settings__input">
        <label for="position">Аккаунт</label>
        <input type="text" name="position" placeholder="Twitter" />
      </div>
    </form>

    <button class="main__button">Обновить</button>
  </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
