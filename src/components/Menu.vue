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
    <li class="single-list">
      <router-link to="/">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'Home',
          }"
        >
          <home-icon-active v-if="currentUrlName == 'Home'" />
          <home-icon v-else />
        </span>
        <span>Home</span>
      </router-link>
    </li>

    <li class="single-list">
      <router-link to="/about">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'About',
          }"
        >
          <about-icon-active v-if="currentUrlName == 'About'" />
          <about-icon v-else />
        </span>
        <span> About </span>
      </router-link>
    </li>

    <li class="single-list">
      <router-link to="/services">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'Services',
          }"
        >
          <service-icon-active v-if="currentUrlName == 'Services'" />
          <service-icon v-else />
        </span>
        <span> Services </span>
      </router-link>
    </li>

    <li class="single-list">
      <router-link to="/portfolio">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'Portfolio',
          }"
        >
          <portfolio-icon-active v-if="currentUrlName == 'Portfolio'" />
          <portfolio-icon v-else />
        </span>
        <span> Portfolio </span>
      </router-link>
    </li>

    <li class="single-list">
      <router-link to="/client">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'Client',
          }"
        >
          <client-icon-active v-if="currentUrlName == 'Client'" />
          <client-icon v-else />
        </span>
        <span> Client </span>
      </router-link>
    </li>

    <li class="single-list">
      <router-link to="/contact">
        <span
          class="icon"
          :class="{
            active: currentUrlName == 'Contact',
          }"
        >
          <contact-icon-active v-if="currentUrlName == 'Contact'" />
          <contact-icon v-else />
        </span>
        <span> Contact </span>
      </router-link>
    </li>
  </ul>
</template>

<script>
import HomeIcon from "../assets/img/icons/home.svg";
import AboutIcon from "../assets/img/icons/about.svg";
import ServiceIcon from "../assets/img/icons/service.svg";
import PortfolioIcon from "../assets/img/icons/Portfolio.svg";
import ClientIcon from "../assets/img/icons/client.svg";
import ContactIcon from "../assets/img/icons/contact.svg";
import HomeIconActive from "../assets/img/icons/home-active.svg";
import AboutIconActive from "../assets/img/icons/about-active.svg";
import ServiceIconActive from "../assets/img/icons/service-active.svg";
import PortfolioIconActive from "../assets/img/icons/portfolio-active.svg";
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

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ffffff;
  border-radius: 10px;
  height: 50px;
  width: 50px;
}

.icon:hover {
  background-color: #ff9e2b;
  border: 1px solid #222222;
}

.active {
  background-color: #ff9e2b;
  border: 1px solid #222222;
}
.single-list {
  width: 50px;
  height: 50px;
  margin: 25px 0;
  font-size: 13px;
  text-align: center;
}

@media (max-height: 625px) and (max-width: 1370px) {
  .single-list {
    width: 45px;
    height: 38px;
    margin: 22px 0;
    font-size: 13px;
    text-align: center;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: 1px solid #ffffff;
    border-radius: 10px;
    height: 50px;
    width: 50px;
  }
}
</style>