<template>
  <div class="instagram-wrapper">
    <div class="d-flex justify-content-center mb-4" v-if="isLoading">
      <div class="loader"></div>
    </div>
    <div v-else-if="hasError" class="d-flex justify-content-center mb-4">
      <h3>Problem z wyświetleniem galerii. Kliknij "Pokaż więcej".</h3>
    </div>
    <div v-else class="instagram-gallery">
      <div
        v-for="image in instagramData.slice(0, 8)"
        :key="image.id"
        class="instagram-gallery-item"
      >
        <a
          :href="image.permalink"
          :key="image.id"
          target="_blank"
          rel="noreferrer"
        >
          <img
            v-if="
              image.media_type === 'IMAGE' ||
              image.media_type === 'CAROUSEL_ALBUM'
            "
            :src="image.media_url"
            :alt="image.caption"
            :key="image.id"
            class="instagram-gallery-image shadow"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    accessToken: String,
    count: Number,
  },

  setup(props) {
    const isLoading = ref(true);
    const hasError = ref(false);
    const instagramData = ref(null);

    const fetchInstaData = async function (url) {
      const response = await fetch(url);
      if (!response.ok) {
        isLoading.value = false;
        hasError.value = true;
        return;
      }

      const data = await response.json();

      let pics = [];

      data.data.forEach((item) => {
        if (item.media_type !== "VIDEO") pics.push(item);
      });
      instagramData.value = pics;

      isLoading.value = false;
    };

    const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&access_token=${props.accessToken}`;

    fetchInstaData(url);

    return { isLoading, hasError, instagramData };
  },
};
</script>
<style scoped>
.loader {
  text-align: center;
  border: 16px solid var(--bs-light); /* Light grey */
  border-top: 16px solid var(--bs-primary); /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
