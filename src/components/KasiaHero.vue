<template>
  <div class="p-2 text-center bg-image">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div>
        <h1 class="mb-3 text-uppercase">Katarzyna Wicher</h1>
        <h4 class="mb-3 text-secondary text-uppercase">
          Profesjonalny makijaż
        </h4>
        <a class="btn btn-primary m-1 btn-lg" href="#kontakt" role="button"
          >Umów wizytę</a
        >
        <a
          class="btn btn-outline-primary m-1 btn-lg"
          href="#uslugi"
          role="button"
          >Więcej informacji</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: linear-gradient(#ffffffc0, #ffffffc0),
    linear-gradient(to left, transparent 75%, #fff),
    linear-gradient(to right, transparent 75%, #fff), url("../assets/hero.png");
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<style scoped>
h1 {
  letter-spacing: 8px;
}
h4 {
  font-family: "Oswald", sans-serif;
}
</style>
