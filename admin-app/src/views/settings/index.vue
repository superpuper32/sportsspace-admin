<template>
  <div class="settings">
    <aside class="settings__aside">
      <nav-settings />
    </aside>

    <router-view :key="key" />
    <!-- <section class="settings__content">
      <h3>Основная информация</h3>

      <div class="settings__img">Загрузить изображение</div>

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
    </section>-->
  </div>
</template>

<script>
export default {
  name: 'Settings',
  components: {
    NavSettings: () => import('@/components/NavSettings')
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
