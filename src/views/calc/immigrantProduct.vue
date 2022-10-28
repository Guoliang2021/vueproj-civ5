<template>
  <div>
    <el-row>
      <el-col :span="12">
        <img class="citizen-img" src="@/assets/citizen.png" />
        <ENumberSelect
          :minNumber="1"
          :maxNumber="10"
          :step="1"
          @change="onCitizensChange"
        />
      </el-col>
      <el-col :span="12">
        <img class="happiness-img" src="@/assets/happiness.png" />
        <ENumberSelect
          :minNumber="0"
          :maxNumber="10"
          :step="1"
          @change="onHappinessChange"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="location" :span="6">
        <img class="img-switch" src="@/assets/icons/TERRAIN_HILL.png" />
        <el-switch v-model="hill" @change="onHillChange" />
      </el-col>
      <el-col :span="6">
        <img class="img-switch" src="@/assets/icons/BUILDING_GRANARY.png" />
        <el-switch v-model="granary" @change="onGranaryChange" />
      </el-col>
      <el-col :span="6">
        <img class="img-switch" src="@/assets/icons/BUILDING_WATERMILL.png" />
        <el-switch v-model="watermill" @change="onWateMillChange" />
      </el-col>
      <el-col :span="6">
        <img class="goldenAge-img" src="@/assets/golden_age.png" />
        <el-switch v-model="goldenAge" @change="onGoldenAgeChange" />
      </el-col>
    </el-row>

    <el-table
      :data="landList"
      height="200"
      :default-sort="{ prop: 'index', order: 'descending' }"
    >
      <el-table-column prop="description" align="center">
        <template v-slot:header>
          <img class="img-table" src="@/assets/terrain.png" />
        </template>
      </el-table-column>
      <el-table-column prop="food" align="center">
        <template v-slot:header>
          <img class="img-table" src="@/assets/food.png" />
        </template>
      </el-table-column>
      <el-table-column prop="production" align="center">
        <template v-slot:header>
          <img class="img-table" src="@/assets/production.png" />
        </template>
      </el-table-column>
      <el-table-column prop="gold" align="center">
        <template v-slot:header>
          <img class="img-table" src="@/assets/gold.png" />
        </template>
      </el-table-column>
      <el-table-column fixed="left" width="30" prop="index">
        <template #default="scope">
          <img
            class="remove-img"
            src="@/assets/remove.png"
            @click.prevent="onRemoveRow(scope.$index)"
          />
        </template>
      </el-table-column>
    </el-table>

    <el-row>
      <el-col :span="2">
        <img
          class="add-img"
          src="@/assets/add.png"
          @click.prevent="onAddRow()"
        />
      </el-col>
      <el-col :span="7">
        <el-input v-model="landAdd.description" placeholder="Please input" />
      </el-col>
      <el-col :span="5">
        <img class="img-table" src="@/assets/food.png" />
        <ENumberSelect
          :minNumber="0"
          :maxNumber="5"
          :step="1"
          @numberChange="onAddFoodChange"
        ></ENumberSelect>
      </el-col>
      <el-col :span="5">
        <img class="img-table" src="@/assets/production.png" />
        <ENumberSelect
          :minNumber="0"
          :maxNumber="5"
          :step="1"
          @numberChange="onAddProductionChange"
        ></ENumberSelect>
      </el-col>
      <el-col :span="5">
        <img class="img-table" src="@/assets/gold.png" />
        <ENumberSelect
          :minNumber="0"
          :maxNumber="5"
          :step="1"
          @numberChange="onAddGoldChange"
        ></ENumberSelect>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { LandOutPut, TurnOutPut } from "@/types/commonType";
