<template>
  <div>
    <h3>Основная информация</h3>

    <div class="settings__img">
      <span>Загрузить изображение</span>
    </div>

    <form class="settings__form">
      <div class="settings__input">
        <label for="nickname">Ник</label>
        <input type="text" name="nickname" placeholder="Ник" v-model="profile.nickname" />
      </div>

      <div class="settings__input">
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Иванов" v-model="profile.first_name" />
      </div>

      <div class="settings__input">
        <label for="position">Должность</label>
        <input type="text" name="position" placeholder="Тренер" v-model="profile.role" />
      </div>

      <div class="settings__input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" v-model="profile.email" />
      </div>

      <div class="settings__input">
        <label for="phone">Телефон</label>
        <input
          type="tel"
          name="phone"
          placeholder="Введите номер телефона"
          v-model="profile.mob_tel"
        />
      </div>

      <div class="settings__input">
        <label for="phone">Язык</label>
        <input type="tel" name="phone" placeholder="Русский" v-model="profile.lang" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Main',
  model: {
    prop: 'profile',
    event: 'ultrachange'
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localSettings: null
  }),
  watch: {
    localSettings: {
      deep: true,
      handler: 'updateSettings'
    }
  },
  created() {
    this.localSettings = Object.assign({}, this.settings)
  },
  methods: {
    updateSettings() {
      this.$emit('ultrachange', Object.assign({}, this.localSettings))
    }
  }
}
</script>
