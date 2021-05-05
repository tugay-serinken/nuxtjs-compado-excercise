<template>
  <div class="filter-button" @click="TOGGLE_SIDEBAR(isSidebarOpen)">
    <p>{{ isSidebarOpen ? "Hide" : "Show" }}</p>
    <Icon class="filter-icon" name="sorting_options" />
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { Component, Vue } from "nuxt-property-decorator";

import Icon from "./Icon.vue";
@Component({
  components: {
    Icon
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.isSidebarOpen;
    }
  },
  methods: {
    ...mapMutations({
      TOGGLE_SIDEBAR: "handleToggleSidebar"
    })
  }
})
export default class FilterButton extends Vue {}
</script>

<style lang="sass" scoped>
.filter-button
  display: flex
  justify-content: center
  align-items: center
  height: 30px
  padding-right: 50px
  @media (max-width: 1400px)
    p
      display: none

  p
    font-size: 16px
    padding-right: 8px

  &:hover
      cursor: pointer

.filter-icon
  display: flex
</style>
