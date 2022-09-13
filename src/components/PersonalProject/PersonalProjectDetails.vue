<template>
  <div class="flex mt-10">
    <div class="w-2/12 text-sm mt-2">
      <span class="date px-3 py-2 rounded-2xl">{{ project.date }}</span>
    </div>
    <div class="w-10/12">
      <div class="project-info">
        <h1 class="text-2xl font-bold">
          {{ project.projectInfo.projectName }}
        </h1>
        <h4 class="text-sm">Role: {{ project.projectInfo.position }}</h4>
        <h4 class="text-sm">
          {{ project.projectInfo.website }}
        </h4>
      </div>
      <div class="project-details mt-6">
        <h1 class="text-xl mb-2">Project Details</h1>
        <ul
          class="list-disc ml-4 text-sm"
          v-for="projectDetail in project.projectDetails"
          :key="projectDetail.key"
        >
          <li>{{ projectDetail.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
.date {
  background: rgba(255, 255, 255, 0.1);
}
</style>