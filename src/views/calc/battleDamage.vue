<template>
  <div id="bd-row">
    <UnitPicker
      selectDirection="row"
      @unitChanged="selectUnitChanged"
    ></UnitPicker>
    <img :src="attackUnitIconSrc" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnitPicker from "@/components/UnitPicker.vue";
import { TypeGSelectItem } from "../../types/commonType";
import { battleUnitArray } from "../../../staticData/units";
@Options({
  data() {
    return {
      attackUnitIconSrc: String,
    };
  },
  components: {
    UnitPicker,
  },
  methods: {},
})
export default class BattleDamage extends Vue {
  selectUnitChanged(item: TypeGSelectItem) {
    this.attackUnitIconSrc = require("../../assets/icons/" +
      battleUnitArray[item.id].iconSrc);
  }
  attackUnitIconSrc!: string;
}
</script>

<style lang="scss">
#bd-row {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
