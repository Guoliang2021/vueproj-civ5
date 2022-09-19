<!--
 单位选择组件
 调用者通过props中定义的direction属性(row|column)调整下拉框的排列方式
-->
<template>
  <div id="unitpicker_shell">
    <GSelect
      :class="[
        'g_select_column',
        selectDirection === 'row' ? 'g_select_row' : '',
      ]"
      color="white"
      title="类型"
      :optionArray="typeArray"
      @selectedOptionChanged="typeChanged"
    ></GSelect>
    <GSelect
      :class="[
        'g_select_column',
        selectDirection === 'row' ? 'g_select_row' : '',
      ]"
      color="white"
      title="时代"
      :optionArray="eraArray"
      @selectedOptionChanged="eraChanged"
    ></GSelect>
    <GSelect
      :class="[
        'g_select_column',
        selectDirection === 'row' ? 'g_select_row' : '',
      ]"
      color="white"
      title="单位"
      :optionArray="unitArray"
      @selectedOptionChanged="unitChanged"
    ></GSelect>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GSelect from "./common/GSelect.vue";
import { TypeGSelectItem } from "../types/commonType";
import { eEra, eraEnum2String } from "../../staticData/era";
import {
  eUnitType,
  unitTypeEnum2String,
  battleUnitArray,
} from "../../staticData/units";

@Options({
  components: {
    GSelect,
  },
  data() {
    return {
      currentEra: 0,
      currentType: 0,
      eraArray: [],
      typeArray: [],
      unitArray: [],
    };
  },
  props: {
    selectDirection: String,
  },
})
export default class UnitPicker extends Vue {
  eraArray!: TypeGSelectItem[];
  typeArray!: TypeGSelectItem[];
  unitArray!: TypeGSelectItem[];
  selectDirection!: string;
  currentEra = 0;
  currentType = 0;
  eraChanged(item: TypeGSelectItem) {
    this.currentEra = item.id;
    this.unitArray = this.unitFilter(this.currentEra, this.currentType);
  }
  typeChanged(item: TypeGSelectItem) {
    this.currentType = item.id;
    this.unitArray = this.unitFilter(this.currentEra, this.currentType);
  }
  unitChanged(item: TypeGSelectItem) {
    this.$emit("unitChanged", item);
  }
  unitFilter(era: number, type: number) {
    let tempUnitArray: TypeGSelectItem[];
    tempUnitArray = battleUnitArray;
    if (era != 0) {
      tempUnitArray = battleUnitArray.filter((x) => x.era == era);
    }
    if (type != 0) {
      tempUnitArray = tempUnitArray.filter((x) => x.type == type);
    }
    if (tempUnitArray.length == 0) {
      let empty: TypeGSelectItem = {
        id: -1,
        name: "无匹配项",
      };
      tempUnitArray.push(empty);
    }
    return tempUnitArray;
  }
  created() {
    const era = [];
    for (let i = eEra.ERA_ALL; i < eEra.ERA_MAX; i++) {
      let item: TypeGSelectItem = {
        id: i,
        name: eraEnum2String(i),
      };
      era.push(item);
    }
    const unityType = [];
    for (let i = eUnitType.UNIT_TYPE_ALL; i < eUnitType.UNIT_TYPE_MAX; i++) {
      let item: TypeGSelectItem = {
        id: i,
        name: unitTypeEnum2String(i),
      };
      unityType.push(item);
    }
    this.eraArray = era;
    this.typeArray = unityType;
    this.unitArray = battleUnitArray;
  }
}
</script>

<style lang="scss">
.g_select_row {
  position: relative;
  float: left;
}
.g_select_column {
  position: relative;
}
</style>
