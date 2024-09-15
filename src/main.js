import { createApp} from 'vue';
import App from './App.vue';
import './assets/styles.css';
import { loadSlim } from "@tsparticles/slim";

// Create the Vue app instance
const app = createApp(App);

// Dynamically import Vuesax and Particles
Promise.all([
  import('vuesax3').then(module => module.default),
  import('@tsparticles/vue3').then(module => module.default),
  import('vuesax3/dist/vuesax.css'),
]).then(([Vuesax, Particles]) => {
  // Use Vuesax and Particles in the app
  app.use(Vuesax);
  app.use(Particles, {
    init: async engine => {
      await loadSlim(engine);
    }
  });

  // Mount the app
  app.mount('#app');
})
.catch(error => {
  console.error('Error loading modules:', error);
});
