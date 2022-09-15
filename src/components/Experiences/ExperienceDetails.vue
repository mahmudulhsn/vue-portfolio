<template>
  <div class="experiences flex mt-10">
    <div class="time-duration w-2/12 text-sm mt-2">
      <span class="date px-3 py-2 rounded-2xl">{{ experience.date }}</span>
    </div>
    <div class="experience-details w-10/12">
      <div class="flex company-details">
        <div class="w-8/12">
          <h1 class="text-2xl font-bold">
            {{ experience.companyDetails.companyName }}
          </h1>
          <h4 class="text-sm">{{ experience.companyDetails.position }}</h4>
          <h4 class="text-sm">
            {{ experience.companyDetails.website }}
          </h4>
        </div>
        <div class="w-4/12 flex flex-col-reverse items-end text-sm">
          <span>{{ experience.place }}</span>
        </div>
      </div>
      <div class="achievements mt-6">
        <h1 class="text-xl mb-2">Achievements/Tasks</h1>
        <ul
          class="list-disc ml-4 text-sm"
          v-for="achievement in experience.achievements"
          :key="achievement.key"
        >
          <li>{{ achievement.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
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

@media (max-width: 1370px) {
  .time-duration {
    width: 25%;
  }
  .experience-details {
    width: 75%;
  }
}

@media (max-width: 640px) {
  .experiences {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
  .time-duration {
    width: auto;
  }
  .experience-details {
    width: 100%;
    margin-top: 30px;
  }
}
</style>