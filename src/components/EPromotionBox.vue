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
        v-for="city in cities"
        :key="city.value"
        :label="city.name"
        :value="city.value"
      >
        {{ city.name }}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    unitID: Number,
  },
})
export default class EPromotionBox extends Vue {
  checkboxGroup = [];
  listVisible = false;
  unitID!: number;
  cities = [
    {
      name: "shanghai",
      value: 1,
    },
    {
      name: "Beijing",
      value: 2,
    },
    {
      name: "Guangzhou",
      value: 3,
    },
    {
      name: "Shenzhen",
      value: 4,
    },
  ];
  onSwitchClick() {
    this.listVisible = !this.listVisible;
    console.log(this.unitID);
  }
  onCheckGroupChange(value: []) {
    console.log(value);
  }
}
</script>

<style lang="scss">
.promotion-img {
  width: 24px;
  height: 24px;
}
</style>
