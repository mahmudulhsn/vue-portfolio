<template>
  <div
    class="about-section flex justify-center text-white bg-no-repeat bg-cover"
  >
    <div class="lg:w-3/5 flex justify-center flex-col about mt-20 md:w-9/12">
      <PageTitle :title="title" />
      <PageSubHeading :subHeading="subHeading" />

      <div class="about-me flex mt-10 space-x-8">
        <div class="about-me-image w-1/2">
          <img src="../assets/img/image.svg" alt="Image Not Found" />
        </div>
        <div class="about-me-details w-1/2 flex justify-content items-center">
          <div>
            <h2 class="text-2xl mb-10">
              <span> Know</span> <br />
              <span> About Myself</span>
            </h2>
            <div class="mb-10 text-md">
              <p class="mb-5">
                Hello there! My name is <b>Md. Parvez Khan.</b> I am a UI/UX Designer, and i'm very passionate and dedicated to my work.
              </p>
              <p>
                With 3.5 years experience as a professional a UI/UX Designer, I have acquired skills and knowledge necessary to make your project a success.
              </p>
            </div>
            <div class="about-button w-3/4 flex justify-between">
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
        "Here you will find all my information. What I am doing in my professional life. I hope I can help you with what you want.",
      experiences: [
        {
          id: 1,
          date: "10/2020 - running",
          companyDetails: {
            companyName: "AriSaf Tech Ltd.",
            position: "UI/UX Designer",
            website: "https://arisaftech.com/",
          },
          achievements: [
            {
              id: 1,
              title:
                "Redesigned AST Japanese website. (AriSaf Tech Ltd.)",
            },
            {
              id: 2,
              title:
                "Salesta for Asahi (SaaS) UI/UX Design (In house product). It is Asahi customer control management system.",
            },
            {
              id: 3,
              title:
                "B-sky (Web application) UI/UX Design (Wireframe).",
            },
            {
              id: 3,
              title:
                "Say Halal (Mobile application) UI/UX Design - Halal/Haram detection application for Muslim Community.",
            },
          ],
          place: "Mirpur DOHS, Dhaka, Bangladesh.",
        },

        {
          id: 2,
          date: "04/2019 - 10/2020",
          companyDetails: {
            companyName: "AriSaf Tech Ltd.",
            position: "Graphics & UI/UX Designer",
            website: "https://arisaftech.com/",
          },
          achievements: [
            {
              id: 1,
              title:
                "Piena. (e-commerce website) (https://item.rakuten.co.jp/piena-ac/aabsal-mess027/)",
            },
            {
              id: 2,
              title:
                "DICE for IBM (Desktop application) UI/UX Design. (Sub contract).",
            },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
          ],
          place: "Baridhara DOHS, Dhaka, Bangladesh.",
        },

        {
          id: 2,
          date: "11/2018 - 03/2019",
          companyDetails: {
            companyName: "WebHawks IT Ltd.",
            position: "Graphics & UI/UX Designer (Internship)",
            website: "https://www.webhawksit.com/",
          },
          achievements: [
            {
              id: 1,
              title:
                "DIM (Desktop app) UI/UX Design (Wireframe).",
            },
            {
              id: 2,
              title:
                "Learned about UI/UX design & Graphics Design.",
            },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
          ],
          place: "Mirpur DOHS, Dhaka, Bangladesh.",
        },
      ],
      projects: [
      {
          id: 1,
          date: "08/2022 - 09/2022",
          projectInfo: {
            projectName: "Real Estate Website",
            position: "UI/UX Designer",
            website: "https://www.behance.net/gallery/153164925/Real-Estate-Website-Case-Study",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "It is a real estate company project. Their main job is to help people find their desired home very easily and help to find good housing at very low cost. One of the advantages of this website is that you can choose a noise free enviroment. You can choose the house of your choice at your convenience.",
            },
            // {
            //   id: 2,
            //   title:
            //     "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            // },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
          ],
        },

        {
          id: 1,
          date: "06/2021 - 09/2021",
          projectInfo: {
            projectName: "HealthCare (Mobile application project)",
            position: "UI/UX Designer",
            website: "https://healthcare.arisaftech.com/",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "With this app, people can easily buy medicine at home, get services from the doctor at home, test Covid-19 register, see the results and register for the vaccine.",
            },
            // {
            //   id: 2,
            //   title:
            //     "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            // },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
          ],
        },

        {
          id: 2,
          date: "02/2021 - 03/2021",
          projectInfo: {
            projectName: "E-commerce Website",
            position: "Graphics & UI/UX Design",
            website: "https://twopenny.com.bd/",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "This a online platform E-commerce website. It is specially made for Bangladeshi citizens to buy his/her apparel drees & gadget.",
            },
            // {
            //   id: 2,
            //   title:
            //     "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            // },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
          ],
        },

        {
          id: 2,
          date: "04/2020 - 09/2020",
          projectInfo: {
            projectName: "Proyojan.it (Mobile Application Project)",
            position: "UI/UX Designer",
            website: "https://play.google.com/store/apps/details?id=com.proyojanit.proyojanapp",
          },
          projectDetails: [
            {
              id: 1,
              title:
                "Proyojan is a digital adertising platform and digitak working area for the public. it is specially made for Bangladeshi citizens to earn money by completing some work. We promote on;ine start up and corporat business ads here at cheap price. All of our members participate in verstile job opportunities.",
            },
            // {
            //   id: 2,
            //   title:
            //     "Accumsan, lectus curabitur vestibulum vel. Faucibus leo mattis blandit.",
            // },
            // {
            //   id: 3,
            //   title:
            //     "Vestibulum lectus interdum dui, risus tempor. Praesent eget magna nullam et, vitae.",
            // },
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

@media (max-width: 1370px) {
  .about {
    width: 85%;
  }
  /* .about-button {
    width: 100%;
  } */
}

@media (max-width: 768px) {
  .about {
    width: 90%;
  }
}

@media (max-width: 640px) {
  .about-me {
    flex-direction: column;
    margin-bottom: 30px;
  }
  .about-me-image {
    width: 100%;
  }
  .about-me-details {
    margin-top: 20px;
    width: 90%;
  }
  .about {
    width: 90%;
  }
  .about-button {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
