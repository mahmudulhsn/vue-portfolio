<template>
  <div class="grid grid-cols-3 gap-8">
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