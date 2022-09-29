<template>
  <div>
    <el-row>
      <el-col :span="5">
        <span @click="onSwitchClick">加成选项</span>
      </el-col>
      <el-col :span="2">
        <img class="promotion-img" src="@/assets/icons/PROMOTION_59.png" />
      </el-col>
      <el-col :span="2">
        <img class="promotion-img" src="@/assets/icons/PROMOTION_59.png" />
      </el-col>
      <el-col :span="2">
        <img class="promotion-img" src="@/assets/icons/PROMOTION_59.png" />
      </el-col>
    </el-row>
  </div>
  <div>
    <el-checkbox-group
      v-model="checkboxGroup"
      v-if="listVisible"
      @change="onCheckGroupChange"
    >
      <el-checkbox
        v-for="option in optionBoxes"
        :key="option.value"
        :label="option.label"
        :checked="option.checked"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { promotionArray } from "@/staticData/promotions";
import { battleUnitArray } from "@/staticData/units";
import { EPromotionBoxOption } from "@/types/commonType";
import { eScene, eUnitType } from "@/staticData/enums";
@Options({
  props: {
    unitID: Number,
    attack: Boolean,
  },
  watch: {
    unitID(newID) {
      this.initOptions(newID);
    },
  },
})
export default class EPromotionBox extends Vue {
  checkboxGroup = [];
  listVisible = false;
  unitID!: number;
  attack!: boolean;
  optionBoxes!: EPromotionBoxOption[];
  onSwitchClick() {
    this.listVisible = !this.listVisible;
  }
  onCheckGroupChange(value: []) {
    console.log(value);
  }
  initOptions(unitId: number) {
    let currentUnit = battleUnitArray[unitId];
    const options = [];
    for (let i = 0; i < promotionArray.length; i++) {
      let promotion = promotionArray[i];
      let checked = false;
      let disabled = false;
      //   过滤单位类型
      if (
        promotion.selfUnitType != eUnitType.UNIT_TYPE_ALL &&
        promotion.selfUnitType != currentUnit.type
      )
        continue;

      //   过滤场景
      if (promotion.scene != eScene.SCENE_ALL) {
        if (this.attack && promotion.scene == eScene.SCENE_DEF) continue;
        if (!this.attack && promotion.scene == eScene.SCENE_ATK) continue;
      }

      // 单位固有
      for (let j = 0; j < currentUnit.originPromotion.length; j++) {
        if (promotion.id == currentUnit.originPromotion[j]) {
          checked = true;
          disabled = true;
          break;
        }
      }
      let opt: EPromotionBoxOption = {
        value: promotion.id,
        label: promotion.name,
        checked: checked,
        disabled: disabled,
      };
      options.push(opt);
    }
    this.optionBoxes = options;
  }
}
</script>

<style lang="scss">
.promotion-img {
  width: 24px;
  height: 24px;
}
</style>
