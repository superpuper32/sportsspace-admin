<template>
  <nav class="settings__nav">
    <ul>
      <router-link tag="li" to="/settings/main" data-page="/settings/main">
        <a class="settings__link settings__link_active">
          <i class="icon-main"></i>
          <span class="settings__title">Основная информация</span>
          <span class="settings__description">Профиль фото, имя, язык</span>
        </a>
      </router-link>

      <router-link tag="li" to="/settings/social" data-page="/settings/social">
        <a class="settings__link">
          <i class="icon-social"></i>
          <span class="settings__title">Соц. сети</span>
          <span class="settings__description">Профиль фото, имя, язык</span>
        </a>
      </router-link>

      <router-link tag="li" to="/settings/password" data-page="/settings/password">
        <a class="settings__link">
          <i class="icon-password"></i>
          <span class="settings__title">Безопасность</span>
          <span class="settings__description">Профиль фото, имя, язык</span>
        </a>
      </router-link>

      <router-link tag="li" to="/settings/payment" data-page="/settings/payment">
        <a class="settings__link">
          <i class="icon-payment"></i>
          <span class="settings__title">Оплата</span>
          <span class="settings__description">Профиль фото, имя, язык</span>
        </a>
      </router-link>

      <router-link tag="li" to="/settings/notification" data-page="/settings/notification">
        <a class="settings__link">
          <i class="icon-notification"></i>
          <span class="settings__title">Уведомления</span>
          <span class="settings__description">Профиль фото, имя, язык</span>
        </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavSettings'
}
</script>
