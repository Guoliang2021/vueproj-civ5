<template>
  <div id="imm">
    <ETerrainPicker></ETerrainPicker>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ETerrainPicker from "@/components/ETerrainPicker.vue";
@Options({
  components: {
    ETerrainPicker,
  },
})
export default class ImmigrantProduct extends Vue {}
</script>
