<template>
  <div>
    <el-row>
      <el-col :span="6">
        <span @click="onSwitchClick">晋升</span>
      </el-col>
      <el-col :span="3" v-for="item in items" :key="item.index">
        <img
          class="promotionIcon"
          :src="item.src"
          v-show="item.visible"
          @click="onClicked"
        />
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { promotionArray } from "@/staticData/promotions";
import { battleUnitArray } from "@/staticData/units";
import { EPromotionBoxOption, EPromotionBoxImgList } from "@/types/commonType";
import { eScene, eUnit, eUnitType } from "@/staticData/enums";
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
    const items = [];
    for (let i = 0; i < value.length; i++) {
      for (let j = 0; j < this.optionBoxes.length; j++) {
        if (value.at(i) === this.optionBoxes[j].label) {
          let item: EPromotionBoxImgList = {
            value: this.optionBoxes[j].value,
            src: require("../assets/icons/" +
              promotionArray[this.optionBoxes[j].value].iconName),
          };
          items.push(item);
          break;
        }
      }
    }
  }
  initOptions(unitId: number) {
    this.listVisible = false;
    this.checkboxGroup = [];
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
  created() {
    this.initOptions(eUnit.UNIT_SCOUT);
  }
  items = [
    {
      src: require("../assets/icons/BUILDING_AIRPORT.png"),
      index: 1,
      visible: false,
    },
    {
      src: require("../assets/icons/BUILDING_ARSENAL.png"),
      index: 2,
      visible: false,
    },
    {
      src: require("../assets/icons/BUILDING_BANK.png"),
      index: 3,
      visible: true,
    },
    {
      src: require("../assets/icons/BUILDING_BANK.png"),
      index: 4,
      visible: true,
    },
    {
      src: require("../assets/icons/BUILDING_BANK.png"),
      index: 5,
      visible: true,
    },
    {
      src: require("../assets/icons/BUILDING_BANK.png"),
      index: 6,
      visible: true,
    },
    {
      src: require("../assets/icons/BUILDING_BANK.png"),
      index: 7,
      visible: true,
    },
  ];
  onClicked() {
    console.log("click");
    this.items[0].visible = !this.items[0].visible;
  }
}
</script>

<style lang="scss">
.promotionIcon {
  width: 24px;
  height: 24px;
}
</style>
