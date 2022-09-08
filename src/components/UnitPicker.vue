<template>
  <div id="shell">
    <label>类型</label>
    <GSelect
      id="unitType"
      color="white"
      :optionArray="typeArray"
      @selectedOptionChanged="typeChanged"
    ></GSelect>
    <label>时代</label>
    <GSelect
      id="era"
      color="white"
      :optionArray="eraArray"
      @selectedOptionChanged="eraChanged"
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
    };
  },
  props: {},
})
export default class UnitPicker extends Vue {
  eraArray!: [];
  typeArray!: [];
  eraChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  typeChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  created() {
    var era = require("../../staticData/era").eraArray;
    var unitType = require("../../staticData/unitType").typeArray;
    this.eraArray = era;
    this.typeArray = unitType;
  }
}
</script>
