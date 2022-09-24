<template>
  <EUnitPicker @unitChanged="onUnitChanged"></EUnitPicker>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EUnitPicker from "@/components/EUnitPicker.vue";

@Options({
  components: {
    EUnitPicker,
  },
})
export default class ImmigrantProduct extends Vue {
  onUnitChanged(unitId: number) {
    console.log(__filename, "unitChanged = ", unitId);
  }
}
</script>
