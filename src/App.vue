<template>
  <nav>
    <router-link to="/">主页</router-link> |
    <router-link to="/calc">计算器</router-link> |
    <!-- <router-link to="/calc">资料库</router-link> -->
  </nav>
  <img class="civ5logo" alt="Civ5 logo" src="./assets/civ5logo.png" />
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

    &.router-link-active {
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
</style>
