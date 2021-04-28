<template>
  <Slider v-model="value" />
</template>

<script>
import Slider from "@vueform/slider";

export default {
  components: { Slider },
  data: () => ({
    value: [0, 1000]
  })
};
</script>

<style lang="sass" scoped></style>
