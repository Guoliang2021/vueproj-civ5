<template>
  <div>
    <!-- input -->
    <el-row>
      <!-- attack -->
      <el-col :span="12">
        <div>
          <EUnitPicker @unitChanged="onAttackUnitChange"></EUnitPicker>
        </div>
      </el-col>

      <!-- defense -->
      <el-col :span="12">
        <div>
          <EUnitPicker @unitChanged="onDefenseUnitChange"></EUnitPicker>
        </div>
      </el-col>
    </el-row>
    <!-- output -->
    <el-row>
      <el-col :span="8">
        <div>min:{{ attackModel.minDamage }}</div>
      </el-col>
      <el-col :span="8">
        <div>max:{{ attackModel.maxDamage }}</div>
      </el-col>
      <el-col :span="8">
        <div>avg:{{ attackModel.avgDamage }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div>min:{{ defenseModel.minDamage }}</div>
      </el-col>
      <el-col :span="8">
        <div>max:{{ defenseModel.maxDamage }}</div>
      </el-col>
      <el-col :span="8">
        <div>avg:{{ defenseModel.avgDamage }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EUnitPicker from "@/components/EUnitPicker.vue";
import { BattleDamageCalModel } from "@/types/commonType";
import { battleUnitArray } from "@/staticData/units";
@Options({
  data() {
    return {
      attackModel: {},
      defenseModel: {},
    };
  },
  components: {
    EUnitPicker,
  },
})
export default class BattleDamage extends Vue {
  // properties
  attackModel!: BattleDamageCalModel;
  defenseModel!: BattleDamageCalModel;

  //slots
  onAttackUnitChange(unitId: number) {
    this.initCalcModel(unitId);
  }
  onDefenseUnitChange(unitId: number) {
    this.initCalcModel(unitId);
  }

  //functions
  initCalcModel(unitId: number) {
    let unit = battleUnitArray[unitId];
    console.log(unit);
  }
}
</script>

<style lang="scss"></style>
