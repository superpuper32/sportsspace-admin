<template>
  <div>
    Распределение команд рандомно по таблице
    <div class="round-robin">
      <div class="round-robin__header">
        <div class="round-robin__header-cell"></div>
        <div v-for="team in teams" class="round-robin__header-cell" :key="team.index">
          <span v-bind:team="team">{{ team }}</span>
        </div>
      </div>

      <div class="round-robin__row">
        <div class="round-robin__cell">
          <span>Команда A</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundRobin',
  data: () => ({
    teams: ['Команда A', 'Команда B', 'Команда C', 'Команда D', 'Команда E', 'Команда F']
  })
}
</script>

<style lang="sass" scoped>
.round-robin

    &__header
        display: grid
        grid-template-columns: 64px repeat(9, 180px)

    &__row
        display: grid
        grid-template: 180px / 64px repeat(9, 180px)

    &__header-cell
        padding: 24px
        font-family: SF Pro Display
        font-style: normal
        font-weight: bold
        font-size: 10px
        line-height: 16px
        text-align: center
        letter-spacing: -0.3px
        text-transform: uppercase
        border: 1px solid #485C73
        background: #FFFFFF
        color: #2C2E3F

    &__cell
        border: 1px solid #485C73
        background: #FFFFFF

        span
            display: block
            transform: rotate(-90deg)
</style>
