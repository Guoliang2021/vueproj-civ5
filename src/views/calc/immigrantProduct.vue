<template>
  <div id="imm">
    <EPromotionBox></EPromotionBox>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import EPromotionBox from "@/components/EPromotionBox.vue";
@Options({
  components: { EPromotionBox },
})
export default class ImmigrantProduct extends Vue {}
</script>
