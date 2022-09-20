<template>
  <div class="model" v-show="showModel">
    <div class="mask">123</div>
    <div class="model_dialog">
      <div class="model_header">
        <span>提示</span>
        <a href="javascript:;" class="icon_close"></a>
      </div>
      <div class="model_body">
        <div class="body">这条是消息</div>
      </div>
      <div class="model_footer">
        <button class="btn">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "GDialog",
  props: {
    showModel: Boolean,
  },
};
</script>

<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(167, 165, 165, 0.486);
  opacity: 0.5;
  z-index: 9;
}
.model_dialog {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  width: 60%;
  height: 50%;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  z-index: 10;
}
.model_header {
  position: relative;
  height: 50px;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 20px;
  line-height: 50px;
  background-color: #f5f5f5;
  border-bottom: 1px solid rgb(177, 176, 176);
}
.model_body {
  height: 150px;
  line-height: 150px;
  font-size: 28px;
  text-align: center;
  background-color: #fff;
}
.model_footer {
  background-color: #f5f5f5;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.btn {
  width: 180px;
  height: 40px;
  border-radius: 8px;
  background-color: rgb(180, 103, 103);
  color: #fff;
  font-size: 18px;
  border: none;
}
.icon_close {
  position: absolute;
  background-color: pink;
  right: 15px;
  top: 16px;
  width: 30px;
  height: 30px;
  z-index: 10;
}
</style>
