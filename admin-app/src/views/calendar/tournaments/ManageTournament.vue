<template>
  <section class="manage">
    <h2>Любительская Волебольная Лига 2 круга ЮВ</h2>

    <ul class="manage__teams">
      <li v-for="team in teams" class="manage__team" :key="team.index">
        <span v-bind:team="team">{{ team }}</span>
      </li>
    </ul>

    <div class="single-tour">
      <div class="singel-tour__play">
        <div class="single-tour__team"></div>
        <div class="single-tour__score">0 : 0</div>
        <div class="single-tour__team"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ManageTournament',
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

.single-tour

    &__play
        display: flex
        margin-bottom: 32px

    &__team
        width: 166px
        height: 46px
        background: #FFFFFF
        border: 1.5px dashed #BFD4E4
        box-sizing: border-box
        border-radius: 6px

    &__score
        padding: 7px
        width: 166px
        height: 32px
        text-align: center
        font-family: SF Pro Text
        font-style: normal
        font-weight: 600
        font-size: 15px
        line-height: 20px
        color: #0D9372

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
