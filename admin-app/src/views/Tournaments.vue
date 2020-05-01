<template>
  <div class="practice">
    <h1>Мои Турниры</h1>
    <TournamentCard />
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
