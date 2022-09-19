import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServiceView from "../views/ServiceView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import ClientView from "../views/ClientView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
      // component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/services",
      name: "Services",
      component: ServiceView,
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: PortfolioView,
    },
    {
      path: "/client",
      name: "Client",
      component: ClientView,
    },
    {
      path: "/contact",
      name: "Contact",
      component: ContactView,
    },
  ],
});

export default router;
