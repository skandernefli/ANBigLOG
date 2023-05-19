<template>
  <div v-if="$store.state.videoPopup">
    <div class="mfp-bg mfp-ready" @click.prevent="closePopup"></div>
    <div
      class="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
      tabindex="-1"
      style="overflow: hidden auto"
    >
      <div class="mfp-container mfp-s-ready mfp-iframe-holder">
        <div class="mfp-content">
          <div class="mfp-iframe-scaler">
            <button
              title="Close (Esc)"
              type="button"
              class="mfp-close"
              @click.prevent="closePopup"
            >
              ×
            </button>
            <iframe
              class="mfp-iframe"
              :src="getVideoUrl()"
              frameborder="0"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
        <div class="mfp-preloader">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closePopup() {
      this.$store.dispatch("toggleVideo");
    },
    getVideoUrl() {
      // Replace this logic with your own to get the dynamic video URL from the store
      const videoUrl = this.$store.state.videoUrl;
      return `//www.youtube.com/embed/${videoUrl}?autoplay=1`;
    },
  },
};
</script>

<style></style>
