<template>
  <div class="settings">
    <aside class="settings__aside">
      <nav class="settings__nav">
        <ul>
          <li>
            <a href="#" class="settings__link settings__link_active">
              <i class="icon-main"></i>
              <span class="settings__title">Основная информация</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>

          <li>
            <a href="#" class="settings__link">
              <i class="icon-social"></i>
              <span class="settings__title">Соц. сети</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>

          <li>
            <a href="#" class="settings__link">
              <i class="icon-password"></i>
              <span class="settings__title">Безопасность</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>

          <li>
            <a href="#" class="settings__link">
              <i class="icon-payment"></i>
              <span class="settings__title">Оплата</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>

          <li>
            <a href="#" class="settings__link">
              <i class="icon-notification"></i>
              <span class="settings__title">Уведомления</span>
              <span class="settings__description">Профиль фото, имя, язык</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <section class="settings__content">
      <h3>Основная информация</h3>

      <div class="settings__img">Загрузить изображение</div>

      <form class="settings__form">
        <div>
          <label for="name">ФИО</label>
          <input type="text" name="name" placeholder="Иванов" />
        </div>

        <div>
          <label for="email">Должность</label>
          <input type="email" name="email" placeholder="Введите email" />
        </div>

        <div>
          <label for="position">Должность</label>
          <input type="text" name="position" placeholder="Тренер" />
        </div>
      </form>

      <button class="main__button">Обновить</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>
