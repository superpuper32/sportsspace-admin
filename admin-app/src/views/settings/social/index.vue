<template>
  <div>
    <h3>Социальные сети</h3>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">Аккаунт</label>
        <input type="text" name="name" placeholder="Skype" />
      </div>

      <div class="settings__input">
        <label for="email">Ссылка</label>
        <input type="email" name="email" placeholder="skype.com/iotask" v-model="profile.skype" />
      </div>

      <div class="settings__input">
        <label for="position">Аккаунт</label>
        <input type="text" name="position" placeholder="Twitter" />
      </div>

      <div class="settings__input">
        <label for="email">Ссылка</label>
        <input type="email" name="email" placeholder="twitter.com/iotask" v-model="profile.twitter" />
      </div>

      <div class="settings__input">
        <label for="position">Аккаунт</label>
        <input type="text" name="position" placeholder="Vk" />
      </div>

      <div class="settings__input">
        <label for="email">Ссылка</label>
        <input type="email" name="email" placeholder="vk.com/iotask" v-model="profile.vk" />
      </div>
    </form>

    <div class="settings__add">
      <button class="button button__add"></button>
      <span>Добавить</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  computed: {
    socialLink() {
      if (this.profile.skype) {
        return 'skype'
      }
      return ''
    }
  }
}
</script>
