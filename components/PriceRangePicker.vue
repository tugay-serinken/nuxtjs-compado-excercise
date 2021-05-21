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
      <span>${{ selectedRange[0] }}</span>
      <span>${{ selectedRange[1] }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// @ts-ignore
import RangePicker from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/material.css'
import { Product } from '~/types'

@Component({
  components: { RangePicker },
  computed: {
    selectedRange: {
      get() {
        return this.$store.state.selectedRange
      },
      set(value) {
        this.$store.commit('handleSelectedRange', value)
      }
    },
    products(): Product[] {
      return this.$store.getters.filteredProducts
    }
  }
})
export default class PriceRangePicker extends Vue {
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
