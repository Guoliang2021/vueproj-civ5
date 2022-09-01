<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <img class="civ5logo" alt="Civ5 logo" src="./assets/civ5logo.png" />
  <h1>Welcome to civ5</h1>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.civ5logo {
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 30%;
}
h1 {
  font-family: "Consolas";
}
</style>
