<template>
  <profile-user />
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    ProfileUser: () => import('@/components/ProfileUser/index.vue')
  }
}
</script>
