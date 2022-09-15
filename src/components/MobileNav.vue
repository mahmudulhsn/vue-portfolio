<template>
  <div
    class="
      mobile-menu
      flex
      fixed
      justify-center
      items-center
      h-screen
      bg-slate-800
      right-0
      w-48
      text-white text-center
    "
    v-if="openMobileMenu"
  >
    <ul class="mt-20">
      <li>
        <router-link to="/"> <span>Home</span> </router-link>
      </li>
      <li>
        <router-link to="/about"><span>About</span></router-link>
      </li>
      <li>
        <router-link to="/services"><span>Service</span> </router-link>
      </li>
      <li>
        <router-link to="/portfolio"><span>Portfolio</span></router-link>
      </li>
      <li>
        <router-link to="/client"><span>Client</span></router-link>
      </li>
      <li>
        <router-link to="/contact"><span>Contact</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    openMobileMenu: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  scoped>
</style>