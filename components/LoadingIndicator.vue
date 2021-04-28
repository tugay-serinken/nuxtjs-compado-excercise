<template>
  <div class="loading-wrapper">
    <LoadingIcon
      class-name="loading-icon"
      style="--width:200px; --height:200px"
      name="loading"
    />
  </div>
</template>

<script>
import LoadingIcon from "./Icon.vue";
export default {
  components: { LoadingIcon }
};
</script>

<style lang="sass" scoped>
.loading-wrapper
    display: inherit
    flex-direction: inherit
    flex: inherit
    align-items: center
    justify-content: center
    height: inherit
    width: inherit

.loading-icon
    align-items: center
    justify-content: center
    display: flex
    height: 100%
</style>
