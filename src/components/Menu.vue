<template>
  <ul
    class="
      text-white
      float-right
      flex flex-col
      justify-center
      items-center
      w-full
    "
  >
    <li>
      <router-link
        class="icons"
        to="/"
        :class="{
          active: currentUrlName == 'Home',
        }"
      >
        <home-icon-active v-if="currentUrlName == 'Home'" />
        <home-icon v-else />
        <span>Home</span>
      </router-link>
    </li>
    <li>
      <router-link
        class="icons"
        to="/about"
        :class="{
          active: currentUrlName == 'About',
        }"
      >
        <about-icon-active v-if="currentUrlName == 'About'" />
        <about-icon v-else />
        <span> About </span>
      </router-link>
    </li>
    <li>
      <router-link
        class="icons"
        to="/"
        :class="{
          active: currentUrlName == 'Service',
        }"
      >
        <service-icon-active v-if="currentUrlName == 'Service'" />
        <service-icon v-else /> <span> Services </span>
      </router-link>
    </li>
    <li>
      <router-link
        class="icons"
        to="/"
        :class="{
          active: currentUrlName == 'Portfolio',
        }"
      >
        <portfolio-icon-active v-if="currentUrlName == 'Portfolio'" />
        <portfolio-icon v-else /> <span> Portfolio </span>
      </router-link>
    </li>
    <li>
      <router-link
        class="icons"
        to="/"
        :class="{
          active: currentUrlName == 'Client',
        }"
      >
        <client-icon-active v-if="currentUrlName == 'Client'" />
        <client-icon v-else />
        <span> Clients </span>
      </router-link>
    </li>
    <li>
      <router-link
        class="icons"
        to="/"
        :class="{
          active: currentUrlName == 'Contact',
        }"
      >
        <contact-icon-active v-if="currentUrlName == 'Contact'" />
        <contact-icon v-else /> <span> Contact </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import HomeIcon from "../assets/img/icons/home.svg";
import AboutIcon from "../assets/img/icons/about.svg";
import ServiceIcon from "../assets/img/icons/service.svg";
import PortfolioIcon from "../assets/img/icons/service.svg";
import ClientIcon from "../assets/img/icons/client.svg";
import ContactIcon from "../assets/img/icons/contact.svg";
import HomeIconActive from "../assets/img/icons/home-active.svg";
import AboutIconActive from "../assets/img/icons/about-active.svg";
import ServiceIconActive from "../assets/img/icons/service-active.svg";
import PortfolioIconActive from "../assets/img/icons/service-active.svg";
import ClientIconActive from "../assets/img/icons/client-active.svg";
import ContactIconActive from "../assets/img/icons/contact-active.svg";
export default {
  components: {
    HomeIcon,
    AboutIcon,
    ServiceIcon,
    PortfolioIcon,
    ClientIcon,
    ContactIcon,
    HomeIconActive,
    AboutIconActive,
    ServiceIconActive,
    PortfolioIconActive,
    ClientIconActive,
    ContactIconActive,
  },

  computed: {
    currentUrlName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

li {
  margin-block: 10px;
}

.icons {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
}

.icons:hover {
  background-color: #ff9e2b;
  border: 1px solid #222222;
}

.active {
  background-color: #ff9e2b;
  border: 1px solid #222222;
}
</style>