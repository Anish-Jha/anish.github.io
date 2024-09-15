<template>
  <div class="basic_parent_cont flex flex-row w-full justify-center items-center p-3">
    <div class="basic_parent_nav h-full max-w-5xl w-full flex flex-row justify-between gap-8 items-center px-3">

      <div class="hamburger-menu" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256">
          <path
            d="M32,64h192c8.8,0 16,7.2 16,16s-7.2,16-16,16H32c-8.8,0-16-7.2-16-16S23.2,64,32,64zM32,128h192c8.8,0 16,7.2 16,16s-7.2,16-16,16H32c-8.8,0-16-7.2-16-16S23.2,128,32,128zM32,192h192c8.8,0 16,7.2 16,16s-7.2,16-16,16H32c-8.8,0-16-7.2-16-16S23.2,192,32,192z"
            fill="#ffffff" />
        </svg>
      </div>

      <div class="links_container_ flex gap-8 justify-start text-white font-semibold items-center">
        <span class="cursor-pointer w-16 h-full">
          <iframe class="iframe-anim w-full h-full object-contain"
            src="https://lottie.host/embed/8ad6e4ae-09eb-401d-abd3-a8740ae8138a/e0pztV5uET.json"></iframe>
        </span>
      </div>

      <div
        class="basic_link_cont___ text-white hidden md:flex flex-row items-center justify-start gap-6 max-w-3xl w-full">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div :class="{'nav-link':isMenuOpen}" class="basic_link_cont___ flex flex-row items-center justify-end gap-6 max-w-3xl w-full">
        <span onclick="window.open('https://www.linkedin.com/in/anish-jha7/', '_blank')"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
            style="fill:#000000;">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
              font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <g transform="scale(5.12,5.12)">
                <path
                  d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z">
                </path>
              </g>
            </g>
          </svg></span>
        <span onclick="window.open('https://www.instagram.com/ztch_/?hl=en','_blank')">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256"
            style="fill:#000000;">
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
              stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
              font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
              <g transform="scale(5.12,5.12)">
                <path
                  d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z">
                </path>
              </g>
            </g>
          </svg>
        </span>

        <span onclick="window.open('https://github.com/Anish-Jha', '_blank')">
          <svg width="30" height="30" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <title>github [#ffffff142]</title>
              <desc>Created with Sketch.</desc>
              <defs> </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff">
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#ffffff142]"> </path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </span>
      </div>

      <div class="mobile-menu fixed top-0 right-0 text-white flex flex-col items-center p-4 gap-6"
        :class="{ 'translate': isMenuOpen }">
        <div class="close-menu w-full flex items-end justify-end p-4" @click="closeMobileMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256">
            <path d="M16,16l224,224M240,16l-224,224" stroke="#ffffff" stroke-width="24" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <a href="#home" @click="toggleMenu">Home</a>
        <a href="#about" @click="toggleMenu">About</a>
        <a href="#skill" @click="toggleMenu">Skills</a>
        <a href="#contact" @click="toggleMenu">Contact</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNavbar",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      console.log('open', this.isMenuOpen)
    },
    closeMobileMenu() {
      this.isMenuOpen = false;
    },
  }
};
</script>

<style scoped>
* {
  font-family: "Audiowide", sans-serif;
}

.basic_parent_cont {
  height: 100px;
  background: #0D0D0D;
  /* border: 1px solid #00FFFF; */
  z-index: 99 !important;
  position: fixed;
  top: 0%;
}

.basic_parent_nav {
  backdrop-filter: blur(5px);
  border-radius: 50px !important;
  /* border: 1px solid #00FFFF; */
}


.basic_link_cont___ a:hover {
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: #00ffff !important;
  text-underline-offset: 5px;
  text-decoration-thickness: 2px;
  transform-origin: center;
  transform: translateX(-3px) translateY(-3px) scale(1.1);
  transition: 0.3s ease-in-out;
}

.a_logo_basic_:hover {
  transform: rotate(360deg);
  transform-origin: center;
  transition: 0.3s ease-in-out;
}

.basic_link_cont___ span:hover {
  cursor: pointer;
  transform-origin: center;
  transform: translateX(-3px) translateY(-3px) scale(1.2);
  transition: 0.3s ease-in-out;
}

.basic_link_cont___ span svg path {
  fill: #fff;
}

.basic_link_cont___ span:hover svg path {
  fill: #FF007F;

}

.iframe-anim {
  transform: scaleX(-1);
}

.hamburger-menu {
  display: none;
  cursor: pointer;
}

.mobile-menu {
  display: none;
  visibility: hidden;
}

.translate {
  display: block;
  visibility: visible;
  top: 0;
  left: 0;
  height: 100vh !important;
  width: 50vw;
  background: #0D0D0D;
  backdrop-filter: blur(8px);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  padding: 20px;
}

.translate a {
  display: block;
  padding: 10px 0;
}

.translate {
  transform: translateX(0);
  /* Slide in */
}

.translate .close-menu {
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-link {
    display: none;
    visibility: hidden;
  }

  .hamburger-menu {
    display: block;
  }

  .links_container_ {
    display: none !important;
  }

  .translate{
    overflow: hidden;
    transition: 0.3s ease;
    transform-origin: right;
    animation: nav 0.3s linear forwards;
  }

  .basic_parent_cont {
    padding: 0 !important;
  }

  @keyframes nav {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }

  .overlay {
    display: block;
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(5px);
    /* border: 1px solid red; */
    position: absolute;
    right: 0;
    top: 0;
    z-index: 500;
  }

 

}

@media (max-width:576px) {
    .basic_link_cont___{
    gap:8px !important;
  }
  }
</style>
