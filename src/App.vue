<template>
  <the-header></the-header>
  <content-kasia></content-kasia>
  <the-footer></the-footer>
</template>

<script>
import ContentKasia from "./components/layout/TheBody.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  name: "App",
  components: {
    ContentKasia,
    TheHeader,
    TheFooter,
  },

  setup() {
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    window.addEventListener("scroll", reveal);

    reveal();
  },
};
</script>

<style>
:root {
  --navh: 80px;
}

html {
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
h2 {
  font-family: "Oswald", sans-serif;
}

.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}

section {
  scroll-margin-top: var(--navh);
}

body {
  background-color: white;
}
</style>
