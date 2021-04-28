<template>
  <div class="container">
    <h1 class="title">Hello from VietKen Tech</h1>
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

<style lang="sass" scoped>
.container
  display: flex
  .title
    color: #333
    font-style: oblique
</style>
