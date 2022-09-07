<template>
  <div id="shell">
    <label>时代</label>
    <GSelect
      color="white"
      :optionArray="eraArray"
      @selectedOptionChanged="eraChanged"
    ></GSelect>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import GSelect from "./common/GSelect.vue";
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
      eraArray: [
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
  props: {},
})
export default class UnitPicker extends Vue {
  eraArray!: [];
  eraChanged(item: selectedItem) {
    console.log(item);
  }
}
</script>
