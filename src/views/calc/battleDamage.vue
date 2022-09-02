<template>
  <div id="bd-row">
    <GSelect></GSelect>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GSelect from "@/components/GSelect.vue";

@Options({
  components: {
    GSelect,
  },
})
export default class BattleDamage extends Vue {}
</script>

<style lang="scss">
#bd-row {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
