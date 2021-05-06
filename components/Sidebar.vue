<template>
  <div :class="[isSidebarOpen ? 'sidebar-wrapper' : 'sidebar-hidden']">
    <h3 class="sidebar-title">FILTER SELECTION</h3>
    <span class="sidebar-label">PRICE</span>
    <PriceRangePicker />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import PriceRangePicker from './PriceRangePicker.vue';

@Component({
  components: { PriceRangePicker },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }
  }
})
export default class Sidebar extends Vue {}
</script>

<style lang="sass" scoped>
.sidebar-wrapper
  width: 25%
  padding: 20px
  overflow: hidden
  transition: 0.5s
  white-space: nowrap
  border-right: #ddd solid 1px
  flex: 0 0 auto
  @media (max-width: 920px)
    width: 80%

  .sidebar-title
    padding-bottom: 20px
    border-bottom: 1px dashed #cccccc

.sidebar-hidden
  width: 0px
  padding: 20px 0px
  overflow: hidden
  transition: 0.5s
  white-space: nowrap
  border-right: #ddd solid 1px
  flex: 0 0 auto
  @media (max-width: 920px)
    width: 0px
</style>
