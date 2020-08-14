<template>
  <section>
    <div v-if="!profile">Loading ...</div>

    <div v-else class="profile">
      <div class="profile__background">
        <span>Загрузить изображение</span>
      </div>

      <div class="profile__header">
        <div class="profile__info">
          <div>
            <div class="profile__avatar">
              <div class="profile__img">
                <img :src="avatar" alt="avatar" />
              </div>
            </div>

            <div class="profile__name">{{ profile.first_name }} {{ profile.last_name }}</div>

            <div class="profile__position">{{ profile.role }}</div>

            <div class="profile__email">
              <p>
                E-mail:
                <span>{{ profile.email }}</span>
              </p>

              <p>
                Телефон:
                <span>{{ profile.mob_tel }}</span>
              </p>
            </div>

            <div class="profile__email"></div>

            <p class="profile__description">{{ profile.about }}</p>
          </div>

          <div class="profile__btns">
            <div class="profile__btn">1 Матч</div>

            <div class="profile__btn">1 Матч</div>
          </div>
        </div>

        <div class="profile__payment">
          <div class="profile__score">
            <span>{{ balance }} ₽</span>
          </div>

          <div class="profile__social">
            <ul class="profile__links">
              <li data-social="google">
                <a href="#" class="social-google"></a>
              </li>
              <li data-social="instagram">
                <a href="#" class="social-instagram"></a>
              </li>
              <li data-social="facebook">
                <a href="#" class="social-facebook"></a>
              </li>
              <li data-social="new">
                <a href="#" class="social-new"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- <h5>График занятий</h5>

      <div class="profile__cards">
        <div v-for="practice in practices" v-bind:key="practice.index">
          <dashboard-practice-card :practice="practice" />
        </div>
      </div>-->

      <h5>Команды</h5>

      <div v-if="teams" class="profile__cards">
        <div v-for="team in teams" v-bind:key="team.index">
          <dashboard-team-card v-bind:team="team" />
        </div>
      </div>

      <h5>Турниры</h5>

      <div class="profile__cards">
        <div v-for="tournament in tournaments" v-bind:key="tournament.index">
          <dashboard-tournament-card :tournament="tournament" />
        </div>
      </div>

      <h5>Площадки</h5>

      <div class="profile__cards">
        <div v-for="playground in playgrounds" v-bind:key="playground.index">
          <dashboard-playground-card :playground="playground" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileUser',
  components: {
    DashboardTournamentCard: () => import('@/components/DashboardTournamentCard'),
    DashboardTeamCard: () => import('@/components/DashboardTeamCard'),
    // DashboardPracticeCard: () => import('@/components/DashboardPracticeCard'),
    DashboardPlaygroundCard: () => import('@/components/DashboardPlaygroundCard')
  },
  props: {
    teams: {
      type: Array
    },
    tournaments: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(['profile']),
    avatar() {
      if (this.profile) {
        return `https://sportsspace.ru/images/users/${this.profile.id}/avatar/${this.profile.id}.jpeg`
      }

      return ''
    },
    balance() {
      return this.profile.balans || '0'
    },
    practices() {
      return this.profile.practice
    },
    playgrounds() {
      return this.profile.i_cap_playgrounds
    }
  },
  mounted() {
    this.$store.dispatch('profile/GET_PROFILE')
  }
}
</script>

<style lang="sass">
.profile

  &__cards
    margin-bottom: 30px

  h5
    margin-bottom: 24px
</style>
