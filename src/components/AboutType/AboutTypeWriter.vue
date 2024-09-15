<!-- <template>
  <span>
    <span class="typewriter">
      <span v-for="char in displayText" :key="char" class="text-white">{{ char }}</span>
    </span>
  </span>
</template>

<script>
export default {
  name: "MyTypeWriter",
  props: {
    title: String,
    speed: {
      type: Number,
      default: 700,
    },
    words: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      displayText: [],
      wordIdx: 0,
      charIdx: 0,
      timeoutSpeed: this.speed * 0.004,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      if (this.words && this.words.length > 0) {
        this.animate = setTimeout(this.type, this.timeoutSpeed);
      }
    },
    type() {
  if (this.wordIdx < this.words.length) {
    const currentWord = this.words[this.wordIdx];
    if (this.charIdx < currentWord.length) {
      this.displayText.push(currentWord[this.charIdx]);
      this.charIdx++;
      setTimeout(this.type, this.timeoutSpeed);
    } else {
      this.displayText.push('\n'); // Add a newline between words
      this.wordIdx++;
      this.charIdx = 0;
      setTimeout(this.type, this.timeoutSpeed);
    }
  }
},

  },
};
</script>

<style scoped>
/* Optional styling for the typewriter effect */
* {
  font-family: "JetBrains Mono", monospace;
}
.typewriter {
  overflow: hidden; /* Prevent text overflow */
}
</style> -->
