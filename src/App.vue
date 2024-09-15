<template>
  <div class="basic_parent_div___ w-full flex flex-col justify-between items-center gap-8">
    <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="{
      background: {
        color: {
          value: '#0D0D0D'
        }
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'pull'
          },
          onHover: {
            enable: true,
            mode: 'repulse'
          },
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 6
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#00ffff'
        },
        links: {
          color: '#00ffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true,
          },
          value: 80
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }" />
    <div id="home" class="my-pfp-cont w-full z-11 relative">
      <Navbar />
      <Home />
      <a href="#home"
        class="go-up fixed flex justify-center items-center w-16 h-16 lg:bottom-16 right-16 sm:hidden md:block text-white z-99 "><svg
          width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M15 13L12.2121 10.2121C12.095 10.095 11.905 10.095 11.7879 10.2121L9 13M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
              stroke="#00ffff" stroke-width="1" stroke-linecap="round"></path>
          </g>
        </svg></a>
    </div>

    <div id="about" class="basic_abt_parent_ flex flex-col items-center justify-start gap-8 z-10">
      <About />
    </div>

    <div id="skill" class="basic_skills_parent_ flex flex-col items-center justify-start gap-8 z-10">
      <h1 class="basic_skills_head_ text-spring-500 text-3xl font-bold">
        My Skills
      </h1>
      <Skills />
    </div>

    <div id="contact" class="basic_contact_parent_ flex flex-col items-center justify-start gap-8 z-10">
      <h1 class="basic_project_head_ text-spring-500 text-3xl font-bold">
        Get In Touch
      </h1>
      <Contact />
    </div>

    <div class="bg-customBlack h-12 w-full flex items-center justify-center text-white bottom-0 z-10">
      Thanks for visiting!
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
// import Projects from "./components/Projects.vue"
import Contact from "./components/Contact.vue"
import lottie from 'lottie-web';
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Contact,
    // Projects,
  },
  data() {
    return {
      scrolledToProjectSection: false,
    };
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
    // window.addEventListener('scroll', this.handleScroll);
    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the DOM element to render the animation
      renderer: 'svg', // 'canvas' or 'html' can be used for different renderers
      loop: true, // Set to false if you don't want the animation to loop
      autoplay: true, // Set to false if you want to control playback manually
      path: 'https://lottie.host/embed/7802719d-02ce-4fb8-a9f1-3d4131970850/D3G5XHxREe.json' // Path to your JSON animation file
    });
  },
  beforeUnmount() {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // handleScroll() {
    //   const scrollPosition = window.scrollY;
    //   const projectSectionOffset = this.$refs.basic_project_ref.offsetTop;

    //   if (scrollPosition >= projectSectionOffset) {
    //     this.scrolledToProjectSection = true;
    //   } else {
    //     this.scrolledToProjectSection = false;
    //   }
    // },
  },
};
</script>



<style scoped>
* {
  font-family: "Audiowide", sans-serif;
}


.basic_parent_div___ {
  /* background-image: url(https://lottie.host/embed/7802719d-02ce-4fb8-a9f1-3d4131970850/D3G5XHxREe.json); */
  background: #0D0D0D;
  overflow-x: hidden;
  height: auto;
  position: relative;
}

.my-pfp-cont {
  height: 100vh;
  display: block;
}

.my-pfp-cont div {}

.basic_abt_parent_ {
  /* height: 100vh; */
  padding: 15vh 0vh 5vh 0vh !important;
}

.basic_skills_parent_ {
  padding: 15vh 0vh 5vh 0vh !important;
}

.basic_skills_head_,
.basic_abt_head_,
.basic_project_head_ {
  text-decoration: underline;
  text-underline-offset: 15px;
}

.basic_contact_parent_ {
  padding: 15vh 0vh 5vh 0vh !important;
}

.go-up {
  /* border: 1px solid #00ffff; */
  backdrop-filter: blur(8px);
}

@media (max-width:500px) {
  .my-pfp-cont {
    height: auto !important;
  }
}
</style>
