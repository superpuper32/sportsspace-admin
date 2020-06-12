<template>
  <div class="profile">
    <div class="profile__background">
      <div>Загрузить изображение</div>
    </div>

    <div class="profile__header">
      <div class="profile__info">
        <div class="profile__name">User Name</div>
        <div class="profile__position">Должность</div>
        <div
          class="profile__description"
        >Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции играет важную роль в формировании модели развития</div>
      </div>

      <div class="profile__payment">
        <div class="profile__score">
          <span>500 ₽</span>
        </div>

        <div class="profile__links">
          <ul>
            <li>Google</li>
            <li>Instagram</li>
            <li>facebook</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="profile__activity">
      <h3>Турниры</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>
