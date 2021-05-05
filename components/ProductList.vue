<template>
  <div v-if="isLoading" class="product-list-wrapper">
    <LoadingIndicator />
  </div>

  <div v-else class="product-list-wrapper">
    <h2 class="product-list-title">message</h2>
    <div class="product-list-grid">
      <ProductCard />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import ProductCard from "./ProductCard.vue";
import LoadingIndicator from "./LoadingIndicator.vue";
@Component({
  components: { ProductCard, LoadingIndicator },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  }
})
export default class ProductList extends Vue {}
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
