<template>
  <section class="manage">
    <h2>Любительская Волебольная Лига 2 круга ЮВ</h2>

    <ul class="manage__teams">
      <li v-for="team in teams" class="manage__team" :key="team.index">
        <span v-bind:team="team">{{ team }}</span>
      </li>
    </ul>

    <round-robin />

    <tournament-panel />
  </section>
</template>

<script>
export default {
  name: 'ManageTournament',
  components: {
    TournamentPanel: () => import('@/components/TournamentPanel'),
    // SingleIllumination: () => import('@/components/SingleIllumination'),
    RoundRobin: () => import('@/components/RoundRobin')
  },
  data: () => ({
    teams: [
      'Команда A',
      'Команда B',
      'Команда C',
      'Команда D',
      'Команда E',
      'Команда F',
      'Команда G',
      'Команда H'
    ]
  })
}
</script>

<style lang="sass" scoped>
.manage

  h2
    margin-bottom: 24px

  &__teams
    margin-right: 320px
    margin-bottom: 50px
    padding-left: 0px
    display: flex
    flex-wrap: wrap

  &__team
    margin: 0px 24px 24px 0px
    min-width: 200px
      // border: 1.5px dashed #BFD4E4
    border-radius: 6px
    list-style: none

    span
      box-sizing: border-box
      display: block
      padding: 12px 10px 12px 8px
      width: 100%
      font-family: SF Pro Text
      font-style: normal
      font-weight: 600
      font-size: 17px
      line-height: 22px
      color: #485C73
      background: #FFFFFF
      border: 1.5px solid #BFD4E4
      border-radius: 6px
      cursor: grab
</style>
