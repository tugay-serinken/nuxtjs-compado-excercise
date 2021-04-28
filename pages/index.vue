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
import Vue from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import ProductList from "../components/ProductList.vue";

export default Vue.extend({
  components: { Header, Sidebar, ProductList }
});
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
