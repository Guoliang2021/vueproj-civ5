<template>
  <div class="bd-row">
    <div class="bd-column">
      <div class="bd-row">
        <img
          class="img_unit_icon"
          :src="attackModel.iconSrc"
          @click="onSelectAtkUnit"
        />
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
    <div class="bd-row">
      <div>minDamage = {{ attackModel.minDamage }}</div>
      <div>maxDamage = {{ attackModel.maxDamage }}</div>
      <div>avgDamage = {{ attackModel.avgDamage }}</div>
    </div>
    <GDialog
      :showDialog="showDialog"
      title="请选择攻击单位"
      @cancel="onCancel"
      @confirm="onConfirm"
    ></GDialog>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UnitPicker from "@/components/UnitPicker.vue";
import { TypeGSelectItem } from "../../types/commonType";
import { battleUnitArray } from "../../../staticData/units";
import { BattleDamageCalModel } from "../../types/commonType";
import GDialog from "../../components/common/GDialog.vue";
@Options({
  data() {
    return {
      attackModel: {},
      defenseModel: {},
      showDialog: Boolean,
    };
  },
  components: {
    UnitPicker,
    GDialog,
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
  onSelectAtkUnit() {
    this.showDialog = !this.showDialog;
  }
  onCancel() {
    this.showDialog = false;
  }
  onConfirm() {
    this.showDialog = false;
  }
  attackUnitChanged(item: TypeGSelectItem) {
    this.fullFillModel(this.attackModel, item.id);
    this.calcDamage();
  }
  defenseUnitChanged(item: TypeGSelectItem) {
    this.fullFillModel(this.defenseModel, item.id);
    this.calcDamage();
  }
  battleModify() {
    let atkModel = this.attackModel;
    let defModel = this.defenseModel;

    var atk =
      atkModel.closeCombat == true
        ? atkModel.attackValue
        : atkModel.rangeAttackValue;
    var def =
      atkModel.closeCombat == false && defModel.closeCombat == false
        ? defModel.rangeAttackValue
        : defModel.attackValue;
    console.log("atk=", atk, "def=", def);
    atkModel.modifiedAttackValue = atk;
    defModel.modifiedAttackValue = def;
    this.attackModel = atkModel;
    this.defenseModel = defModel;
  }
  calcDamage() {
    this.battleModify();
    let atkModel = this.attackModel;
    let defModel = this.defenseModel;

    atkModel.minDamage = calcAttackDamage(
      atkModel.modifiedAttackValue,
      defModel.modifiedAttackValue,
      24,
      100
    ).toFixed(1);
    atkModel.maxDamage = calcAttackDamage(
      atkModel.modifiedAttackValue,
      defModel.modifiedAttackValue,
      36,
      100
    ).toFixed(1);
    atkModel.avgDamage = calcAttackDamage(
      atkModel.modifiedAttackValue,
      defModel.modifiedAttackValue,
      30,
      100
    ).toFixed(1);
    this.attackModel = atkModel;
  }
  attackModel!: BattleDamageCalModel;
  defenseModel!: BattleDamageCalModel;
  showDialog = false;
}
function calcAttackDamage(
  atk: number,
  def: number,
  coe: number,
  health: number
) {
  var damage = 0;
  if (atk >= def) {
    damage = coe * (Math.pow(atk / def + 3, 4) / 512 + 0.5);
  } else {
    damage = coe / (Math.pow(def / atk + 3, 4) / 512 + 0.5);
  }

  damage = (damage * (100 - Math.trunc((100 - health) / 3))) / 100;

  if (damage > 100) damage = 100;
  if (damage < 1) damage = 1;

  return damage;
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
