<template>
  <div
    class="icon-source"
    :class="className"
    :style="iconStyle"
    v-html="require(`../assets/${name}.svg?raw`)"
  />
</template>

<script lang="js">
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    height: {
      type: Number,
      default: 20
    },
    width: {
      type: Number,
      default: 20
    },
    fill: {
      type: String,
      default: '#333'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconStyle() {
      return {
        '--height': this.height + 'px',
        '--width': this.width + 'px'
      }
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
    fill: #333
</style>
