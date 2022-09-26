<template>
  <div>
    <el-row>
      <!-- attack -->
      <el-col :span="12">
        <div>
          <EUnitPicker></EUnitPicker>
        </div>
      </el-col>

      <!-- defense -->
      <el-col :span="12">
        <div>
          <EUnitPicker></EUnitPicker>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EUnitPicker from "@/components/EUnitPicker.vue";
@Options({
  components: {
    EUnitPicker,
  },
})
export default class BattleDamage extends Vue {}
</script>

<style lang="scss"></style>
