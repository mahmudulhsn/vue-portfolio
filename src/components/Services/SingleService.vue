<template>
  <div
    class="
      service
      my-5
      flex flex-col
      justify-center
      items-center
      text-center
      py-10
      px-5
      cursor-pointer
    "
  >
    <div class="service-icon"><img :src="service.icon" alt="Logo" /></div>
    <h1 class="text-lg my-4 font-bold">{{ service.title }}</h1>
    <p class="text-sm">{{ service.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style  scoped>
.service {
  border: 1px solid #ffffff;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(238, 238, 238, 0.9);
  width: 100%;
}
.service:hover {
  color: #2d373d;
  border: none;
  background: #ff9e2b;
}
</style>