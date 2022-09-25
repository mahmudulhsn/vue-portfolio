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
    <div
      class="
        lg:w-3/5
        flex flex-wrap
        justify-center
        portfolio
        flex-col
        mt-20
        md:w-9/12
      "
    >
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />

      <div class="tags flex flex flex-wrap justify-center space-x-4 mt-6">
        <!-- <div>
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
        </div> -->
        <div v-for="tag in tags" :key="tag.id">
          <div class="tag-div">
            <SingleTag :tag="tag" />
          </div>
        </div>
      </div>

      <div class="cards">
        <PortfolioList :portfolios="filteredPortfolios" />
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
      filteredPortfolios: [],
      filteredTag: "All",
      tags: [
        {
          id: 1,
          name: "All",
        },
        {
          id: 2,
          name: "Website Design",
        },
        {
          id: 3,
          name: "Web App Design",
        },
        {
          id: 4,
          name: "Apps Design",
        },
        {
          id: 5,
          name: "Graphics Design",
        },
      ],
      portfolios: [
        {
          id: 1,
          name: "Real Estate Website UI/UX Design",
          category: "Website Design",
          image: "../../src/assets/img/portfolios/portfolio-1.png",
        },
        {
          id: 2,
          name: "Fashion Studio Website UI/UX Design",
          category: "Website Design",
          image: "../../src/assets/img/portfolios/portfolio-2.png",
        },
        {
          id: 3,
          name: "Health Care Application",
          category: "Apps Design",
          image: "../../src/assets/img/portfolios/portfolio-3.png",
        },
        {
          id: 4,
          name: "Website Design",
          category: "Website Design",
          image: "../../src/assets/img/portfolios/portfolio-4.png",
        },
        {
          id: 5,
          name: "Website Design",
          category: "Apps Design",
          image: "../../src/assets/img/portfolios/portfolio-5.png",
        },
        {
          id: 6,
          name: "Website Design",
          category: "Apps Design",
          image: "../../src/assets/img/portfolios/portfolio-6.png",
        },
        {
          id: 7,
          name: "Website Design",
          category: "Web App Design",
          image: "../../src/assets/img/portfolios/portfolio-7.png",
        },
        {
          id: 8,
          name: "Website Design",
          category: "Website Design",
          image: "../../src/assets/img/portfolios/portfolio-8.png",
        },
        {
          id: 9,
          name: "Website Design",
          category: "Web App Design",
          image: "../../src/assets/img/portfolios/portfolio-9.png",
        },
        {
          id: 10,
          name: "Website Design",
          category: "Apps Design",
          image: "../../src/assets/img/portfolios/portfolio-10.png",
        },
        {
          id: 11,
          name: "Website Design",
          category: "Graphics Design",
          image: "../../src/assets/img/portfolios/portfolio-7.png",
        },
        {
          id: 12,
          name: "Website Design",
          category: "Apps Design",
          image: "../../src/assets/img/portfolios/portfolio-12.png",
        },
      ],
    };
  },

  created() {
    this.filteredPortfolios = this.portfolios;
  },

  mounted() {
    this.emitter.on("filteredPortfolio", (tagName) => {
      this.filteredTag = tagName;
      if (this.filteredTag == "All") {
        this.filteredPortfolios = this.portfolios;
      } else {
        this.filteredPortfolios = this.portfolios.filter((portfolio) => {
          return portfolio.category.includes(this.filteredTag);
        });
      }
    });
  },

  // computed () {
  //   filteredPortfolio(tagName) {
  //       return this.portfolios.filter((portfolio) => {
  //         return portfolio.category.includes(tagName);
  //       });

  //       console.log(test);
  //     };
  // }
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
.cards {
  overflow: auto;
}

.tag-div {
  margin-bottom: 20px;
}
</style>
