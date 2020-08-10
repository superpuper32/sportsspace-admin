<template>
  <nav class="navbar">
    <hamburger
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <breadcrumb class="breadcrumb-container" />

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
          <img
            src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&amp;d=retro"
            alt="Avatar"
          />
        </button>

        <div v-show="isOpen" class="top-bar__avatar-menu">
          <div class="top-bar__profile">
            <div class="top-bar__avatar-img">
              <img
                src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&amp;d=retro"
                alt="Avatar"
              />
            </div>

            <div class="top-bar__user-details">
              <div class="top-bar__name">User Name</div>

              <div class="top-bar__mail">mail@sportsspace.ru</div>
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
              <li class="top-bar__link top-bar__link_log-out">Выйти</li>
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
    ...mapGetters(['sidebar'])
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
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
