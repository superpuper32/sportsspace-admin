<template>
  <section class="manage">
    <h2>Любительская Волебольная Лига 2 круга ЮВ</h2>

    <div class="manage__teams">
      <div class="manage__team">
        <div class="manage__number">1</div>
        Команда B
      </div>

      <div class="manage__team">Команда C</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ManageTournament'
}
</script>

<style lang="sass" scoped>
.manage

    &__teams
        display: flex

    &__team
        padding: 12px 10px 12px 8px
        margin-right: 24px
        display: flex
        min-width: 200px
        font-family: SF Pro Text
        font-style: normal
        font-weight: 600
        font-size: 17px
        line-height: 22px
        color: #485C73
        border: 1.5px solid #BFD4E4
        border-radius: 6px

    &__number
        margin-right: 10px
        padding: 4px 10px
        font-family: SF Pro Display
        font-style: normal
        font-weight: bold
        font-size: 10px
        line-height: 16px
        letter-spacing: -0.3px
        background: #66C109
        border: 1.5px solid rgba(78, 154, 0, 0.7)
        border-radius: 6px
        color: #FFFFFF
</style>
