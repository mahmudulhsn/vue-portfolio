<template>
  <div class="relative portfolio-details">
    <div class="single-portfolio">
      <img
        class="m-auto mb-6 border p-1 rounded-3xl w-full"
        :src="portfolio.image"
        alt=""
      />
    </div>

    <div
      class="
        overlay
        absolute
        top-5
        left-5
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
  width: 89%;
  height: 85%;
}
.portfolio-details:hover .overlay {
  visibility: visible;
}

@media (max-width: 1370px) {
  .overlay {
    width: 82%;
    height: 80%;
  }
}

@media (max-width: 770px) {
  .single-portfolio {
    width: 100%;
  }
  .portfolio-details {
    width: 80%;
    margin: auto;
  }
  .overlay {
    width: 93%;
    height: 92%;
  }
}

@media (max-width: 640px) {
  .portfolio-details {
    width: 74%;
    margin: auto;
  }
  .overlay {
    width: 90%;
    height: 86%;
  }
}
</style>