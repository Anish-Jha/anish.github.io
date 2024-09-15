<template>
  <div>
    <div class="typewriter">
      <span v-for="char in displayText" :key="char" class="text-white">{{ char }}</span>
      <span class="text-3xl text-left text-spring-500 mr-4">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTypeWriter",
  props: {
    title: String,
    speed: {
      type: Number,
      default: 500,
    },
    deleteSpeed: {
      type: Number,
      default: 166,
    },
    words: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      displayText: [],
      currentWord: [],
      wordIdx: 0,
      timeoutSpeed: this.speed * 0.4,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.currentWord = this.words[this.wordIdx].split("");
        this.wordIdx++;
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type() {
      if (this.currentWord.length > 0) {
        this.displayText.push(this.currentWord.shift());
      } else if (this.currentWord.length === 0 && this.displayText.length > 0) {
        this.timeoutSpeed = this.deleteSpeed;
        this.displayText.pop();
      } else if (
        this.currentWord.length === 0 &&
        this.displayText.length === 0
      ) {
        if (this.wordIdx < this.words.length) {
          this.currentWord = this.words[this.wordIdx].split("");
          this.wordIdx++;
          this.timeoutSpeed = this.speed;
          this.displayText.push(this.currentWord.shift());
        } else {
          this.wordIdx = 0;
          this.currentWord = this.words[this.wordIdx].split("");
          this.displayText.push(this.currentWord.shift());
        }
      }
      setTimeout(this.type, this.timeoutSpeed);
    },
  },
};
</script>

<style scoped>
* {
    font-family: "Audiowide", sans-serif;
}

.typewriter {
  overflow: hidden; /* Prevent text overflow */
}
</style>
