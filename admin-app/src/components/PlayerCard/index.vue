<template>
  <div class="player-card">
    <div class="player-card__info">
      <div class="player-card__img">
        <img :src="`https://sportsspace.ru/images/users/${user.id}/avatar/${user.id}.jpg`" />
      </div>

      <div>
        <h5>{{ userName }}</h5>
        {{ nickName }}
        <span>Либеро</span>
      </div>
    </div>

    <div class="player-card__link"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayerCard',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    userName() {
      return `${this.user.first_name}  ${this.user.last_name}`
    },
    nickName() {
      return `@${this.user.nickname}`
    }
  }
}
</script>

<style lang="sass" scoped>
.player-card
    display: flex
    justify-content: space-between
    align-items: center
    margin: 14px
    padding: 16px
    width: 328px
    background-color: #fff
    border-radius: 8px
    box-shadow: 0px 1px 1px rgba(119, 140, 162, 0.15)
    color: #008DFF

    &:hover
        box-shadow: 0px 2px 3px rgba(119, 140, 162, 0.15)

    h5
        margin-bottom: 1px

    span
        display: block
        font-family: SF Pro Display
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 17px
        color: #485C73

    &__info
        display: flex
        align-items: center

    &__img
        margin-right: 24px
        width: 40px
        height: 40px

        img
            width: 40px
            height: 40px
            border-radius: 50%

    &__link
        width: 24px
        height: 24px
        position: relative
        cursor: pointer

        &:before
            content: ''
            position: absolute
            top: 50%
            left: 50%
            width: 24px
            height: 24px
            background: url(../../assets/player-card_link.svg) center center no-repeat
            transform: translate(-50%, -50%)
</style>
