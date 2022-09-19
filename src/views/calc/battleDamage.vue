<template>
  <div class="bd-column">
    <div class="bd-row">
      <img class="img_unit_icon" :src="attackModel.iconSrc" />
      <UnitPicker
        selectDirection="column"
        @unitChanged="attackUnitChanged"
      ></UnitPicker>
    </div>
    <div class="bd-row">
      <img class="img_unit_icon" :src="defenseModel.iconSrc" />
      <UnitPicker
        selectDirection="column"
        @unitChanged="defenseUnitChanged"
      ></UnitPicker>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnitPicker from "@/components/UnitPicker.vue";
import { TypeGSelectItem } from "../../types/commonType";
import { battleUnitArray } from "../../../staticData/units";
import { BattleDamageCalModel } from "../../types/commonType";
@Options({
  data() {
    return {
      attackModel: {},
      defenseModel: {},
    };
  },
  components: {
    UnitPicker,
  },
  methods: {},
})
export default class BattleDamage extends Vue {
  fullFillModel(calModel: BattleDamageCalModel, newUnitId: number) {
    let unit = battleUnitArray[newUnitId];
    calModel.unitId = unit.id;
    calModel.unitname = unit.name;
    calModel.unitType = unit.type;
    calModel.nationality = unit.nationality;
    calModel.closeCombat = unit.closeCombat;
    calModel.TerrainDefense = unit.TerrainDefense;
    calModel.attackRange = unit.attackRange;
    calModel.attackValue = unit.attackValue;
    calModel.rangeAttackValue = unit.rangeAttackValue;
    calModel.iconSrc = require("../../assets/icons/" + unit.iconSrc);
  }
  attackUnitChanged(item: TypeGSelectItem) {
    this.fullFillModel(this.attackModel, item.id);
  }
  defenseUnitChanged(item: TypeGSelectItem) {
    this.fullFillModel(this.defenseModel, item.id);
  }
  attackModel!: BattleDamageCalModel;
  defenseModel!: BattleDamageCalModel;
}
</script>

<style lang="scss">
.bd-row {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.bd-column {
  display: flex;
  flex-direction: row;
  margin: 10px;
}
.img_unit_icon {
  width: 100px;
  height: 100px;
  margin: auto;
}
</style>
