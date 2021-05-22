<template>
  <div class="loading-wrapper">
    <LoadingIcon
      class-name="loading-icon"
      width="200px"
      :height="height"
      name="loading"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import LoadingIcon from './Icon.vue'

@Component({
  components: { LoadingIcon }
})
export default class LoadingIndicator extends Vue {
  @Prop({ default: '200px' }) height!: string
}
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
