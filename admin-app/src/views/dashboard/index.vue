<template>
  <profile />
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    Profile: () => import('@/components/Profile/index.vue')
  }
}
</script>
