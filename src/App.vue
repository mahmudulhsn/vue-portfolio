<template>
  <div class="flex">
    <div class="main-content">
      <RouterView />
    </div>

    <div class="main-menu">
      <div class="menu h-screen flex flex-col bg-menu-bg">
        <div class="logo text-center mt-6">LoGo</div>
        <div class="nav">
          <Menu />
        </div>
        <div class="copyright mb-6"><Copyright /></div>
      </div>
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
  width: 95%;
}
.main-menu {
  width: 5%;
  background: #000;
  /* height: 100vh; */
  position: fixed;
  right: 0;
  /* bottom: 0; */
  height: 100vh;
}
.menu {
  border-radius: 35px 0px 0px 35px;
}
.logo {
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  background: linear-gradient(
    90deg,
    #ff9e2b 0%,
    rgba(255, 158, 43, 0.54) 47.92%,
    rgba(255, 158, 43, 0.74) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  height: 10%;
}
.nav {
  height: 82%;
}

@media (max-height: 625px) and (max-width: 1370px) {
  .logo {
    display: none;
  }
}
</style>
