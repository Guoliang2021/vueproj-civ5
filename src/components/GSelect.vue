<template>
  <div>
    <input readonly v-model="selectedName" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
  computed: {
    selectedName() {
      return "xmbo";
    },
  },
})
export default class GSelect extends Vue {
  selectedName = undefined;
}
</script>

<style lang="scss">
h1 {
  font: size 19px;
}
</style>
