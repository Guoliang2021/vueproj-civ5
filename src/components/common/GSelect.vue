<!--
 自定义下拉框选择组件
 调用者通过props中定义的optionArray属性动态修改被选择项
 optionArray的结构形式按照 /src/types/common.ts-TypeGSelectItem定义
  组件输出信号 selectedOptionChanged,参数为被选择项的TypeGSelectItem结构
-->
<template>
  <div class="g_select_wrap">
    <input
      :class="['g_select_input f16', color === 'blue' ? '' : 'white_color']"
      readonly
      @click="onClick"
      @blur="onBlur"
      v-model="selectedOptionName"
    />
    <div
      :class="['triangle_down', { rotation: rotate }]"
      @click="onClick"
    ></div>
    <div
      :class="['g_options_panel f16', showOptions ? 'show' : 'hidden']"
      :style="`height: ${optionArray}.length * 40}px;`"
    >
      <p
        class="g_option"
        v-for="item in optionArray"
        :key="item.id"
        @mousedown="getValue(item)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TypeGSelectItem } from "../../types/commonType";
@Options({
  props: {
    //需要通过父组件传递的参数得在props里面声明
    color: String,
    optionArray: Array,
  },
})
export default class GSelect extends Vue {
  rotate = false;
  showOptions = false;
  selectedOptionName = "";
  color!: string;
  optionArray!: [TypeGSelectItem];
  getValue(item: TypeGSelectItem) {
    this.showOptions = false;
    if (this.selectedOptionName != item.name) {
      this.selectedOptionName = item.name;
      this.$emit("selectedOptionChanged", item);
    }
  }
  onClick() {
    this.rotate = !this.rotate;
    this.showOptions = !this.showOptions;
  }
  onBlur() {
    this.rotate = false;
    this.showOptions = false;
  }
  created() {
    this.selectedOptionName = this.optionArray[0].name;
    this.$emit("selectedOptionChanged", this.optionArray[0]);
  }
}
</script>

<style lang="scss">
.g_select_wrap {
  width: 135px;
  height: 40px;
  line-height: 40px;
  position: relative;
  .g_select_input {
    width: 105px;
    background: #3a79ee;
    color: #ffffff;
    box-shadow: 0px 10px 20px 0px rgba(144, 119, 222, 0.2);
    border-radius: 20px;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    cursor: pointer;
    border: none;
    z-index: 1;
  }
  .white_color {
    background: #ffffff;
    color: #3a79ee;
    z-index: 1;
  }
  .triangle_down {
    // 下三角样式
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #66ccff;
    position: absolute;
    top: 18px;
    right: 15px;
    transition: transform 0.1s ease-in-out;
    z-index: 1;
  }
  .rotation {
    transform: rotate(180deg);
  }
  .g_options_panel {
    position: absolute;
    z-index: 2;
    background: #ffffff;
    border-radius: 8px;
    width: 133px;
    border: 1px solid #e3e3e3;
    top: 46px;
    left: 0;
    color: #706f94;
    .g_option {
      padding: 0 15px;
      cursor: pointer;
    }
    .g_option:hover {
      color: #3a79ee;
      background: #eef1fa;
    }
  }
  .show {
    display: block;
  }
  .hidden {
    display: none;
  }
}
</style>
