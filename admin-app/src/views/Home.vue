<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TeamCard msg="Создание" />
  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'

export default {
  name: 'Home',
  components: {
    TeamCard
  }
}
</script>
