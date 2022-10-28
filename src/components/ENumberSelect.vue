<template>
  <el-select
    v-model="currentNumber"
    placeholder="0"
    size="small"
    @change="onValueChange"
  >
    <el-option
      v-for="option in options"
      :key="option.value"
      :label="option.label"
      :value="option.value"
    ></el-option>
  </el-select>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { reactive } from "vue";
@Options({
  props: {
    minNumber: Number,
    maxNumber: Number,
    step: Number,
  },
})
export default class ENumberSelect extends Vue {
  minNumber!: number;
  maxNumber!: number;
  step!: number;
  currentNumber = 0;
  options: {
    value: number;
    label: string;
  }[] = reactive([]);
  created() {
    this.initOptions();
  }
  initOptions() {
    this.options = [];
    for (let i = this.minNumber; i <= this.maxNumber; i += this.step) {
      var string = i.toString();
      let option = { value: i, label: string };
      this.options.push(option);
    }
  }
  onValueChange(value: number) {
    this.currentNumber = value;
    this.$emit("numberChange", this.currentNumber);
  }
}
</script>

<style>
.el-select--small {
  max-width: 50px;
}
</style>
