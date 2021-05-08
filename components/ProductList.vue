<template>
  <div class="product-list-wrapper">
    <div v-show="isLoading">
      <LoadingIndicator />
    </div>
    <div v-show="!isLoading">
      <h2 v-show="products.length > 0" class="product-list-title">
        Show all {{ products.length }} results
      </h2>
      <h2
        v-show="searchText.length > 1 && products.length === 0"
        class="product-list-title"
      >
        No items found
      </h2>
      <h2 v-show="searchText.length < 2" class="product-list-title">
        Please enter the product which you are looking for
      </h2>
      <div class="product-list-grid">
        <ProductCard />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Product } from '../types'
import ProductCard from './ProductCard.vue'
import LoadingIndicator from './LoadingIndicator.vue'

@Component({
  components: { ProductCard, LoadingIndicator },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  }
})
export default class ProductList extends Vue {
  products: Array<Product> = []
  searchText: string = ''
}
</script>

<style lang="sass" scoped>
.product-list-wrapper
  flex: 1 1 auto
  height: 100%
  overflow: hidden
  overflow-y: scroll
  .product-list-title
    font-size: 24px
    font-weight: bold
    text-transform: uppercase
    padding-right: 130px
    padding-left: 130px
    padding-top: 30px
    @media (max-width: 920px)
      font-size: 16px
    @media (max-width: 1400px)
      font-size: 20px

  .product-list-grid
    display: flex
    flex-wrap: wrap
    padding-right: 100px
    padding-left: 100px
    padding-bottom: 70px
</style>
