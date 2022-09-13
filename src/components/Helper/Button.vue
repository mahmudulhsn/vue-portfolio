<template>
  <button :class="extraClass">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>