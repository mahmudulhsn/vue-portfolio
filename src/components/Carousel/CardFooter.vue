<template>
  <div class="card-stats">
    <div v-for="(item, index) in info" :key="index" class="one-third">
      <div class="stat-value">{{ item.value }}</div>
      <div class="stat">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array,
      required: true,
    },
  },
};
</script>