import ENumberSelect from "@/components/ENumberSelect.vue";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
@Options({
  components: { ENumberSelect },
})
export default class ImmigrantProduct extends Vue {
  // properties
  citizens = 5;
  happiness = 0;
  hill = false;
  granary = false;
  watermill = false;
  goldenAge = false;
  baseOutPut!: { food: number; production: number };
  landAdd: LandOutPut = reactive({
    index: 0,
    description: "",
    production: 0,
    food: 0,
    gold: 0,
  });
  landList: LandOutPut[] = reactive([
    {
      index: 0,
      description: "平原麦",
      production: 1,
      food: 2,
      gold: 0,
    },
    {
      index: 1,
      description: "花岗石",
      production: 1,
      food: 2,
      gold: 0,
    },
    {
      index: 2,
      description: "丘陵",
      production: 2,
      food: 0,
      gold: 0,
    },
    {
      index: 3,
      description: "矿山",
      production: 3,
      food: 0,
      gold: 0,
    },
    {
      index: 4,
      description: "平原马",
      production: 2,
      food: 1,
      gold: 0,
    },
    {
      index: 5,
      description: "平原马圈",
      production: 3,
      food: 1,
      gold: 0,
    },
    {
      index: 6,
      description: "平原盐",
      production: 1,
      food: 2,
      gold: 1,
    },
    {
      index: 7,
      description: "平原盐矿",
      production: 2,
      food: 3,
      gold: 1,
    },
    {
      index: 8,
      description: "羊",
      production: 2,
      food: 1,
      gold: 0,
    },
  ]);

  //slots
  onCitizensChange(value: number) {
    this.citizens = value;
    let container: LandOutPut[] = [];
    this.combine(0, 0, container);
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
  onRemoveRow(row: number) {
    if (row > this.landList.length) return;
    this.landList.splice(row, 1);
    for (let i = 0; i < this.landList.length; i++) {
      this.landList[i].index = i;
    }
  }
  onAddRow() {
    if (this.landAdd.description.length == 0) {
      ElMessage.error("请输入描述信息.");
      return;
    } else if (
      this.landAdd.food == 0 &&
      this.landAdd.production == 0 &&
      this.landAdd.gold == 0
    ) {
      ElMessage.error("粮锤金不能全为0.");
      return;
    }
    let temp: LandOutPut = {
      index: this.landList.length,
      description: this.landAdd.description,
      food: this.landAdd.food,
      production: this.landAdd.production,
      gold: this.landAdd.gold,
    };
    this.landList.push(temp);
    console.log(this.landList);
  }
  onAddFoodChange(value: number) {
    this.landAdd.food = value;
  }
  onAddProductionChange(value: number) {
    this.landAdd.production = value;
  }
  onAddGoldChange(value: number) {
    this.landAdd.gold = value;
  }

  //functions
  baseProdution() {
    //城市自带
    this.baseOutPut.food += 2;
    this.baseOutPut.production += 1;
    if (this.hill) this.baseOutPut.production++;

    //宫殿
    this.baseOutPut.production += 3;

    //粮仓
    if (this.granary) this.baseOutPut.food += 2;

    //水车
    if (this.watermill) {
      this.baseOutPut.food += 2;
      this.baseOutPut.production += 1;
    }
  }

  surplusGrain2Production(grain: number) {
    if (grain < 0) return 0;
    if (grain <= 2) return grain;
    if (grain <= 4) return 2 + (grain - 2) / 2.0;
    else return 3 + (grain - 4) / 4.0;
  }

  combine(index: number, begin: number, container: LandOutPut[]) {
    let combineString = "";
    if (index == this.citizens) {
      for (let i = 0; i < this.citizens; i++) {
        combineString += container[i].description;
        combineString += " ";
      }
      console.log(combineString);
      return;
    }
    for (let j = begin; j < this.landList.length - this.citizens + index; j++) {
      container[index] = {
        index: this.landList[j].index,
        description: this.landList[j].description,
        food: this.landList[j].food,
        production: this.landList[j].production,
        gold: this.landList[j].gold,
      };
      this.combine(index + 1, j + 1, container);
    }
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
  margin-left: 5px;
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
.img-switch {
  width: 32px;
  height: 32px;
  vertical-align: middle;
}
.goldenAge-img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.el-row {
  margin-bottom: 10px;
}
.img-table {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.add-img,
.remove-img {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
.el-input {
  height: 24px;
}
</style>
