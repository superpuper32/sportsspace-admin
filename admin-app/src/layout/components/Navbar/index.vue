<template>
  <nav class="navbar">
    <div class="navbar__menu">
      <hamburger
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />

      <div class="navbar__add">
        <button></button>
      </div>

      <breadcrumb class="breadcrumb-container" />
    </div>

    <div class="top-bar__settings">
      <input-search />

      <div class="top-bar__message">
        <button></button>
      </div>

      <div class="top-bar__notification">
        <button></button>
      </div>

      <div class="top-bar__schedule">
        <button></button>
      </div>

      <div class="top-bar__avatar">
        <button @click="toggle" class="top-bar__img">
          <img :src="avatar" alt="Avatar" />
        </button>

        <div v-show="isOpen" class="top-bar__avatar-menu">
          <div class="top-bar__profile">
            <div class="top-bar__avatar-img">
              <img :src="avatar" alt="Avatar" />
            </div>

            <div class="top-bar__user-details">
              <div class="top-bar__name">{{ fullName }}</div>

              <div class="top-bar__mail">{{ emailUser }}</div>
            </div>
          </div>

          <div class="top-bar__links">
            <ul>
              <li class="top-bar__link top-bar__link_profile" @click="toggle">
                <router-link to="/">Ваш профиль</router-link>
              </li>

              <li class="top-bar__link top-bar__link_settings" @click="toggle">
                <router-link to="/settings">Настройки</router-link>
              </li>
              <li class="top-bar__link top-bar__link_log-out">
                <a>Выйти</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  name: 'NavBar',
  components: {
    InputSearch: () => import('@/layout/components/NavBar/InputSearch.vue'),
    Breadcrumb,
    Hamburger
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters(['sidebar', 'profile']),
    avatar() {
      if (this.profile) {
        return `https://sportsspace.ru/images/users/${this.profile.id}/avatar/${this.profile.id}.jpeg`
      }

      return ''
    },
    fullName() {
      if (this.profile) {
        return `${this.profile.first_name}  ${this.profile.last_name}`
      }
      return ''
    },
    emailUser() {
      if (this.profile) {
        return this.profile.email
      }
      return ''
    }
  },
  mounted() {
    this.$store.dispatch('profile/GET_PROFILE')
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0px 24px;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0px 2px 16px rgba(153, 155, 168, 0.12);
  z-index: 500;

  &__menu {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      display: flex;
      align-items: center;
      height: 24px;
      outline: none;
      cursor: pointer;
    }
  }

  &__add {
    margin-right: 12px;

    button {
      width: 24px;
      height: 24px;
      border: 0;
      outline: none;
      background-color: transparent;
      background: url(../../../assets/top-bar_add.svg) center center no-repeat;
    }

    @media (max-width: 540px) {
      display: none;
    }
  }

  .hamburger-container {
    margin-right: 20px;
    height: 100%;
    float: left;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .breadcrumb-container {
    display: flex;
    align-items: center;
    line-height: 24px !important;
    float: left;
  }
}
</style>
