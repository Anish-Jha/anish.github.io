<template>
  <div class="basic_home_cont_ w-full flex flex-col items-center justify-end">
    <div class="flex flex-col max-w-3xl w-full h-auto gap-4 items-center justify-center" data-aos="slide-up">
      <div class="animation-container flex items-center max-w-md w-full">
        <div id="lottie">
          <iframe class="anim_img w-full h-full object-cover"
            src="https://lottie.host/embed/3f37616e-8f2c-448d-9601-5e069e24ae26/mhUNo8K9fs.json"></iframe>
        </div>
      </div>
      <h1 class="text-spring-500 font-bold text-center mt-8 lg:text-7xl md:text-5xl sm:text-5xl sm:mt-0">
        Hi, I'm <span class="text-customWhite">Anish Jha</span>.
      </h1>
      <div class="flex flex-row gap-2 text-center items-center justify-end max-w-2xl text-spring-500">
        <TypeWriterDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypeWriterDisplay from "./TypeWriterDisplay.vue";
import lottie from 'lottie-web';
export default {
  name: "MyHome",
  components: {
    TypeWriterDisplay,
  },
  mounted() {
    AOS.init(); // Initialize AOS when the component is mounted
    lottie.loadAnimation({
      container: document.getElementById('lottie'), // the DOM element to render the animation
      renderer: 'svg', // 'canvas' or 'html' can be used for different renderers
      loop: true, // Set to false if you don't want the animation to loop
      autoplay: true, // Set to false if you want to control playback manually
      path: '../assets/stock/anim.json' // Path to your JSON animation file
    });
  },
};
</script>

<style scoped>
* {
  font-family: "Audiowide", sans-serif;
}


.basic_home_cont_ {
  height: 90vh;
  max-height: 90rem;
  padding-top: 15vh;
  /* border: 1px solid red; */
  /* margin-top: 15vh !important; */
}

.basic_home_cont_>div {
  /* border: 1px solid red; */
  height: 100%;
}

.basic_link_cont___ span:hover {
  cursor: pointer;
}

.basic_link_cont___ span:hover svg path {
  fill: #fff;
}

.basic_link_cont___ span svg path {
  fill: #00FFFF;
}

.my_info {
  backdrop-filter: blur(8px);
}

#lottie {
  width: 100%;
  height: 100%;
  transition: 0.3s ease;
  /* border: 1px solid red; */
}

.animation-container {
  min-height: 350px !important;
  /* border: 1px solid red; */
}

@media (max-width: 768px) {

  .basic_home_cont_ {
    height: auto !important;
    max-height: auto !important;
    /* border: 1px solid red; */
  }

  .animation-container {
    /* border: 1px solid red; */
  }

  #lottie{
    height: 100% !important;
  }

  .anim_img{
    height: 300px !important;
  }
}
</style>
