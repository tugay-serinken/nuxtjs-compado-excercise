<template>
  <div class="product-search-wrapper">
    <Header />
    <div class="product-search-content">
      <Sidebar />
      <ProductList />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import ProductList from '../components/ProductList.vue'

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
  },
  components: { Header, Sidebar, ProductList }
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

:root, #__nuxt, #__layout
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
