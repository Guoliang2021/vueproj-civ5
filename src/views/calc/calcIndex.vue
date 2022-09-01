<template>
  <nav>
    <router-link to="/calc/battleDamage">战斗伤害计算</router-link> |
    <router-link to="/calc/immigrantProduct">移民溢出锤计算</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
nav {
  padding: 30px;
}
</style>
