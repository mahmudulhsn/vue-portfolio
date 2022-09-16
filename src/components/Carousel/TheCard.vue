<template>
  <div class="card flex flex-col">
    <div class="">
      <h1>Title</h1>
      <p>
        “ Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget
        tincidunt nisi ridiculus. Lorem ipsum dolor sit amet consectetur
        adipiscing elit. tincidunt. Lorem ipsum dolor sit amet consectetur
        adipiscing elit. tincidunt Eget tincidunt nisi ridiculus. Lorem ipsum
        dolor sit amet consectetur adipiscing elit. tincidunt. “
      </p>
      <div>rating</div>
    </div>
    <div>
      <img src="" alt="" />
      <div>
        <h3>POsition</h3>
        <h1>Client Name</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style scoped>
.card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
}
</style>
