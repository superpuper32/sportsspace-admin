<template>
  <div>
    <h3>Уведомления</h3>

    <settings-notification title="Обновления" />
    <settings-notification title="Комментарии" />
    <settings-notification title="Уведомления" />
  </div>
</template>

<script>
export default {
  name: 'Notification',
  components: {
    SettingsNotification: () => import('@/components/SettingsNotification')
  },
  props: {
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
