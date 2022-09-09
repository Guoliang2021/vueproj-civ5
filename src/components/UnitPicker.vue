<template>
  <div id="unitpicker_shell">
    <GSelect
      color="white"
      title="类型"
      :optionArray="typeArray"
      @selectedOptionChanged="typeChanged"
    ></GSelect>
    <GSelect
      color="white"
      title="时代"
      :optionArray="eraArray"
      @selectedOptionChanged="eraChanged"
    ></GSelect>
    <GSelect
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

@Options({
  components: {
    GSelect,
  },
  data() {
    return {
      eraArray: [],
      typeArray: [],
      unitArray: [],
    };
  },
  props: {},
})
export default class UnitPicker extends Vue {
  eraArray!: [];
  typeArray!: [];
  unitArray!: [];
  eraChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  typeChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  unitChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  created() {
    var era = require("../../staticData/era").eraArray;
    var unitType = require("../../staticData/units").typeArray;
    var unit = require("../../staticData/units").unitArray;
    this.eraArray = era;
    this.typeArray = unitType;
    this.unitArray = unit;
  }
}
</script>
