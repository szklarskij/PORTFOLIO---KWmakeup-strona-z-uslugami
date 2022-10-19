<template>
  <div class="instagram-wrapper">
    <h1 v-if="isLoading">LOADING...</h1>
    <!-- <h1 v-else-if="hasError">Ooops, something went wrong.</h1> -->
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
      console.log(response);
      const data = await response.json();

      let pics = [];
      data.data.forEach((item) => {
        if (item.media_type !== "VIDEO") pics.push(item);
      });

      if (!response.ok) {
        isLoading.value = false;
        hasError.value = true;
      } else {
        instagramData.value = pics;

        isLoading.value = false;
      }
    };

    const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&access_token=${props.accessToken}`;
    console.log(url);
    fetchInstaData(url);

    return { isLoading, hasError, instagramData };
  },
};
</script>
