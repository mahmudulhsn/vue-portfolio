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
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/Helper/PageHeading.vue";
import PageSubHeading from "../components/Helper/PageSubHeading.vue";
export default {
  components: {
    PageTitle,
    PageSubHeading,
  },
  data() {
    return {
      title: "Client's Says",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque.",
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
