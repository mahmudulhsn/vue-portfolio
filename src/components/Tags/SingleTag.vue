<template>
  <span
    @click="findByTagName(tag.name)"
    class="
      tag
      px-3
      py-2
      my-2
      border border-white
      rounded-2xl
      leading-loose
      cursor-pointer
      box-border
    "
    :class="{ active: tag.name == currentTag }"
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
    currentTag: {
      type: String,
      default: "All",
    },
  },
  methods: {
    findByTagName(tagName) {
      this.emitter.emit("filteredPortfolio", tagName);
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
.tag {
  bottom: 10;
}

.active {
  color: #2d373d;
  background: #ff9e2b;
  border: 1px solid #ff9e2b;
}
</style>