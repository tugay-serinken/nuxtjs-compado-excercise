<template>
  <div class="pd-list-wrapper">
    <h2 class="pd-list-title">message</h2>
    <div class="pd-list-grid">
      <ProductCard />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard
  }
};
</script>

<style lang="sass" scoped>
.pd-list-wrapper
    flex: 1 1 auto
    height: 100%
    overflow: hidden
    overflow-y: scroll
    .pd-list-title
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

    .pd-list-grid
        display: flex
        flex-wrap: wrap
        padding-right: 100px
        padding-left: 100px
        padding-bottom: 70px
</style>
