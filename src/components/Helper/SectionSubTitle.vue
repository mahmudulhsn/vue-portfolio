<template>
  <p>{{ subTitle }}</p>
</template>

<script>
export default {
  props: {
    subTitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>