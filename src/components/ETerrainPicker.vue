<template>
  <div>
    <el-select
      v-model="value"
      @change="handleChange"
      placeholder="平地"
      :disabled="disable"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ETerrainPickerOption } from "@/types/commonType";
import { eTerrainType, terrainEnum2Info } from "@/staticData/terrain";
@Options({
  props: {
    disable: Boolean,
  },
})
export default class ETerrainPicker extends Vue {
  options!: ETerrainPickerOption[];
  value = [];
  currentTerrainId = 0;
  disable!: boolean;
  handleChange(value: number) {
    if (this.currentTerrainId != value) {
      this.currentTerrainId = value;
      this.$emit("terrainChanged", value);
    }
  }
  created() {
    this.options = initOption();
    this.$emit("terrainChanged", 0);
  }
}
function initOption() {
  let retVal: Array<ETerrainPickerOption> = [];
  for (let i = eTerrainType.TERRAIN_PLAINS; i < eTerrainType.TERRAIN_MAX; i++) {
    let item: ETerrainPickerOption = {
      value: i,
      label: terrainEnum2Info(i).name,
    };
    retVal.push(item);
  }
  return retVal;
}
</script>

<style lang="scss">
.el-input {
  width: 100px !important;
  height: 30px !important;
}
</style>
