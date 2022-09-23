<template>
  <div>
    <img :src="unitIconSrc" />
  </div>
  <el-cascader :v-model="value" :options="options" @change="handleChange" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { ECascaderOption, UnitModel } from "@/types/commonType";
import {
  battleUnitArray,
  eUnit,
  eUnitType,
  unitTypeEnum2String,
} from "../../staticData/units";
import { eEra, eraEnum2String } from "../../staticData/era";
@Options({})
export default class EUnitPicker extends Vue {
  value = [];
  options!: ECascaderOption[];
  unitIconSrc = require("../assets/icons/" + battleUnitArray[0].iconSrc);

  handleChange(value: Array<number>) {
    let unitId = value[2];
    this.unitIconSrc = require("../assets/icons/" +
      battleUnitArray[unitId].iconSrc);
  }
  created() {
    this.options = initOption();
  }
}

function initOption() {
  let retVal: Array<ECascaderOption> = [];
  for (let era = eEra.ERA_ANCIENT; era < eEra.ERA_MAX; era++) {
    let itemEra: ECascaderOption = {
      value: era,
      label: eraEnum2String(era),
      children: [],
    };
    for (
      let type = eUnitType.UNIT_TYPE_DETECT;
      type < eUnitType.UNIT_TYPE_MAX;
      type++
    ) {
      let itemType: ECascaderOption = {
        value: type,
        label: unitTypeEnum2String(type),
        children: [],
      };
      for (let unitId = eUnit.UNIT_CITY; unitId < eUnit.UNIT_MAX; unitId++) {
        let tempUnit: UnitModel = battleUnitArray[unitId];
        if (tempUnit.era != era || tempUnit.type != type) {
          continue;
        }
        let itemUnit: ECascaderOption = {
          value: unitId,
          label: tempUnit.name,
          children: [],
        };
        itemType.children.push(itemUnit);
      }
      itemEra.children.push(itemType);
    }
    retVal.push(itemEra);
  }
  return retVal;
}
</script>

<style lang="scss">
.el-cascader-menu {
  max-width: 140px;
  min-width: 10px;
}
.el-cascader {
  max-width: 50%;
  left: 25%;
}
</style>
