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

        <div class="main-content">
          <router-view />
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
