<template>
  <div id="app">
    <main class="main">
      <aside class="sidebar">
        <h2 class="sidebar__title">SportsSpace</h2>
        <ul class="sidebar__nav">
          <li class="active">
            <router-link to="/" data-page="dashboard">
              <i class="icon-dashboard"></i>
              <span>Занятия</span>
            </router-link>
          </li>

          <li>
            <router-link to="/teams" data-page="teams">
              <i class="icon-teams"></i>
              <span>Команды</span>
            </router-link>
          </li>

          <li>
            <router-link to="/tournaments" data-page="tournaments">
              <i class="icon-tournaments"></i>
              <span>Турниры</span>
            </router-link>
          </li>

          <li>
            <router-link to="/playgrounds" data-page="playgrounds">
              <i class="icon-playgrounds"></i>
              <span>Площадки</span>
            </router-link>
          </li>
        </ul>
      </aside>

      <section class="content">
        <nav class="top-bar">
          <div class="top-bar__menu">
            <div>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                    fill="#98A9BC"
                  />
                </svg>
              </button>
            </div>
            <div>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                    fill="#98A9BC"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h3>Календарь</h3>
            </div>
          </div>

          <div class="top-bar__settings">
            <div class="top-bar__avatar">
              <div class="top-bar__img">
                <img
                  src="https://www.gravatar.com/avatar/e3c4bc11e6b5852d8709c907104ef048?s=140&amp;d=retro"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </nav>
      </section>
    </main>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2c3e50;
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
