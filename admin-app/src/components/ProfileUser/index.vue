<template>
  <section>
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

          <div class="profile__name">{{ fullName }}</div>

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
  </section>
</template>

<script>
export default {
  name: 'ProfileUser',
  props: {
    profile: Object
  },
  computed: {
    avatar() {
      if (this.profile) {
        return `https://sportsspace.ru/images/users/${this.profile.id}/avatar/${this.profile.id}.jpeg`
      }

      return ''
    },

    fullName() {
      return `${this.profile.first_name}  ${this.profile.last_name}`
    },

    balance() {
      return this.profile.balans ?? '0'
    }
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
