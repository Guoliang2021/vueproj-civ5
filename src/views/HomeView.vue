<template>
  <div class="home">
    <img class="civ5logo" alt="Civ5 logo" src="../assets/civ5logo.png" />
    <HelloWorld msg="Welcome to civ5" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    // HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.civ5logo {
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 30%;
}
</style>
