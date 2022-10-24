<template>
  <section id="portfolio">
    <div class="container reveal">
      <h2 class="text-center text-uppercase pb-2">Portfolio</h2>

      <InstagramFeed
        :count="8"
        accessToken="IGQVJXSkVOenZA2UTZAxR2lWelhrYWZAvZADJfMUlveFdKMlN1ckFiSFgtaV9QMTUza0FyY0xfR3ZAQMXZATUVo4U1RZAUjlvTk9oVWVUUTY5VXFOS1ViNG0tbXlWMUZA0ZATNUWVZA1YnNTdFppRExsTzZA5dmdaSQZDZD"
        class="d-flex justify-content-center flex-column"
      />
      <div class="row">
        <div class="col-12 justify-content-center">
          <a
            class="btn btn-lg btn-primary d-flex align-items-center text-nowrap justify-content-center"
            href="https://www.instagram.com/katarzynawicher_makeup/"
            >Pokaż więcej</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InstagramFeed from "./InstagramFeed.vue";

export default {
  components: { InstagramFeed },
};
</script>

<style>
.instagram-wrapper {
  margin: 0 auto;

  justify-self: center;
}
.instagram-gallery {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  margin: -1rem, -1rem;
}
.instagram-gallery-item {
  position: relative;
  flex: 0 0 22rem;
  margin: 1rem;
  color: #fff;
  cursor: pointer;
}
.instagram-gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 1200px) {
  .instagram-gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 992px) {
  .instagram-gallery {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 768px) {
  .instagram-gallery {
    grid-template-columns: 1fr;
  }
}
</style>
