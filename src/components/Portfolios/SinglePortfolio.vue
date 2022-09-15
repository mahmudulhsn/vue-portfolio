<template>
  <div class="relative portfolio-details">
    <div class="single-portfolio">
      <img
        class="m-auto mb-6 border p-1 rounded-3xl"
        :src="portfolio.image"
        alt=""
      />
    </div>

    <div
      class="
        overlay
        w-72
        h-52
        absolute
        top-6
        left-6
        rounded-2xl
        flex flex-col
        justify-center
        items-center
      "
    >
      <a
        href="#"
        class="px-4 py-2 border border-default rounded-2xl text-default"
        >View Project</a
      >
      <h3 class="mt-4">{{ portfolio.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    portfolio: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.overlay {
  /* display: block; */
  visibility: hidden;
  background: rgba(0, 0, 0, 0.8);
}
.portfolio-details:hover .overlay {
  visibility: visible;
}
</style>