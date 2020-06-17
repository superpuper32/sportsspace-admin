<template>
  <div>
    <h3>Уведомления</h3>

    <settings-notification />
    <settings-notification />
    <settings-notification />

    <div class="settings__btns">
      <button class="button button__resting">Отмена</button>
      <button class="button button__main">Обновить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    settings: {
      type: Object,
      required: true
    }
  },
  components: {
    SettingsNotification: () => import('@/components/SettingsNotification')
  }
}
</script>
