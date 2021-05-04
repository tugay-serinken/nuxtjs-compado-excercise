<template>
  <div
    class="icon-source"
    :class="className"
    :style="iconStyle"
    v-html="require(`../assets/${name}.svg?raw`)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop({ default: '', required: true }) name!: string
  @Prop({ default: 20 }) readonly height!: number
  @Prop({ default: 20 }) readonly width!: number
  @Prop({ default: '#333' }) fill!: string
  @Prop({ default: '' }) className!: string

  get iconStyle() {
    return {
      '--height': this.height + 'px',
      '--width': this.width + 'px',
      '--fill': this.fill
    }
  }
}
</script>

<style lang="sass">
.icon-source
  line-height: 0
  svg
    height: var(--height)
    width: var(--width)
  path
    fill: var(--fill)
</style>
