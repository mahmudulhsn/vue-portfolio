<template>
  <div
    class="
      grid
      xl:grid-cols-3
      lg:grid-cols-2
      md:grid-cols-2
      sm:grid-cols-1
      lg:gap-8
      md:gap-4
    "
  >
    <div v-for="service in services" :key="service.id">
      <SingleService :service="service" />
    </div>
  </div>
</template>

<script>
import SingleService from "./SingleService.vue";
export default {
  props: {
    services: {
      type: Array,
      default: [],
    },
  },
  components: {
    SingleService,
  },
};
</script>

<style lang="scss" scoped>
</style>