<template>
  <div class="container teams">
    <h1 class="text-left">Команды мои</h1>
    <team-card />
  </div>
</template>

<script>
import TeamCard from '@/components/TeamCard.vue'

export default {
  name: 'Teams',
  components: {
    TeamCard
  }
}
</script>
