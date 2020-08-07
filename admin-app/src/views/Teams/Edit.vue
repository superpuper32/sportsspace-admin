<template>
  <section class="team-info">
    <div v-if="!team">
      Loading>>>
    </div>

    <div class="team-info__header">
      <div v-if="haveImg" class="team-info__logo">
        <img :src="imageUrl" />
      </div>

      <div v-else class="team-info__logo">
        <img src="../../assets/avatar_team.svg" alt />
      </div>

      <div>
        <h3>Кoманда {{ team.name }}</h3>
        Адрес игровой площадки:
        <span>{{ team.address }}</span>
      </div>
    </div>

    <div class="team-info__players">
      <div v-for="user in team.users" v-bind:key="user.index">
        <div :user="user" class="player-card">
          <div class="player-card__img">
            <img :src="`https://sportsspace.ru/images/users/${user.id}/avatar/${user.id}.jpg`" />
          </div>

          <div>
            <h5>{{ user.first_name }} {{ user.last_name }}</h5>
            @{{ user.nickname }}
            <span>Либеро</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditAllTeam',
  data: () => ({
    team: null,
    restUrl: 'https://devtest.sportsspace.ru/api/v1/commands/'
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return `${this.restUrl}${this.id}.json`
    },
    haveImg() {
      return this.team.avatar_file_name !== null
    },
    imageUrl() {
      const imageUrl = `https://sportsspace.ru/images/command/${this.team.id}/logo/${this.team.id}`

      return this.team.avatar_file_name.split('.')[1] === 'jpeg'
        ? `${imageUrl}.jpeg`
        : `${imageUrl}.jpg`
    }
  },
  mounted() {
    this.loadTeam()
  },
  methods: {
    loadTeam() {
      axios
        .get(this.url)
        .then(response => (this.team = response.data))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="sass" scoped>
.team-info

    &__header
        display: flex
        margin-bottom: 30px
        padding: 20px 28px 75px 24px
        background-color: #ffffff
        box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12)
        border-radius: 8px

    &__logo
        padding-right: 26px

        img
            width: 100px
            height: 100px
            border-radius: 50%

    &__players
        display: flex
        flex-wrap: wrap

.player-card
    display: flex
    align-items: center
    margin-right: 30px
    margin-bottom: 30px
    padding: 16px
    width: 362px
    background-color: #fff
    border-radius: 8px
    filter: drop-shadow(0px 1px 1px rgba(119, 140, 162, 0.15))
    color: #008DFF

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

    &__img
        margin-right: 24px
        width: 40px
        height: 40px

        img
            width: 40px
            height: 40px
            border-radius: 50%
</style>
