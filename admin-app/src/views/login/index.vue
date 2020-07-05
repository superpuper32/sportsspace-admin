<template>
  <section class="login">
    <div class="login__content">
      <h1>Форма входа</h1>

      <div class="simple-input">
        <label for="name">ФИО</label>
        <input type="text" name="name" placeholder="Введите ваше имя" />
      </div>

      <div class="simple-input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" />
      </div>

      <div class="simple-input">
        <label for="password">Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль" />
      </div>

      <div class="login__btn">
        <button class="button button__main">Зарегистрироваться</button>
      </div>

      <div class="login__link">
        <span>Уже есть аккаунт?</span>
        Войти
      </div>
    </div>

    <div class="login__background">
      <div class="login__background-blackout"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="sass" scoped>
@import '../../styles/colors.sass'

.login
    height: 100vh
    display: flex

    &__content
        padding: 70px 220px 70px 150px
        width: 50%

        h1
            margin-bottom: 80px
            font-family: SF Pro Display
            font-style: normal
            font-weight: normal
            font-size: 34px
            line-height: 41px
            color: #2C2E3F

    &__background
        width: 50%
        background: url(../../assets/login_background.jpg) center center no-repeat
        background-size: cover

    &__background-blackout
        width: 100%
        height: 100%
        background: linear-gradient(180deg, #12C99B 0%, #32BF84 100%)
        opacity: .1

    &__btn
        margin-bottom: 150px

    &__link
        color: #008DFF

        span
            font-family: SF Pro Display
            font-style: normal
            font-weight: normal
            font-size: 14px
            line-height: 21px
            color: #98A9BC

.simple-input
    display: inline-block
    width: 100%
    font-size: 14px

    label
        display: block
        font-family: SF Pro Display
        font-style: normal
        font-weight: 500
        font-size: 14px
        line-height: 17px
        color: $font-black

    input
        width: 100%
        margin-bottom: 26px
        padding: 20px 0 20px 16px
        border: 1px solid #E8ECEF
        border-radius: 4px

        &::placeholder
            line-height: 21px
            color: #98a9bc
</style>
