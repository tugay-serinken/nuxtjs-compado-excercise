<template>
  <div class="filter-button">
    <p>Hide</p>
    <FilterIcon
      class="filter-icon"
      name="sorting_options"
      style="height:10px; width:10px"
    />
  </div>
</template>

<script lang="ts">
import FilterIcon from './Icon.vue'

export default {
  components: { FilterIcon }
}
</script>

<style lang="sass" scoped>
.filter-button
  display: flex
  justify-content: center
  align-items: center
  height: 30px
  padding-right: 50px
  @media (max-width: 1400px)
      p
          display: none

  p
      font-size: 16px
      padding-right: 8px

  &:hover
      cursor: pointer

.filter-icon
  display: flex
</style>
