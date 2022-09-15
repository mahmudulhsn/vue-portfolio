<template>
  <div class="flex">
    <div class="main-content">
      <RouterView />
    </div>

    <div
      class="menu-icons text-3xl absolute right-4 top-4 z-50 text-white"
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

    <div
      class="mobile-menu absolute h-screen bg-slate-800 right-0 w-48 text-white"
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

.mobile-menu {
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-menu ul li {
  padding: 20px 0px;
  font-size: 20px;
}

@media (max-width: 1280px) {
  .logo {
    display: none;
  }
  .main-content {
    width: 93%;
  }
  .main-menu {
    width: 7%;
    background: #000;
    position: fixed;
    right: 0;
    height: 100vh;
  }

  .menu {
    justify-content: center;
  }

  .copyright {
    display: none;
  }

  .nav {
    height: auto;
  }
}

@media (max-width: 1024px) {
  .main-menu {
    display: none;
  }
  .main-content {
    width: 100%;
  }
}
</style>
