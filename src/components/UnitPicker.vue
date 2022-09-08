<template>
  <div id="shell">
    <label>时代</label>
    <GSelect
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
    };
  },
  props: {},
})
export default class UnitPicker extends Vue {
  eraArray!: [];
  eraChanged(item: TypeGSelectItem) {
    console.log(item);
  }
  created() {
    var eraList = require("../../staticData/era").eraArray;
    this.eraArray = eraList;
  }
}
</script>
