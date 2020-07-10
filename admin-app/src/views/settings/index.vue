<template>
  <div class="settings">
    <aside class="settings__aside">
      <!-- <nav-settings /> -->
      <nav class="settings__nav">
        <ul>
          <li
            v-for="tab in tabs"
            v-bind:key="tab.name"
            v-bind:class="[{ active: currentTab === tab }]"
            v-on:click="currentTab = tab"
          >
            <a class="settings__link">
              <i :class="`icon-${tab.name.toLowerCase()}`"></i>
              <span class="settings__title">{{ tab.title }}</span>
              <span class="settings__description">{{ tab.description }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="settings__content">
      <!-- <router-view :key="key" v-bind:settings="settings" /> -->
      <component :is="currentTab.component"></component>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

var tabs = [
  {
    name: 'Home',
    component: () => import('@/views/settings/main/index.vue'),
    title: 'Основная информация',
    description: 'Профиль фото, имя, язык'
  },
  {
    name: 'Social',
    component: () => import('@/views/settings/social/index.vue'),
    title: 'Соц. сети',
    description: 'Аккаунт, ссылка'
  },
  {
    name: 'Password',
    component: () => import('@/views/settings/password/index.vue'),
    title: 'Безопасность',
    description: 'Изменить пароль'
  },
  {
    name: 'Payment',
    component: () => import('@/views/settings/payment/index.vue'),
    title: 'Оплата',
    description: 'Способы оплаты, история платежей'
  },
  {
    name: 'Notification',
    component: () => import('@/views/settings/notification/index.vue'),
    title: 'Уведомления',
    description: 'Обновления, комментарии'
  }
]

export default {
  name: 'Settings',
  components: {
    NavSettings: () => import('@/components/NavSettings')
  },
  data: function() {
    return {
      settings: [],
      currentTab: tabs[0],
      tabs
    }
  },
  mounted() {
    this.loadProfileSettings()
  },
  computed: {
    // key() {
    //   return this.$route.path
    // },
    currentIconComponent() {
      return 'icon-' + this.tab.name.toLowerCase()
    }
  },
  methods: {
    loadProfileSettings() {
      axios
        .get('http://localhost:3004/settings/0')
        .then(response => (this.settings = response.data))
        .catch(error => console.error(error))
    }

    // currentIconComponent() {
    //   return 'icon-' + this.currentTab.toLowerCase()
    // }
  }
}
</script>
