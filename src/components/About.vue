<template>
  <div class="basic_parent_abt_ w-full flex flex-col justify-center items-center gap-12">
    <h1 class="basic_abt_head_ text-spring-500 text-4xl font-bold">
      About Me
    </h1>
    <div class="max-w-2xl w-full flex lg:flex-row items-center justify-center sm:flex-col sm:items-center">
      <div class="my_img_cont lg:rounded-l-2xl sm:rounded-t-2xl">
        <img data-aos="slide-left" class="my_img object-cover lg:rounded-l-2xl sm:rounded-t-2xl"
          src="@/assets/my-pfp.jpg" />
      </div>

      <div class="abt_type_cont_ text-white text-md flex flex-col justify-start rounded-2xl">
        <div class="flex flex-row justify-start w-full gap-3 bg-customGray p-2 rounded-t-2xl">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
        <div class="p-4">

          <p><span class="text-spring-500">C:\Users\Anish></span>Hello! I'm Anish Jha, a dedicated Full Stack Developer
            👨‍💻 with a knack for transforming imaginative ideas into sophisticated digital experiences. 🚀</p>
          <br>
          <!-- <p> With over 2000+ hours of hands-on coding experience, I've developed a keen ability to translate complex
            business requirements into effective, scalable technical solutions, all while sharpening my understanding of
            Data Structures and Algorithms.</p> -->
          <p>
            📟 With a focus on Front-End Development, I craft elegant and responsive user interfaces using HTML, CSS,
            and
            Tailwind CSS, alongside modern JavaScript frameworks like React and Vue.js. My goal is to build intuitive,
            high-performance web applications that delight users and drive engagement.
          </p>
          <br>
          <p>💬 I'm driven by the belief that collaboration is the key to innovation. That's why I'm always excited to
            dive into Open Source Projects, where I can contribute to cutting-edge solutions and learn from the vibrant
            tech community. 🌟</p>
          <br>
          <p>⚡ Fun fact: There are 10 types of people in this world—those who understand binary and those who don't.
            Let’s connect and create something extraordinary together! <span
              class="basic_end_ind_ text-spring-500 text-xl">|</span></p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AboutTypeWriterDisplay from "../components/AboutType/AboutTypeWriterDisplay.vue";
export default {
  name: "MyAbout",
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
  },
};
</script>

<style scoped>
* {
  font-family: "Audiowide", sans-serif;
}

/* .basic_parent_abt_{
  border: 1px solid yellow;
  position: relative;
  overflow: hidden;
  padding-top: 10px;
} */


.my_img {
  height: 60vh;
  max-height: 400px;
  border: 1px solid #000;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  transition-duration: 0.5s;
}

.my_img:hover {
  transform-origin: right;
  transition: 0.5s ease-in-out;
  transition-duration: 0.5s;
  transform: translateX(200px);
}

.abt_type_cont_ {
  width: 60vw;
  max-width: 850px;
  border: 1px solid #000;
  height: auto;
  z-index: 1;
  max-height: fit-content;
  background: #000;
  margin-left: -10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.2); */

}

.basic_end_ind_ {
  opacity: 0;
  visibility: hidden;
  animation: fadeInOut 0.5s infinite;
}

.basic_abt_head_ {
  text-decoration: underline;
  text-underline-offset: 15px;
}

@keyframes fadeInOut {

  0%,
  100% {
    opacity: 0;
    visibility: hidden;
  }

  50% {
    opacity: 1;
    visibility: visible;
  }
}

@media (max-width:768px) {
  .my_img {
    height: 60vh;
    max-height: 300px;
    border: 1px solid #000;
    box-shadow: 0px 3px 3px 2px #151820;
    transform-origin: bottom;
    transition: 0.5s ease-in-out;
    transition-duration: 0.5s;
  }

  .abt_type_cont_ {
    width: 90vw;
    max-width: 850px;
    border: 1px solid #000;
    border-radius: 20px;
    height: auto !important;
    max-height: fit-content !important;
    margin-left: 0px;
  }

  .my_img:hover {
    transform-origin: bottom;
    transition: 0.5s ease-in-out;
    transition-duration: 0.5s;
    transform: translateY(250px);
  }
}
</style>
