<template>
  <h1 class="text-4xl mb-2">{{ title }}</h1>
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