<template>
  <div class="price-range-wrapper">
    <p class="picked-range-text">
      ${{ selectedRange[0] }} - ${{ selectedRange[1] }}
    </p>
    <RangePicker
      v-model="selectedRange"
      :max="max"
      :min="min"
      tooltip-formatter="${value}"
      :dot-options="dotOptions"
      :rail-style="railStyle"
    />
    <div class="range-text-wrapper">
      <span>$0</span>
      <span>$1000</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import RangePicker from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/material.css'

@Component({
  components: { RangePicker }
})
export default class PriceRangePicker extends Vue {
  selectedRange: [number, number] = [0, 1000]
  railStyle: object = { backgroundColor: 'rgba(51, 51, 51, 0.3)' }
  max: number = 1000
  min: number = 0
  dotOptions: object = {
    tooltipStyle: {
      backgroundColor: '#333'
    },
    style: {
      backgroundColor: '#333'
    }
  }
}
</script>

<style lang="sass" scoped>
.price-range-wrapper
  margin: 10px 0

  .picked-range-text
    text-align: center
    margin: 0
    padding-top: 4px

  .range-text-wrapper
    display: flex
    justify-content: space-between
    font-size: 14px
    color: #777
    padding-top: 8px
</style>

<style lang="sass">
.vue-slider-process
  background-color: #333

.vue-slider-dot-handle
  &::after
    background-color: rgba(51, 51, 51, 0.3)
</style>
