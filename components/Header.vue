<template>
  <div class="header-wrapper">
    <FilterButton />
    <ProductSearchbar />
  </div>
</template>

<script lang="ts">
import FilterButton from "./FilterButton.vue";
import ProductSearchbar from "./ProductSearchbar.vue";
export default {
  components: { FilterButton, ProductSearchbar }
};
</script>

<style lang="sass" scoped>
.header-wrapper
    flex: 0 0 auto
    z-index: 1
    display: flex
    height: 72px
    padding-right:130px
    padding-left: 130px
    align-items: center
    justify-content: space-between
    box-shadow: 3px 2px 5px 0px #ccc
</style>
