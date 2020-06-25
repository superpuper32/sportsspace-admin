<template>
  <nav class="top-bar">
    <div class="top-bar__menu">
      <div class="top-bar__hamburger">
        <button></button>
      </div>

      <div class="top-bar__add">
        <button></button>
      </div>

      <div class="top-bar__title">
        <h3>Календарь</h3>
      </div>
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
export default {
  name: 'NavBar',
  components: {
    InputSearch: () => import('@/layout/components/NavBar/InputSearch.vue')
  },
  data: function() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
