<template>
  <div id="bd-row">
    <UnitPicker></UnitPicker>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnitPicker from "@/components/UnitPicker.vue";
@Options({
  components: {
    UnitPicker,
  },
  methods: {},
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
