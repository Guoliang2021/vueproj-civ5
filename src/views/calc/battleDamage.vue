<template>
  <div id="bd-row">
    <GSelect
      color="white"
      :selectArray="selectArray"
      @itemSelected="itemSelected"
    ></GSelect>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GSelect from "@/components/GSelect.vue";
interface selectedItem {
  name: string;
  index: number;
}
@Options({
  components: {
    GSelect,
  },
  data() {
    return {
      selectArray: [
        {
          name: "远古",
          index: 1,
        },
        {
          name: "古典",
          index: 2,
        },
        {
          name: "中古",
          index: 3,
        },
        {
          name: "启蒙",
          index: 4,
        },
        {
          name: "工业",
          index: 5,
        },
        {
          name: "现代",
          index: 6,
        },
        {
          name: "核子",
          index: 7,
        },
        {
          name: "资讯",
          index: 8,
        },
      ],
    };
  },
  methods: {
    itemSelected(item: selectedItem) {
      console.log(item.name);
    },
  },
})
export default class BattleDamage extends Vue {}
</script>

<style lang="scss">
#bd-row {
  display: flex;
  flex-direction: column;
  margin: auto;
}
</style>
