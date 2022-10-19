<template>
  <div class="padding">
    <kasia-hero></kasia-hero>
  </div>
  <div class="padding">
    <kasia-uslugi></kasia-uslugi>
  </div>
  <div class="padding">
    <kasia-portfolio></kasia-portfolio>
  </div>
  <div class="padding">
    <kasia-omnie></kasia-omnie>
  </div>
  <div class="padding">
    <kasia-kontakt></kasia-kontakt>
  </div>
</template>

<script>
import KasiaUslugi from "../KasiaUslugi.vue";
import KasiaHero from "../KasiaHero.vue";
import KasiaPortfolio from "../KasiaPortfolio.vue";
import KasiaOmnie from "../KasiaOmnie.vue";
import KasiaKontakt from "../KasiaKontakt.vue";

export default {
  components: {
    KasiaUslugi,
    KasiaHero,
    KasiaPortfolio,
    KasiaOmnie,
    KasiaKontakt,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.padding {
  padding-bottom: 6rem;
}
</style>
