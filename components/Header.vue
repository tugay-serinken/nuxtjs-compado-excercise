<template>
  <div class="wrapper">
    <FilterButton />
    <ProductSearchbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FilterButton from './FilterButton.vue'
import ProductSearchbar from './ProductSearchbar.vue'

@Component({
  components: { FilterButton, ProductSearchbar }
})
export default class Header extends Vue {}
</script>

<style lang="sass" scoped>
.wrapper
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
