<template>
  <div id="app">
    <main class="main">
      <aside class="sidebar">
        <h2 class="sidebar__title">SportsSpace</h2>
        <ul class="sidebar__nav">
          <router-link tag="li" to="/" data-page="dashboard">
            <a>
              <i class="icon-dashboard"></i>
              <span>Занятия</span>
            </a>
          </router-link>

          <router-link tag="li" to="/teams" data-page="teams">
            <a>
              <i class="icon-teams"></i>
              <span>Команды</span>
            </a>
          </router-link>

          <router-link tag="li" to="/tournaments" data-page="tournaments">
            <a>
              <i class="icon-tournaments"></i>
              <span>Турниры</span>
            </a>
          </router-link>

          <router-link tag="li" to="/playgrounds" data-page="playgrounds">
            <a>
              <i class="icon-playgrounds"></i>
              <span>Площадки</span>
            </a>
          </router-link>
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
            <div class="top-bar__header-tab">
              <div class="top-bar__icon">
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
                      d="M21 6H19V15H6V17C6 17.55 6.45 18 7 18H18L22 22V7C22 6.45 21.55 6 21 6ZM17 12V3C17 2.45 16.55 2 16 2H3C2.45 2 2 2.45 2 3V17L6 13H16C16.55 13 17 12.55 17 12Z"
                      fill="#98A9BC"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="top-bar__header-tab">
              <div class="top-bar__icon">
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
                      d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                      fill="#98A9BC"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="top-bar__header-tab">
              <div class="top-bar__icon">
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
                      d="M17 10H7V12H17V10ZM19 3H18V1H16V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V8H19V19ZM14 14H7V16H14V14Z"
                      fill="#98A9BC"
                    />
                  </svg>
                </button>
              </div>
            </div>

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
