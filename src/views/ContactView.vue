<template>
  <div
    class="contact-section flex justify-center text-white bg-no-repeat bg-cover"
  >
    <div
      class="
        lg:w-3/5
        flex flex-wrap
        justify-center
        contact
        flex-col
        mt-20
        md:w-9/12
      "
    >
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />
      <div
        class="
          grid
          lag:grid-cols-2
          lg:gap-6
          mt-16
          md:grid-cols-1
          xl:grid-cols-2
        "
      >
        <div class="info flex flex-col justify-between md:mb-8">
          <div>
            <p class="text-3xl leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
              libero eleifend ullamcorper vestibulum.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div class="py-8 px-6 call-me flex flex-col rounded items-center">
              <div class="">
                <div class="skew-before">
                  <img
                    class="my-6"
                    src="../../src/assets/img/icons/call-me.svg"
                    alt=""
                  />
                </div>
              </div>
              <h3 class="text-xl my-1">Email Me</h3>
              <h4 class="text-sm">0031 588 9581</h4>
              <h4 class="text-default">(WhatsApp)</h4>
            </div>
            <div
              class="
                py-8
                px-6
                email-me
                flex flex-col
                rounded
                items-center
                relative
              "
            >
              <div class="">
                <div class="">
                  <img
                    class="my-6"
                    src="../../src/assets/img/icons/email-me.svg"
                    alt=""
                  />
                </div>
              </div>
              <h3 class="text-xl my-1">Email Me</h3>
              <h4 class="text-sm">youremail@gmail.com</h4>
            </div>
          </div>
        </div>
        <div class="form p-4 rounded md:mb-8">
          <h1>Send Me a Message</h1>
          <div class="form-group my-2">
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Full Name *"
            />
          </div>
          <div class="form-group my-2">
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="E-mail *"
            />
          </div>
          <div class="form-group my-2">
            <input
              type="text"
              class="w-full p-2 border rounded"
              placeholder="Subject"
            />
          </div>
          <div class="form-group my-2 rounded">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Me *"
              class="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button class="btn w-full text-black py-2 rounded">
            Submit Message
          </button>
        </div>
      </div>
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
      title: "Contact Me",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque.",
    };
  },
};
</script>

<style scope>
.contact-section {
  background: #000;
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  opacity: 0.99;
  color: #eee;
}

.contact-section::before {
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
.contact {
  justify-content: flex-start;
}
.call-me,
.email-me,
.form {
  background: rgba(255, 255, 255, 0.1);
}

input,
textarea {
  background: transparent;
}
.btn {
  background: #ff9e2b;
}
</style>
