<template>
  <div
    class="
      mt-10
      grid
      xl:grid-cols-3
      lg:grid-cols-2
      md:grid-cols-2
      sm:grid-cols-1
      lg:gap-8
      md:gap-4
    "
  >
    <div v-for="portfolio in portfolios" :key="portfolio.id">
      <SinglePortfolio :portfolio="portfolio" />
    </div>
  </div>
</template>

<script>
import SinglePortfolio from "./SinglePortfolio.vue";
export default {
  components: {
    SinglePortfolio,
  },
  props: {
    portfolios: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>