<template>
  <div
    class="menu-icons text-3xl fixed right-4 top-4 z-50 text-white"
    v-if="mobileMenu"
  >
    <div
      v-if="!openMobileMenu"
      @click="toggleMobile"
      class="
        bg-default
        text-2xl
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-full
        cursor-pointer
      "
    >
      <i class="fa-solid fa-bars px-4 py-2"></i>
    </div>
    <div
      v-else
      @click="toggleMobile"
      class="
        bg-default
        text-2xl
        w-12
        h-12
        flex
        items-center
        justify-center
        rounded-full
        cursor-pointer
      "
    >
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propName: {
      type: openMobileMenu,
      default: false,
    },
  },
  data() {
    return {
      mobileMenu: false,
      openMobileMenu: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  methods: {
    toggleMobile() {
      this.openMobileMenu = !this.openMobileMenu;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1024) {
        this.mobileMenu = true;
        return;
      }
      this.mobileMenu = false;
      this.openMobileMenu = false;
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>