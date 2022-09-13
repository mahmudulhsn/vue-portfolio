<template>
  <p class="w-full text-center text-bold">
    {{ subHeading }}
  </p>
</template>

<script>
export default {
  props: {
    subHeading: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>