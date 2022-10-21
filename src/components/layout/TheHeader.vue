<template>
  <nav class="navbar navbar-expand-md sticky-top bg-white shadow-sm" ref="el">
    <div class="container">
      <a href="#" class="navbar-brand m-0">
        <div class="row">
          <div class="col-2 d-none">
            <img
              src="../../assets/logo.png"
              alt="katarzyna wicher logo"
              class="img"
            />
          </div>
          <div class="col">
            <div class="row">
              <div class="col lh-1 pr-0">
                <span class="brand-text-1 text-uppercase"
                  >Katarzyna Wicher</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col lh-1">
                <span class="brand-text-2 text-uppercase text-primary"
                  >Makeup artist</span
                >
              </div>
            </div>
          </div>
        </div>
      </a>
      <button
        class="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
        aria-controls="nav"
        aria-label="Expand Navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="nav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="close">
            <a href="#uslugi" class="nav-link text-nowrap">Usługi</a>
          </li>
          <li class="nav-item" @click="close">
            <a href="#portfolio" class="nav-link text-nowrap">Portfolio</a>
          </li>
          <li class="nav-item" @click="close">
            <a href="#o-mnie" class="nav-link text-nowrap">O mnie</a>
          </li>
          <li class="nav-item" @click="close">
            <a
              href="#kontakt"
              class="btn btn-primary nav-link text-nowrap text-white"
              >Kontakt</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const close = function () {
      const nav = document.getElementById("nav");
      nav.classList.remove("show");
    };

    return {
      close,
    };
  },
};
</script>

<style scoped>
img {
  height: 46px;
}
.brand-text-1 {
  text-transform: uppercase;
  letter-spacing: 5px;
}
.brand-text-2 {
  font-family: "Oswald", sans-serif;
}
</style>
