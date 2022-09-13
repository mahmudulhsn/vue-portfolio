<template>
  <div v-for="project in projects" :key="project.id">
    <PersonalProjectDetails :project="project" />
  </div>
</template>

<script>
import PersonalProjectDetails from "./PersonalProjectDetails.vue";
export default {
  props: {
    projects: {
      type: Array,
      default: [],
    },
  },

  components: {
    PersonalProjectDetails,
  },
};
</script>
