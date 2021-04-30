<template>
  <div class="product-search-wrapper">
    <Header />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head() {
    return {
      title: 'Search Products',
      meta: [
        {
          hid: 'description',
          name: 'decription',
          content:
            'In this exercise I will focus only on the frontend side with Vue and create a small service, which connects the ebay product feed and provides an interface to get product data.'
        }
      ]
    }
  }
})
export default class ProductSearch extends Vue {}
</script>

<style lang="sass">
html,body
    height: 100%
    margin: 0px
    padding: 0px

div, a, p, span
    font-family: 'Krub', sans-serif
    line-height: normal

a
    text-decoration: none

#root
    height: 100%
</style>

<style lang="sass" scoped>

.product-search-wrapper
    height: 100%
    display: flex
    flex-direction: column
    a
        color: #333333
    .product-search-content
        display: flex
        height: 100%
        overflow: hidden
</style>
