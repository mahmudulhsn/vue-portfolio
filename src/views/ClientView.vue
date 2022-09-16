<template>
  <div class="clients flex justify-center text-white bg-no-repeat bg-cover">
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

      <div>
        <carousel
          ref="carousel"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide class="card__wrapper" v-for="item in items" :key="item.id">
            <TheCard :item="item">
              <template v-slot:body>
                {{ item.descr }}
              </template>
              <template v-slot:footer>
                <CardFooter :info="item.info" />
              </template>
            </TheCard>
          </slide>

          <template #addons>
            <div class="navigation flex justify-between">
              <div class="prev">
                <button
                  @click="prev"
                  class="float-left px-3 py-1 bg-white text-black rounded"
                >
                  <i class="fa-solid fa-arrow-left"></i>
                </button>
              </div>
              <div class="pagination">
                <Pagination />
              </div>
              <div class="next">
                <button
                  @click="next"
                  class="float-right px-3 py-1 bg-white text-black rounded"
                >
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/Helper/PageHeading.vue";
import PageSubHeading from "../components/Helper/PageSubHeading.vue";
import items from "../Seeds/Items.js";

import TheCard from "../components/Carousel/TheCard.vue";
import CardFooter from "../components/Carousel/CardFooter.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";
export default {
  components: {
    PageTitle,
    PageSubHeading,
    TheCard,
    Carousel,
    Slide,
    Navigation,
    CardFooter,
    Pagination,
  },
  data() {
    return {
      title: "Client's Says",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque.",
      items: items,
      currentSlide: 0,

      // corousel
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        snapAlign: "start",
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
      },
    };
  },

  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
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
.clients {
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

.clients::before {
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
.navigation {
  margin: 10px;
  padding: 10px;
}
.service {
  justify-content: flex-start;
}
.carousel__pagination-button--active {
  background-color: #ff9e2b !important;
}
.carousel__pagination-button {
  margin: var(--vc-pgn-margin);
  width: 10px;
  height: 10px;
  border-radius: var(--vc-pgn-height);
  border: 0;
  cursor: pointer;
  background-color: #eeeeee;
}
.navigation {
  margin-top: 40px;
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
