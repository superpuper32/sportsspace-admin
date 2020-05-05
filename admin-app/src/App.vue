<template>
  <div id="app">
    <div class="admin">
      <div class="admin__panel">
        <div class="admin__leftSection">
          <div class="admin__profileContainer">
            <div class="admin__avatarContainer">
              <img
                src="https://sjc5.discourse-cdn.com/codecademy/user_avatar/discuss.codecademy.com/ruronite/120/6937361_2.png"
                alt="avatar"
                class="admin__avatarImage"
              />
            </div>
            <div class="admin__userDetailsContainer">
              <div class="admin__usernamContainer">
                <h1 class="admin__userName">Владимир</h1>
              </div>
              <div data-testid="role-label" style="text-align: left;">Спортсмен</div>
            </div>
          </div>
        </div>
        <div class="admin__rightSection">
          <div class="admin__container">
            <div class="admin__count">1000 руб.</div>
            <div class="admin__label">Баланс</div>
          </div>
          <div class="admin__container">
            <div class="admin__count">36</div>
            <div class="admin__label">игр</div>
          </div>
        </div>
      </div>
    </div>
    <div id="nav">
      <router-link to="/">Занятия</router-link>|
      <router-link to="/teams">Команды</router-link>|
      <router-link to="/tournaments">Турниры</router-link>|
      <router-link to="/playgrounds">Площадки</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.admin {
  background-color: #3eb38c;

  &__panel {
    max-width: calc(1440px + 12rem);
    height: 7.125rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 6rem;
    padding-right: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    position: relative;
    color: #fff;
  }

  &__leftSection {
    height: 5rem;
    width: 80%;
    display: flex;
    z-index: 1;
  }

  &__rightSection {
    height: 5rem;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  &__profileContainer {
    display: flex;
    align-items: center;
  }

  &__avatarContainer {
    display: inline-block;

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }
  }

  &__userDetailsContainer {
    display: inline-block;
    vertical-align: top;
    margin-left: 16px;
  }

  &__usernamContainer {
    display: flex;
    align-items: center;
  }

  &__userName {
    color: #fff;
    font-family: Regular Patch, Regular Bold, Nunito Sans, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 3rem;
    margin: 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__count {
    text-align: center;
    font-size: 1.8rem;
    line-height: 2rem;
    font-weight: 700;
  }
}
</style>
