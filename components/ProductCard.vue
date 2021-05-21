<template>
  <div class="product-card-wrapper">
    <div class="product-card-container">
      <img
        class="product-card-image"
        :src="url ? url : require(`~/assets/default-image.png`)"
      />
      <div class="product-card-detail">
        <h3 class="product-card-title">{{ title }}</h3>
        <p class="product-card-price">
          {{ currency + price.toFixed(2).split('.')[0]
          }}<span>.{{ price.toFixed(2).split('.')[1] }}</span>
        </p>
        <a
          class="product-card-view-button"
          :href="thumbnailUrl"
          target="_blank"
        >
          <ViewIcon class="product-card-view-icon" name="visible" />
          <p>View</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import ViewIcon from './Icon.vue'

@Component({
  components: { ViewIcon }
})
export default class ProductCard extends Vue {
  @Prop({ default: 'No Name' }) readonly title!: string
  @Prop({ default: 0 }) price!: number
  @Prop({ default: '$' }) readonly currency!: string
  @Prop({ default: '' }) readonly viewItemURL!: string
  @Prop({ default: '' }) readonly url!: string
  @Prop({ default: '' }) readonly thumbnailUrl!: string
}
</script>

<style lang="sass" scoped>
@keyframes ShowAnimation
  0%
    opacity: 0
    transform: translateY(-20px)

  100%
    opacity: 1

.product-card-wrapper
  padding: 30px
  width: 28%
  @media (max-width: 1400px)
    width: 38%

  @media (max-width: 920px)
    width: 86%

.product-card-container
  padding: 4px
  display: flex
  flex-direction: column
  justify-content: space-between
  border: 1px solid #ddd
  border-radius: 4px
  animation-name: ShowAnimation
  animation-duration: 150ms
  animation-delay: 150ms
  opacity: 0
  animation-fill-mode: forwards
  height: 100%
  &:hover
    border: 1px solid #333
    a
      opacity: 1

.product-card-image
  object-fit: scale-down
  max-height: 325px

.product-card-detail
  padding: 10px
  position: relative
  .product-card-title
    font-size: 20px
    font-weight: 600
    margin: 0px 0
    padding: 6px 0px 32px 0
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    font-weight: bold
  .product-card-price
    padding-top: 10px
    padding-bottom: 10px
    margin: 0px
    font-weight: 500
    font-size: 20px
    span
      font-size: 12px
      line-height: 23px
      vertical-align: text-top

.product-card-view-button
  position: absolute
  bottom: 20px
  right: 10px
  border: solid 1px #333
  padding: 10px 20px
  display: flex
  justify-content: center
  align-items: center
  height: 30px
  opacity: 0
  p
    padding-left: 8px
  &:hover
    cursor: pointer
    color: #fff
    background-color: #333

.product-card-view-icon
    display: flex
</style>

<style lang="sass">
.product-card-view-button
  &:hover
    path
      fill: #fff
</style>
