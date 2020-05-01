<template>
  <div class="teams">
    <h1>Команды</h1>
    <TeamCard />
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
