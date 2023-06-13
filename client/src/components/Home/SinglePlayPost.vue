<template>
  <section class="single-play-post-area mt-10">
    <div class="container custom-container">
      <div class="single-play-box" v-if="ManageSinglePlayPosts.length > 0">
        <div class="single-play-post-slider position-relative">
          <span
            @click="playSliderPrev"
            class="prev slick-arrow"
            style="display: block"
            ><i class="fal fa-angle-left"></i
          ></span>
          <slider :settings="playPostSettings" ref="playPost">
            <template v-for="(data, index) in ManageSinglePlayPosts">
              <div :key="index" class="px-3">
                <overlay-card :datas="data" stype="big" />
              </div>
            </template>
          </slider>
          <span
            @click="playSliderNext"
            class="next slick-arrow"
            style="display: block"
            ><i class="fal fa-angle-right"></i
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
import OverlayCard from "../Utility/Cards/OverlayCard.vue";
export default {
  components: { OverlayCard, Slider },
  data: () => ({
    //playPost
    ManageSinglePlayPosts: [],
    playPostSettings: {
      arrows: false,
      slidesToShow: 2,
      slideToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          },
        },
      ],
    },
  }),
   async created() {
    await this.fetchManageSinglePlayPosts();



   

  },
  methods: {
    async  fetchWithRetry(url, options, maxRetries = 30, delay = 1000) {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const response = await fetch(url, options);
        console.log('Response Status:', response.status); // Add this line
        if (response.status === 200) {
          console.log('Success');
          return response.json();
        } else {
          throw new Error('Non-200 response status');
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      retries++;
      console.log('Retry:', retries); // Add this line
    }
    throw new Error('Max retries exceeded');
  },
  async  fetchManageSinglePlayPosts() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageSinglePlayPost").then(response => {
       this.ManageSinglePlayPosts= response[0].data;
    });
  },
    playSliderPrev() {
      this.$refs.playPost.prev();
    },
    playSliderNext() {
      this.$refs.playPost.next();
    },
  },
};
</script>

<style></style>
