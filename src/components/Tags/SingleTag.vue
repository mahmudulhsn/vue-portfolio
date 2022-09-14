<template>
  <span
    class="
      tag
      px-3
      py-2
      border border-white
      rounded-2xl
      leading-loose
      cursor-pointer
      box-border
    "
    >{{ tag.name }}</span
  >
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      default: "",
    },
  },
};
</script>

<style>
.tag:hover {
  color: #2d373d;
  background: #ff9e2b;
  border: 1px solid #ff9e2b;
}
</style>