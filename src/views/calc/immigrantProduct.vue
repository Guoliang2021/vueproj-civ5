<template>
  <div id="imm">
    <div v-for="item in items" :key="item.index">
      <img :src="item.src" :v-if="item.visible" @click="onClicked" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class ImmigrantProduct extends Vue {
  items = [
    {
      src: require("../../assets/icons/BUILDING_AIRPORT.png"),
      index: 1,
      visible: false,
    },
    {
      src: require("../../assets/icons/BUILDING_ARSENAL.png"),
      index: 2,
      visible: false,
    },
    {
      src: require("../../assets/icons/BUILDING_BANK.png"),
      index: 3,
      visible: true,
    },
  ];
  onClicked() {
    this.items.pop();
  }
}
</script>
