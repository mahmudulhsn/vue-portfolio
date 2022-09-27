
<template>
  <div
    class="
      home-page
      flex
      items-center
      justify-center
      text-white
      bg-no-repeat bg-cover
    "
  >
    <div class="text-center">
      <h1 class="text-xl mb-10">Hello</h1>
      <h1 class="text-5xl">I Am A UI/UX Designer.</h1>
      <ul class="flex mt-10 justify-center skills">
        <li class="px-3 py-2">App Design</li>
        <li class="px-3 py-2">Saas Design</li>
        <li class="px-3 py-2">Website Design</li>
      </ul>

      <div class="text-center mt-5">
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<script>
import SocialIcons from "../components/SocialIcons.vue";
export default {
  components: {
    SocialIcons,
  },
};
</script>

<style scoped>
.skills li:not(:last-child):after {
  font-weight: lighter;
  content: "\25CF";
  color: #eeeeee;
  margin-left: 16px;
}
/* .home-page {
  background: url("../../src/assets/img/bg.svg");
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.8) 34.37%,
    rgba(0, 0, 0, 0.2) 100%
  );
} */
.home-page {
  width: 100%;
  height: 100vh;
  min-width: 100%;
  min-height: 100%;
  position: relative;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.8) 34.37%,
    rgba(0, 0, 0, 0.2) 100%
  );
}

.home-page::before {
  background-image: url("../../src/assets/img/bg-homepage.svg");
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

@media (max-width: 640px) {
  .skills {
    font-size: 14px;
  }
}
</style>