<template>
  <div>
    <h3>Основная информация</h3>

    <div class="settings__img">
      <span>Загрузить изображение</span>
    </div>

    <form class="settings__form">
      <div class="settings__input">
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Иванов" v-model="settings.name" />
      </div>

      <div class="settings__input">
        <label for="position">Должность</label>
        <input type="text" name="position" placeholder="Тренер" v-model="settings.position" />
      </div>

      <div class="settings__input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" v-model="settings.email" />
      </div>

      <div class="settings__input">
        <label for="phone">Телефон</label>
        <input
          type="tel"
          name="phone"
          placeholder="Введите номер телефона"
          v-model="settings.phone"
        />
      </div>

      <div class="settings__input">
        <label for="phone">Язык</label>
        <input type="tel" name="phone" placeholder="Русский" v-model="settings.lang" />
      </div>
    </form>

    <!-- <button class="button button__main">Обновить</button> -->
  </div>
</template>

<script>
export default {
  name: 'Main',
  model: {
    prop: 'settings',
    event: 'ultrachange'
  },
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localSettings: null
  }),
  watch: {
    // playground: { // if updates from parent need deep equals func
    //   deep: true,
    //   handler() {
    //     if (deepEqual(this.playground, this.localPlayground)) {
    //       return
    //     }
    //     this.localPlayground = Object.assign({}, this.playground)
    //   }
    // },
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
