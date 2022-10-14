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
            v-show="attackModel.unitType == unitTypeCity"
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
          <EPromotionBox
            :unitID="attackModel.unitId"
            :attack="true"
            @changed="onAttackPromotionChanged"
            v-show="attackModel.unitType != unitTypeCity"
          ></EPromotionBox>
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
            v-show="defenseModel.unitType == unitTypeCity"
          />
        </div>
        <div>
          <EPromotionBox
            :unitID="defenseModel.unitId"
            :attack="false"
            @changed="onDefensePromotionChanged"
            v-show="defenseModel.unitType != unitTypeCity"
          ></EPromotionBox>
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
import EPromotionBox from "@/components/EPromotionBox.vue";
import { promotionArray } from "@/staticData/promotions";
import {
  eNationality,
  ePromotion,
  eTerrainType,
  eUnitType,
  terrainEnum2Info,
} from "@/staticData/enums";

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
    EPromotionBox,
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
    this.calcBattleDamage();
  }
  onDefenseUnitChange(unitId: number) {
    this.initCalcModel(unitId, false);
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
  onAttackPromotionChanged(array: number[]) {
    this.attackModel.promotions = array;
    this.calcBattleDamage();
  }
  onDefensePromotionChanged(array: number[]) {
    this.defenseModel.promotions = array;
    this.defenseModel.garrison = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == ePromotion.PROMOTION_GARRISON) {
        this.defenseModel.garrison = true;
        break;
      }
    }
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
      promotions: [],
      garrison: false,

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
    if (this.attackModel.unitType != eUnitType.UNIT_TYPE_CITY) {
      this.attackModel.calcAttackValue = this.attackModel.closeCombat
        ? this.attackModel.attackValue
        : this.attackModel.rangeAttackValue;
    }

    if (this.defenseModel.unitType != eUnitType.UNIT_TYPE_CITY) {
      this.defenseModel.calcAttackValue =
        !this.attackModel.closeCombat && !this.defenseModel.closeCombat
          ? this.defenseModel.rangeAttackValue
          : this.defenseModel.attackValue;
    }
  }

  atkPromotionValidate() {
    let coe = 0;
    let targetCoe = 0;
    if (this.attackModel.promotions.length == 0) return { coe, targetCoe };
    for (let i = 0; i < this.attackModel.promotions.length; i++) {
      let promotion = promotionArray[this.attackModel.promotions[i]];

      //自身地形判定
      if (promotion.selfTerrainType > eTerrainType.TERRAIN_MAX) {
        if (
          promotion.selfTerrainType == eTerrainType.TERRAIN_RUGGED &&
          !terrainEnum2Info(this.attackModel.terrainId).rugged
        )
          continue;
        if (
          promotion.selfTerrainType == eTerrainType.TERRAIN_INRUGGED &&
          terrainEnum2Info(this.attackModel.terrainId).rugged
        )
          continue;
      } else if (
        promotion.selfTerrainType != eTerrainType.TERRAIN_ALL &&
        promotion.selfTerrainType != this.attackModel.terrainId
      )
        continue;

      //目标地形判定
      if (promotion.targetTerrainType > eTerrainType.TERRAIN_MAX) {
        if (
          promotion.targetTerrainType == eTerrainType.TERRAIN_RUGGED &&
          !terrainEnum2Info(this.defenseModel.terrainId).rugged
        )
          continue;
        if (
          promotion.targetTerrainType == eTerrainType.TERRAIN_INRUGGED &&
          terrainEnum2Info(this.defenseModel.terrainId).rugged
        )
          continue;
      } else if (
        promotion.targetTerrainType != eTerrainType.TERRAIN_ALL &&
        promotion.targetTerrainType != this.defenseModel.terrainId
      )
        continue;

      //目标单位类型判定
      let match = false;
      if (promotion.targetUnitType.length != 0) {
        for (let i = 0; i < promotion.targetUnitType.length; i++) {
          if (promotion.targetUnitType[i] == this.defenseModel.unitType) {
            match = true;
            break;
          }
        }
        if (!match) continue;
      }

      //荣誉开门勾选时，非uu单位视为蛮族
      if (promotion.barbarainOnly) {
        if (
          this.defenseModel.nationality > eNationality.NATION_BARBARIAN ||
          this.defenseModel.unitType == eUnitType.UNIT_TYPE_CITY
        )
          continue;
      }

      //其他特殊情况
      if (
        //atk具有齐射时，判定def是否驻防
        promotion.id == ePromotion.PROMOTION_VOLLEY &&
        this.defenseModel.unitType == eUnitType.UNIT_TYPE_CLOSECOMBAT &&
        this.defenseModel.garrison == false
      )
        continue;

      coe += promotion.selfModify;
      targetCoe += promotion.targetModify;
    }
    return { coe, targetCoe };
  }

  defPromotionValidate() {
    let coe = 0;
    let targetCoe = 0;
    if (this.defenseModel.promotions == undefined) return { coe, targetCoe };
    if (this.defenseModel.promotions.length == 0) return { coe, targetCoe };
    for (let i = 0; i < this.defenseModel.promotions.length; i++) {
      let promotion = promotionArray[this.defenseModel.promotions[i]];

      //自身地形判定
      if (promotion.selfTerrainType > eTerrainType.TERRAIN_MAX) {
        if (
          promotion.selfTerrainType == eTerrainType.TERRAIN_RUGGED &&
          !terrainEnum2Info(this.defenseModel.terrainId).rugged
        )
          continue;
        if (
          promotion.selfTerrainType == eTerrainType.TERRAIN_INRUGGED &&
          terrainEnum2Info(this.defenseModel.terrainId).rugged
        )
          continue;
      } else if (
        promotion.selfTerrainType != eTerrainType.TERRAIN_ALL &&
        promotion.selfTerrainType != this.defenseModel.terrainId
      )
        continue;

      //目标地形判定
      if (promotion.targetTerrainType > eTerrainType.TERRAIN_MAX) {
        if (
          promotion.targetTerrainType == eTerrainType.TERRAIN_RUGGED &&
          !terrainEnum2Info(this.attackModel.terrainId).rugged
        )
          continue;
        if (
          promotion.targetTerrainType == eTerrainType.TERRAIN_INRUGGED &&
          terrainEnum2Info(this.attackModel.terrainId).rugged
        )
          continue;
      } else if (
        promotion.targetTerrainType != eTerrainType.TERRAIN_ALL &&
        promotion.targetTerrainType != this.attackModel.terrainId
      )
        continue;

      //目标单位类型判定
      let match = false;
      if (promotion.targetUnitType.length != 0) {
        for (let i = 0; i < promotion.targetUnitType.length; i++) {
          if (promotion.targetUnitType[i] == this.attackModel.unitType) {
            match = true;
            break;
          }
        }
        if (!match) continue;
      }

      //荣誉开门勾选时，非uu单位视为蛮族
      if (
        promotion.barbarainOnly &&
        this.attackModel.nationality > eNationality.NATION_BARBARIAN
      )
        continue;
      coe += promotion.selfModify;
      targetCoe += promotion.targetModify;
    }
    return { coe, targetCoe };
  }

  // 战斗力修正
  battleModify() {
    let atk = this.attackModel.calcAttackValue;
    let def = this.defenseModel.calcAttackValue;
    let atkCoe = this.atkPromotionValidate();
    let defCoe = this.defPromotionValidate();
    if (this.attackModel.happiness < 20) {
      atkCoe.coe -= 2 * this.attackModel.happiness;
    } else {
      atkCoe.coe -= 40;
    }
    let defTerrain = terrainEnum2Info(this.defenseModel.terrainId);
    if (this.defenseModel.TerrainDefense || !defTerrain.rugged) {
      defCoe.coe += defTerrain.modify;
    }
    if (this.attackModel.attackRange == 1) {
      atkCoe.coe += defCoe.targetCoe;
      defCoe.coe += atkCoe.targetCoe;
    }
    this.attackModel.modifiedAttackValue = (atk * (100 + atkCoe.coe)) / 100;
    this.defenseModel.modifiedAttackValue = (def * (100 + defCoe.coe)) / 100;
  }

  // 计算伤害
  calcBattleDamage() {
    if (this.attackModel == undefined || this.defenseModel == undefined) return;
    this.attackValueConfirm();
    this.battleModify();
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
