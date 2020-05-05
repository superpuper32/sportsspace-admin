<template>
  <div class="container practice">
    <h1 class="text-left">Мои Турниры</h1>
    <tournament-card />
  </div>
</template>

<script>
import TournamentCard from '@/components/TournamentCard.vue'

export default {
  name: 'Tournaments',
  components: {
    TournamentCard
  }
}
</script>
