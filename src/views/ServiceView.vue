<template>
  <div class="services flex justify-center text-white bg-no-repeat bg-cover">
    <div
      class="
        lg:w-3/5
        flex
        justify-center
        service
        flex-col
        mt-20
        md:w-9/12
        mb-10
        sm:w-8/12
      "
    >
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />

      <div class="mt-10">
        <ServiceList :services="services" />
      </div>
      <p class="mt-4 text-2xl">
        Are You Interested In Working With Me?
        <a href="#" class="text-default underline underline-offset-2"
          >Hire Me.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/Helper/PageHeading.vue";
import PageSubHeading from "../components/Helper/PageSubHeading.vue";
import ServiceList from "../components/Services/ServiceList.vue";
import uiux from "../assets/img/services/ui-ux.png";
import website from "../assets/img/services/website.png";
import webApps from "../assets/img/services/web-apps.png";
import smartphone from "../assets/img/services/smartphone.png";
import creativity from "../assets/img/services/creativity.png";
import graphicsDesign from "../assets/img/services/graphics-design.png";
export default {
  components: {
    PageTitle,
    PageSubHeading,
    ServiceList,
  },
  data() {
    return {
      title: "Services",
      subHeading:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      services: [
        {
          id: 1,
          title: "UI/UX Design",
          icon: uiux,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
        {
          id: 2,
          title: "Website Design",
          icon: website,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
        {
          id: 3,
          title: "Web App Design",
          icon: webApps,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
        {
          id: 4,
          title: "App Design",
          icon: smartphone,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
        {
          id: 5,
          title: "Creative Design",
          icon: creativity,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
        {
          id: 6,
          title: "Graphics Design",
          icon: graphicsDesign,
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit. tincidunt Eget tincidunt nisi ridiculus.",
        },
      ],
    };
  },
};
</script>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
.services {
  background: #000;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  /* background: linear-gradient( 90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.8) 34.37%, rgba(0, 0, 0, 0.2) 100% ); */
  opacity: 0.99;
  color: #eee;
}

.services::before {
  background-image: url("../../src/assets/img/bg.png");
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
.service {
  justify-content: flex-start;
}

@media (max-width: 640px) {
  .service {
    width: 90%;
  }
}

@media (max-width: 1370px) {
  .service {
    width: 85%;
  }
}
</style>
