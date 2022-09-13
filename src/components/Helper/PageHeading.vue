<template>
  <h1 class="w-full text-center mb-6 text-bold text-4xl">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>