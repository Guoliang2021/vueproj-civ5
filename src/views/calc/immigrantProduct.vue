<template>
  <div>
    <el-row>
      <el-col :span="8">
        <img class="citizen-img" src="@/assets/citizen.png" />
        <el-input-number
          v-model="citizens"
          :min="1"
          :max="10"
          size="small"
          @change="onCitizensChange"
        />
      </el-col>
      <el-col :span="8">
        <img class="happiness-img" src="@/assets/happiness.png" />
        <el-input-number
          v-model="happiness"
          :min="0"
          :max="20"
          size="small"
          @change="onHappinessChange"
        />
      </el-col>
      <el-col class="location" :span="8">
        <span>平地</span>
        <el-switch
          v-model="cityLocation"
          style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
          @change="onCityLocationChange"
        />
        <span>丘陵</span>
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
  cityLocation = false; //true:丘陵,false:

  //slots
  onCitizensChange(value: number) {
    this.citizens = value;
  }
  onHappinessChange(value: number) {
    this.happiness = value;
  }
  onCityLocationChange(value: boolean) {
    this.cityLocation = value;
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
</style>
