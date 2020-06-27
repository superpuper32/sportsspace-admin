<template>
  <div class="playground-card">
    <div class="playground-card__status">
      <span>В процессе</span>
      <img
        src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&d=retro"
        alt="avatar"
      />
    </div>

    <div class="playground-card__title">
      <div>
        <h4>{{ playground.title }}</h4>
        <span>Дата создания:</span>
      </div>

      <div class="playground-card__icons">
        <img src="../../assets/tournament-card_trophy.svg" alt="logo tournament" />
        <img src="../../assets/voleyball_logo.svg" alt="logo voleyball" />
      </div>
    </div>

    <div class="playground-card__teams">
      <span>Команды</span>
    </div>

    <div class="playground-card__dates">
      <span>Дата проведения</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaygroundCard',
  props: {
    playground: {
      type: Object,
      required: true,
      deep: true
    }
  }
}
</script>

<style lang="sass" scoped>
.playground-card
    display: flex
    flex-direction: column
    border: 1px solid #E8ECEF
    background: #FFFFFF
    border-radius: 4px
</style>
