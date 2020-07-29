<template>
  <section class="manage">
    <h2>Любительская Волебольная Лига 2 круга ЮВ</h2>

    <ul class="manage__teams">
      <li v-for="team in teams" class="manage__team" :key="team.index">
        <span v-bind:team="team">{{ team }}</span>
      </li>
    </ul>

    <div class="single-tour">
      <div class="single-tour__round">
        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_green">1</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_green">1</div>
          </div>
        </div>

        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_red">2</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_red">2</div>
          </div>
        </div>

        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_orange">3</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_orange">3</div>
          </div>
        </div>

        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_yellow">4</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_yellow">4</div>
          </div>
        </div>
      </div>

      <div class="single-tour__round">
        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_pink">5</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_pink">5</div>
          </div>
        </div>

        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_violet">6</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_violet">6</div>
          </div>
        </div>
      </div>

      <div class="single-tour__round">
        <div class="single-tour__play">
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_pink">7</div>
          </div>
          <div class="single-tour__score">0 : 0</div>
          <div class="single-tour__team">
            <div class="single-tour__number single-tour__number_pink">7</div>
          </div>
        </div>
      </div>

      <div class="single-tour__winner">
        <span>Команда</span>
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
    display: flex

    &__round
        display: flex
        flex-direction: column
        justify-content: space-around

    &__play
        margin-right: 40px
        margin-bottom: 32px

    &__team
        padding: 8px
        display: flex
        align-items: center
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
        display: inline-block
        margin-right: 10px
        padding: 4px 10px
        font-family: SF Pro Display
        font-style: normal
        font-weight: bold
        font-size: 10px
        line-height: 16px
        letter-spacing: -0.3px
        border-radius: 6px
        color: #FFFFFF

        &_green
            background: #66C109
            border: 1.5px solid rgba(78, 154, 0, 0.7)

        &_red
            background: #F64662
            border: 1.5px solid rgba(228, 46, 75, 0.7)

        &_orange
            background: #FF905F
            border: 1.5px solid rgba(255, 81, 35, 0.7)

        &_yellow
            background: #FFCA32
            border: 1.5px solid rgba(255, 152, 0, 0.7)

        &_violet
            background: #9B8AE6
            border: 1.5px solid rgba(94, 74, 207, 0.7)

        &_pink
            background: #EC7FD3
            border: 1.5px solid rgba(218, 63, 174, 0.7)

    &__winner
        margin-bottom: 32px
        display: flex
        align-items: center

        span
            padding: 18px 12px 18px 63px
            position: relative
            background: #E8ECEF
            border: 1.5px solid #BFD4E4
            box-sizing: border-box
            border-radius: 6px
            font-family: SF Pro Text
            font-style: normal
            font-weight: 600
            font-size: 17px
            line-height: 22px
            text-align: center
            color: #BFD4E4

            &:before
                content: ''
                position: absolute
                top: 50%
                left: 12px
                width: 41px
                height: 35px
                background: url(../../../assets/winner-volleyball.svg) center center no-repeat
                transform: translateY(-50%)
</style>
