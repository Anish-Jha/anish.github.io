<template>
    <div class="font-semibold text-3xl">
      <Typewriter
        :title="YourTitleProp"
        :speed="YourSpeedProp"
        :deleteSpeed="YourDeleteSpeedProp"
        :words="YourWordsProp"
      />
    </div>
  </template>
  
  <script>
  import Typewriter from './TypeWriter.vue'; 
  
  export default {
    components: {
      Typewriter,
    },
    data() {
      return {
        YourTitleProp: '|',
        YourSpeedProp: 500,
        YourDeleteSpeedProp: 166,
        YourWordsProp: [
          'A Full Stack Web Developer',
          'A Creative Thinker',
          'A Tech Enthusiast',
          'A Gaming Enthusiast',
          'A Music Lover',
          'A Lifelong Learner',
        ],
      };
    },
  };
  </script>
  
  <style scoped>
* {
    font-family: "Audiowide", sans-serif;
}

  /* Add any component-specific styles here */
  </style>
  