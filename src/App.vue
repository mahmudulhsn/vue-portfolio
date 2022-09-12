<template>
  <div
    class="
      flex
      h-screen
      bg-no-repeat bg-cover bg-[url('../src/assets/img/bg.svg')]
    "
  >
    <div class="main-content">
      <RouterView />
    </div>

    <div class="menu bg-menu-bg flex flex-col justify-between py-16">
      <div>
        <Menu />
      </div>
      <div><Copyright /></div>
    </div>
  </div>
</template>

<script >
import Menu from "./components/Menu.vue";
import Copyright from "./components/Copyright.vue";
export default {
  components: {
    Menu,
    Copyright,
  },
};
</script>


<style scope>
.main-content {
  width: 94%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.8) 34.37%,
    rgba(0, 0, 0, 0.2) 100%
  );
}
.menu {
  width: 6%;
  border-radius: 35px 0px 0px 35px;
}
</style>
