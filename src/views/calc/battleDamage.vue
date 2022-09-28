<template>
  <div>
    <!-- input -->
    <el-row>
      <!-- attack -->
      <el-col :span="12">
        <div>
          <EUnitPicker @unitChanged="onAttackUnitChange"></EUnitPicker>
        </div>
        <div>
          <ETerrainPicker
            @terrainChanged="onAttackTerrainChange"
            :disabled="attackModel.unitType === unitTypeCity"
          ></ETerrainPicker>
        </div>
        <div>
          <el-slider
            class="el-slider-health"
            v-model="attackModel.health"
            @change="onAttackHealthChange"
          />
        </div>
        <div>
          <el-slider
            class="el-slider-citydefence"
            v-model="attackModel.calcAttackValue"
            @change="onAttackCityDefenceChange"
            :disabled="attackModel.unitType != unitTypeCity"
          />
        </div>
        <div>
          <el-slider
            class="el-slider-happiness"
            v-model="attackModel.happiness"
            @change="onAttackHappinessChange"
            :max="20"
          />
        </div>
        <div>
          战斗力:{{ attackModel.calcAttackValue }}/{{
            attackModel.modifiedAttackValue
          }}
        </div>
        <div>
          伤害:{{ attackModel.minDamage }}/{{ attackModel.avgDamage }}/{{
            attackModel.maxDamage
          }}
        </div>
      </el-col>

      <!-- defense -->
      <el-col :span="12">
        <div>
          <EUnitPicker @unitChanged="onDefenseUnitChange"></EUnitPicker>
        </div>
        <div>
          <ETerrainPicker
            @terrainChanged="onDefenseTerrainChange"
            :disabled="defenseModel.unitType === unitTypeCity"
          ></ETerrainPicker>
        </div>
        <div>
          <el-slider
            class="el-slider-health"
            v-model="defenseModel.health"
            @change="onDefenseHealthChange"
          />
        </div>
        <div>
          <el-slider
            class="el-slider-citydefence"
            v-model="defenseModel.calcAttackValue"
            @change="onDefenseCityDefenceChange"
            :disabled="defenseModel.unitType != unitTypeCity"
          />
        </div>
        <div>
          战斗力:{{ defenseModel.calcAttackValue }}/{{
            defenseModel.modifiedAttackValue
          }}
        </div>
        <div v-if="attackModel.closeCombat">
          反伤:{{ defenseModel.minDamage }}/{{ defenseModel.avgDamage }}/{{
            defenseModel.maxDamage
          }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EUnitPicker from "@/components/EUnitPicker.vue";
import { BattleDamageCalModel } from "@/types/commonType";
import { battleUnitArray } from "@/staticData/units";
import ETerrainPicker from "@/components/ETerrainPicker.vue";
import { terrainEnum2Info } from "@/staticData/terrain";
import { eUnitType } from "@/staticData/units";
@Options({
  data() {
    return {
      attackModel: {},
      defenseModel: {},
    };
  },
  components: {
    EUnitPicker,
    ETerrainPicker,
  },
})
export default class BattleDamage extends Vue {
  // properties
  attackModel!: BattleDamageCalModel;
  defenseModel!: BattleDamageCalModel;
  unitTypeCity = eUnitType.UNIT_TYPE_CITY;

  //slots
  onAttackUnitChange(unitId: number) {
    this.initCalcModel(unitId, true);
    this.attackValueConfirm();
    this.calcBattleDamage();
  }
  onDefenseUnitChange(unitId: number) {
    this.initCalcModel(unitId, false);
    this.attackValueConfirm();
    this.calcBattleDamage();
  }
  onAttackTerrainChange(terrainId: number) {
    this.attackModel.terrainId = terrainId;
    this.calcBattleDamage();
  }
  onDefenseTerrainChange(terrainId: number) {
    this.defenseModel.terrainId = terrainId;
    this.calcBattleDamage();
  }
  onAttackHealthChange(health: number) {
    this.attackModel.health = health;
    this.calcBattleDamage();
  }
  onDefenseHealthChange(health: number) {
    this.defenseModel.health = health;
    this.calcBattleDamage();
  }
  onAttackCityDefenceChange(defence: number) {
    this.attackModel.calcAttackValue = defence;
    this.calcBattleDamage();
  }
  onDefenseCityDefenceChange(defence: number) {
    this.defenseModel.calcAttackValue = defence;
    this.calcBattleDamage();
  }
  onAttackHappinessChange(happiness: number) {
    this.attackModel.happiness = happiness;
    this.calcBattleDamage();
  }

  //functions
  // 初始化计算模型
  initCalcModel(unitId: number, attack: boolean) {
    let unit = battleUnitArray[unitId];
    let model: BattleDamageCalModel = {
      unitId: unitId,
      unitType: unit.type,
      TerrainDefense: unit.terrainDefense,
      closeCombat: unit.closeCombat,
      nationality: unit.nationality,
      attackRange: unit.attackRange,
      attackValue: unit.attackValue,
      rangeAttackValue: unit.rangeAttackValue,
      unitname: unit.name,

      terrainId: 0,
      health: 100,
      happiness: 0,

      calcAttackValue: 0,
      modifiedAttackValue: 0,
      minDamage: "0",
      maxDamage: "0",
      avgDamage: "0",
    };

    if (attack) {
      this.attackModel = model;
    } else this.defenseModel = model;
  }

  // 战斗力判定
  attackValueConfirm() {
    this.attackModel.calcAttackValue = this.attackModel.closeCombat
      ? this.attackModel.attackValue
      : this.attackModel.rangeAttackValue;
    this.defenseModel.calcAttackValue =
      !this.attackModel.closeCombat && !this.defenseModel.closeCombat
        ? this.defenseModel.rangeAttackValue
        : this.defenseModel.attackValue;
  }

  // 战斗力修正
  attackModify() {
    let atk = this.attackModel.calcAttackValue;
    let def = this.defenseModel.calcAttackValue;

    let atkCoe = 0;
    let defCoe = 0;
    if (this.attackModel.happiness < 20) {
      atkCoe -= 2 * this.attackModel.happiness;
    } else {
      atkCoe -= 40;
    }
    let defTerrain = terrainEnum2Info(this.defenseModel.terrainId);
    if (this.defenseModel.TerrainDefense || !defTerrain.rugged) {
      defCoe += defTerrain.modify;
    }
    this.attackModel.modifiedAttackValue = (atk * (100 + atkCoe)) / 100;
    this.defenseModel.modifiedAttackValue = (def * (100 + defCoe)) / 100;
  }

  // 计算伤害
  calcBattleDamage() {
    this.attackModify();
    let atk = this.attackModel.modifiedAttackValue;
    let def = this.defenseModel.modifiedAttackValue;
    let atkAvgDamage = 0;
    let defAvgDamage = 0;
    let atkhealth = this.attackModel.health;
    let defhealth = this.defenseModel.health;
    atkAvgDamage = this.attackDamageCalc(atk, def, 30, atkhealth);
    defAvgDamage = this.defenseDamageCalc(atk, def, 30, defhealth);
    this.attackModel.minDamage = ((atkAvgDamage * 24) / 30).toFixed(1);
    this.attackModel.maxDamage = ((atkAvgDamage * 36) / 30).toFixed(1);
    this.attackModel.avgDamage = atkAvgDamage.toFixed(1);
    this.defenseModel.minDamage = ((defAvgDamage * 24) / 30).toFixed(1);
    this.defenseModel.maxDamage = ((defAvgDamage * 36) / 30).toFixed(1);
    this.defenseModel.avgDamage = defAvgDamage.toFixed(1);
  }

  // 计算攻伤
  attackDamageCalc(atk: number, def: number, coe: number, health: number) {
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
  // 计算反伤
  defenseDamageCalc(atk: number, def: number, coe: number, health: number) {
    var damage = 0;
    if (atk >= def) damage = coe / (Math.pow(atk / def + 3, 4) / 512 + 0.5);
    else damage = coe * (Math.pow(def / atk + 3, 4) / 512 + 0.5);

    damage = (damage * (100 - Math.trunc((100 - health) / 3))) / 100;

    if (damage > 100) damage = 100;
    if (damage < 1) damage = 1;

    return damage;
  }
}
</script>

<style lang="scss">
.el-slider-health {
  max-width: 50%;
  margin-left: 25%;
  .el-slider__bar {
    background-color: green;
  }
  .el-slider__button {
    width: 15px;
    height: 15px;
    border: solid 2px green;
  }
}
.el-slider-happiness {
  max-width: 50%;
  margin-left: 25%;
  .el-slider__bar {
    background-color: red;
  }
  .el-slider__button {
    width: 15px;
    height: 15px;
    border: solid 2px red;
  }
}
.el-slider-citydefence {
  max-width: 50%;
  margin-left: 25%;
  .el-slider__bar {
    background-color: blue;
  }
  .el-slider__button {
    width: 15px;
    height: 15px;
    border: solid 2px blue;
  }
}
</style>
