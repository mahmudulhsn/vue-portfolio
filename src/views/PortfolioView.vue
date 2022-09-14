<template>
  <div
    class="
      portfolio-section
      flex
      justify-center
      text-white
      bg-no-repeat bg-cover
    "
  >
    <div class="w-3/5 flex justify-center portfolio flex-col mt-20">
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />

      <div class="tags flex justify-center space-x-4 mt-6">
        <div>
          <span
            class="
              tag
              px-4
              py-2
              border border-white
              rounded-2xl
              leading-loose
              cursor-pointer
              box-border
            "
          >
            All
          </span>
        </div>
        <div v-for="tag in tags" :key="tag.id">
          <SingleTag :tag="tag" />
        </div>
      </div>

      <div class="cards">
        <PortfolioList :portfolios="portfolios" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/Helper/PageHeading.vue";
import PageSubHeading from "../components/Helper/PageSubHeading.vue";
import SingleTag from "../components/Tags/SingleTag.vue";
import PortfolioList from "../components/Portfolios/PortfolioList.vue";
export default {
  components: {
    PageTitle,
    PageSubHeading,
    SingleTag,
    PortfolioList,
  },
  data() {
    return {
      title: "Portfolio",
      subHeading:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      tags: [
        {
          id: 1,
          name: "Website Design",
        },
        {
          id: 2,
          name: "Web App Design",
        },
        {
          id: 3,
          name: "Apps Design",
        },
        {
          id: 4,
          name: "Graphics Design",
        },
      ],
      portfolios: [
        {
          id: 1,
          name: "Website Design",
          image: "",
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
.portfolio-section {
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

.portfolio-section::before {
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
.portfolio {
  justify-content: flex-start;
}
</style>
