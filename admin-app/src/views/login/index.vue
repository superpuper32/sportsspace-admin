<template>
  <section class="login">
    <div v-if="registered" class="login__content">
      <h1>Регистрация</h1>

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

      <label class="simple-checkbox">
        Принять политику
        <input type="checkbox" />
        <span class="checkmark"></span>
      </label>

      <div class="login__btn">
        <button class="button button__login-main">Зарегистрироваться</button>
      </div>

      <div class="login__line">
        <div></div>
        Или
        <div></div>
      </div>

      <div class="login__btns">
        <div>
          <button class="button button__facebook">Facebook</button>
        </div>

        <div>
          <button class="button button__twitter">Twitter</button>
        </div>

        <div>
          <button class="button button__google">Google</button>
        </div>
      </div>

      <div class="login__link">
        <span>Уже есть аккаунт?</span>
        <a @click="toggleButton">Войти</a>
      </div>
    </div>

    <div v-else class="login__content">
      <h1>Форма входа</h1>

      <div class="simple-input">
        <label for="email">Email</label>
        <input type="email" name="email" placeholder="Введите email" />
      </div>

      <div class="simple-input">
        <label for="password">Пароль</label>
        <input type="password" name="password" placeholder="Введите пароль" />
      </div>

      <div class="login__flex">
        <label class="simple-checkbox">
          Запомнить пароль
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>

        <div class="login__link">
          <a>Восстановить пароль</a>
        </div>
      </div>

      <div class="login__btn">
        <button class="button button__login-main">Войти</button>
      </div>

      <div class="login__line">
        <div></div>
        Или
        <div></div>
      </div>

      <div class="login__btns">
        <div>
          <button class="button button__facebook">Facebook</button>
        </div>

        <div>
          <button class="button button__twitter">Twitter</button>
        </div>

        <div>
          <button class="button button__google">Google</button>
        </div>
      </div>

      <div class="login__link">
        <span>Нет аккаунта?</span>
        <a @click="toggleButton">Зарегистрироваться</a>
      </div>
    </div>

    <div class="login__background">
      <div class="login__background-blackout"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    registered: true
  }),
  methods: {
    toggleButton() {
      this.registered = !this.registered
    }
  }
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

    &__flex
        display: flex
        justify-content: space-between

    &__background
        width: 50%
        background: url(../../assets/login_background.jpg) center center no-repeat
        background-size: cover

    &__background-blackout
        width: 100%
        height: 100%
        background: linear-gradient(180deg, #12C99B 0%, #32BF84 100%)
        opacity: .3

    &__line
        position: relative
        padding: 30px 0
        text-align: center
        color: #98A9BC

        &:before
            content: ''
            position: absolute
            top: 50%
            left: 50px
            width: 110px
            padding-top: 1px
            border-top: 1px solid #98A9BC

        &:after
            content: ''
            position: absolute
            top: 50%
            right: 50px
            width: 110px
            padding-top: 1px
            border-top: 1px solid #98A9BC

    &__btns
        margin-bottom: 150px
        display: flex
        justify-content: space-between

        div
            width: 31%

    &__link
        font-family: SF Pro Display
        font-style: normal
        font-weight: normal
        font-size: 14px
        line-height: 21px

        span
            color: #98A9BC

        a
            margin-left: 8px
            color: #008DFF
            cursor: pointer

            &:hover
                border-bottom: 1px solid #008DFF

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

.simple-checkbox
    margin-bottom: 26px
    padding-left: 35px
    display: block
    position: relative
    font-family: SF Pro Display
    font-style: normal
    font-weight: 500
    font-size: 14px
    line-height: 20px
    color: #485C73
    cursor: pointer
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

    input
        position: absolute
        opacity: 0
        cursor: pointer
        height: 0
        width: 0

    input:checked ~ .checkmark
        background-color: #008DFF
        border-radius: 2px

        &:after
            display: block

    .checkmark:after
        top: 50%
        left: 2px
        width: 16px
        height: 16px
        background: url(../../assets/checkmark.svg) center center no-repeat
        transform: translateY(-50%)

.checkmark
    position: absolute
    top: 0
    left: 0
    height: 20px
    width: 20px
    background-color: #E8ECEF
    border-radius: 2px
    opacity: .9

    &:after
        content: ""
        position: absolute
        display: none
</style>
