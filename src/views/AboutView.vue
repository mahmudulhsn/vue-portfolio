<template>
  <div
    class="about-section flex justify-center text-white bg-no-repeat bg-cover"
  >
    <div class="w-3/5 flex justify-center flex-col about mt-20">
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />

      <div class="about-me flex mt-10 space-x-8">
        <div class="w-1/2"><img src="../assets/img/image.svg" alt="" /></div>
        <div class="w-1/2 flex justify-content items-center">
          <div>
            <h2 class="text-2xl mb-10">
              <span> Know</span> <br />
              <span> About Myself</span>
            </h2>
            <div class="mb-10 text-md">
              <p class="mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                augue eu ultrices id orci. Amet mattis egestas ac, amet, ac.
                Velit fermentum volutpat adipiscing vehicula aliquam integer
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
                augue eu ultrices id orci. Amet mattis egestas ac, amet, ac.
                Velit fermentum.
              </p>
            </div>
            <div class="w-3/4 flex justify-between">
              <Button title="View Portfolio" extraClass="yellow-button" />
              <Button title="Download CV" extraClass="white-button" />
            </div>
          </div>
        </div>
      </div>

      <div class="experience mb-20">
        <SectionTitle title="Experience" />
        <SectionSubTitle
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque."
        />

        <ExperienceList :experiences="experiences" />
      </div>

      <div class="personal-projects mb-20">
        <SectionTitle title="Personal Projects" />
        <SectionSubTitle
          subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque."
        />

        <PersonalProjectList :projects="projects" />
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../components/Helper/PageHeading.vue";
import PageSubHeading from "../components/Helper/PageSubHeading.vue";
import Button from "../components/Helper/Button.vue";
import SectionTitle from "../components/Helper/SectionTitle.vue";
import SectionSubTitle from "../components/Helper/SectionSubTitle.vue";
import ExperienceList from "../components/Experiences/ExperienceList.vue";
import PersonalProjectList from "../components/PersonalProject/PersonalProjectList.vue";
export default {
  components: {
    PageTitle,
    PageSubHeading,
    Button,
    SectionTitle,
    SectionSubTitle,
    ExperienceList,
    PersonalProjectList,
  },
  data() {
    return {
      title: "About Me",
      subHeading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue libero eleifend ullamcorper vestibulum. velit enim risus purus eu molestie lobortis pellentesque.",
      experiences: [
        {
          id: 1,
          date: "10/2020 - running",
          companyDetails: {
            companyName: "Software Tech Ltd.",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          achievements: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
          place: "Dhaka, Bangladesh.",
        },

        {
          id: 2,
          date: "04/2019 - 10/2020",
          companyDetails: {
            companyName: "Software Tech Ltd.",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          achievements: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
          place: "Dhaka, Bangladesh.",
        },

        {
          id: 2,
          date: "11/2018 - 03/2019",
          companyDetails: {
            companyName: "Software Tech Ltd.",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          achievements: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
          place: "Dhaka, Bangladesh.",
        },
      ],
      projects: [
        {
          id: 1,
          date: "06/2021 - 09/2021",
          projectInfo: {
            projectName: "Mobile Application Project",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus. Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
        },

        {
          id: 2,
          date: "02/2021 - 03/2021",
          projectInfo: {
            projectName: "E-Commerce Website.",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus. Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
        },

        {
          id: 2,
          date: "04/2020 - 09/2020",
          projectInfo: {
            projectName: "Mobile Application Project.",
            position: "UI/UX Designer",
            website: "www.website.com ",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est laoreet justo, eu massa phasellus. Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 2,
              title:
                "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            },
            {
              id: 3,
              title:
                "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            },
          ],
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
.about-section {
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

.about-section::before {
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
</style>
