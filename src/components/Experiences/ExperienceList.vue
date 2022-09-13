<template>
  <div v-for="experience in experiences" :key="experience.id">
    <ExperienceDetails :experience="experience" />
  </div>
</template>

<script>
import ExperienceDetails from "./ExperienceDetails.vue";
export default {
  props: {
    experiences: {
      type: Array,
      default: [],
    },
  },

  components: {
    ExperienceDetails,
  },
};
</script>
