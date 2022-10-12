<template>
  <div>
    <div>
      <el-row>
        <el-col :span="6">
          <span @click="onSwitchClick">晋升</span>
        </el-col>
        <el-col
          :span="3"
          v-for="item in optionBoxes"
          :key="item.value"
          v-show="item.checked"
        >
          <img class="promotionIcon" :src="item.src" />
        </el-col>
      </el-row>
    </div>
    <div>
      <el-checkbox-group
        v-model="checkboxGroup"
        v-show="listVisible"
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
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { promotionArray } from "@/staticData/promotions";
import { battleUnitArray } from "@/staticData/units";
import { EPromotionBoxOption } from "@/types/commonType";
import { eScene, eUnit, eUnitType } from "@/staticData/enums";
import { reactive } from "vue";
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
  checkboxGroup: string[] = reactive([]);
  listVisible = false;
  unitID!: number;
  attack!: boolean;
  optionBoxes: EPromotionBoxOption[] = reactive([]);
  onSwitchClick() {
    this.listVisible = !this.listVisible;
  }
  onCheckGroupChange(value: []) {
    //先把optionBoxes全部取消checked
    for (let i = 0; i < this.optionBoxes.length; i++) {
      if (this.optionBoxes[i].disabled != true) {
        this.optionBoxes[i].checked = false;
      }
    }
    //再根据返回结果将手动勾选的option设为checked
    const selectArray = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < this.optionBoxes.length; j++) {
        if (value.at(i) === this.optionBoxes[j].label) {
          this.optionBoxes[j].checked = true;
          selectArray.push(this.optionBoxes[j].value);
          break;
        }
      }
    }
    this.$emit("changed", selectArray);
  }
  initOptions(unitId: number) {
    this.listVisible = false;
    this.checkboxGroup = [];
    let currentUnit = battleUnitArray[unitId];
    const options = [];
    const selectArray = [];
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
          this.checkboxGroup.push(promotion.name);
          selectArray.push(promotion.id);
          break;
        }
      }
      let opt: EPromotionBoxOption = {
        value: promotion.id,
        label: promotion.name,
        checked: checked,
        disabled: disabled,
        src: require("../assets/icons/" + promotion.iconName),
      };
      options.push(opt);
    }
    this.optionBoxes = options;
    this.$emit("changed", selectArray);
  }
  created() {
    this.initOptions(eUnit.UNIT_SCOUT);
  }
}
</script>

<style lang="scss">
.promotionIcon {
  width: 24px;
  height: 24px;
}
</style>
