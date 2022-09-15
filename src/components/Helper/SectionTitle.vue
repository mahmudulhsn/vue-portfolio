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

<style scoped>
@media (max-width: 640px) {
  h1 {
    text-align: center;
  }
}
</style>