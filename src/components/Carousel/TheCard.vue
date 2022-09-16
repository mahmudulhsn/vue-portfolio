<template>
  <div class="card flex flex-col mt-8">
    <div class="card-head flex flex-col">
      <h1>
        <span class="float-left border-b leading-loose">
          Via {{ item.media }}</span
        >
      </h1>
      <p class="my-8">"{{ item.comments }}"</p>
      <div class="rating">
        <span class="float-right">
          <span v-for="rating in 5" :key="rating">
            <span v-if="rating <= item.rating" class="text-default mr-1"
              ><i class="fa-solid fa-star"></i
            ></span>
            <span v-else><i class="fa-solid fa-star"></i></span>
          </span>
        </span>
      </div>
    </div>

    <div class="client-info flex items-end space-x-6">
      <img :src="item.img" alt="" />
      <div class="flex flex-col items-start">
        <h3>{{ item.position }}</h3>
        <h1>{{ item.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
.card-head {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
}
.client-info {
  padding: 10px;
  margin-top: -45px;
}
</style>
