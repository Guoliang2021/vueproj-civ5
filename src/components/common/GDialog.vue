<template>
  <div v-show="showDialog">
    <div class="g_dialog_mask"></div>
    <div class="g_dialog_shell">
      <div class="g_dialog_header">
        <span>{{ title }}</span>
        <a class="g_dialog_cancel" @click="$emit('cancel')">取消</a>
        <a class="g_dialog_confirm" @click="$emit('confirm')">确认</a>
      </div>
      <div class="g_dialog_body">
        <div class="body">这条是消息</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "GDialog",
  props: {
    showDialog: Boolean,
    title: String,
  },
};
</script>

<style lang="scss">
.g_dialog_mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(167, 165, 165, 0.486);
  opacity: 0.5;
  z-index: 9;
}
.g_dialog_shell {
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  height: 80%;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 10;
}
.g_dialog_header {
  position: relative;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  line-height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgb(177, 176, 176);
}
.g_dialog_body {
  height: 150px;
  line-height: 150px;
  font-size: 28px;
  text-align: center;
  background-color: #fff;
}
.g_dialog_cancel {
  position: absolute;
  font-size: 15px;
  left: 5px;
  top: 16px;
  width: 30px;
  height: 30px;
  z-index: 10;
  color: red;
}
.g_dialog_confirm {
  position: absolute;
  font-size: 15px;
  right: 15px;
  top: 16px;
  width: 30px;
  height: 30px;
  z-index: 10;
  color: rgba(4, 155, 4, 0.801);
}
</style>
