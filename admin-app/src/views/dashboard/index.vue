<template>
  <profile-user :profile="profile" />
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dashboard',
  components: {
    ProfileUser: () => import('@/components/ProfileUser/index.vue')
  },
  data: function() {
    return {
      profile: null
    }
  },
  mounted() {
    this.loadProfile()
  },
  methods: {
    loadProfile() {
      axios
        .get('http://localhost:3004/profile/0')
        .then(response => (this.profile = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>
