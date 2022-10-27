<template>
  <div>
    <el-row>
      <el-col :span="12">
        <img class="citizen-img" src="@/assets/citizen.png" />
        <el-input-number
          v-model="citizens"
          :min="1"
          :max="10"
          size="small"
          @change="onCitizensChange"
        />
      </el-col>
      <el-col :span="12">
        <img class="happiness-img" src="@/assets/happiness.png" />
        <el-input-number
          v-model="happiness"
          :min="0"
          :max="20"
          size="small"
          @change="onHappinessChange"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="location" :span="6">
        <img class="hill-img" src="@/assets/icons/TERRAIN_HILL.png" />
        <el-switch v-model="hill" @change="onHillChange" />
      </el-col>
      <el-col :span="6">
        <img class="granary-img" src="@/assets/icons/BUILDING_GRANARY.png" />
        <el-switch v-model="granary" @change="onGranaryChange" />
      </el-col>
      <el-col :span="6">
        <img
          class="watermill-img"
          src="@/assets/icons/BUILDING_WATERMILL.png"
        />
        <el-switch v-model="watermill" @change="onWateMillChange" />
      </el-col>
      <el-col :span="6">
        <img class="goldenAge-img" src="@/assets/golden_age.png" />
        <el-switch v-model="goldenAge" @change="onGoldenAgeChange" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class ImmigrantProduct extends Vue {
  // properties
  citizens = 5;
  happiness = 0;
  hill = false; //true:丘陵,false:
  granary = false;
  watermill = false;
  goldenAge = false;

  //slots
  onCitizensChange(value: number) {
    this.citizens = value;
  }
  onHappinessChange(value: number) {
    this.happiness = value;
  }
  onHillChange(value: boolean) {
    this.hill = value;
  }
  onGranaryChange(value: boolean) {
    this.granary = value;
  }
  onWateMillChange(value: boolean) {
    this.watermill = value;
  }
  onGoldenAgeChange(value: boolean) {
    this.goldenAge = value;
  }
}
</script>

<style lang="scss">
.citizen-img,
.happiness-img {
  top: 5px;
  bottom: 1px;
  line-height: 22px;
  position: relative;
  display: inline-block;
}
.el-input-number--small {
  width: 60px;
  line-height: 22px;
}
.el-input-number--small .el-input-number__decrease,
.el-input-number--small .el-input-number__increase {
  width: 15px;
  font-size: 18px;
}
.el-switch {
  top: 3px;
  margin-left: 5px;
  margin-right: 5px;
  line-height: 22px;
  position: relative;
  display: inline-block;
}
.granary-img,
.watermill-img,
.hill-img,
.goldenAge-img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.el-row {
  margin-bottom: 10px;
}
</style>
