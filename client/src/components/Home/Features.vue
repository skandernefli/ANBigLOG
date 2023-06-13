<template>
  <section class="feature-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h3 class="title">Feature Posts</h3>
          </div>
        </div>
      </div>
      <div class="feature-post-slider position-relative" v-if="post.length > 0">
        <span
          @click="featureSliderPrev"
          class="prev slick-arrow"
          style="display: block"
          ><i class="fal fa-angle-left"></i
        ></span>
        <slider :settings="featureSliderSettings" ref="featureSlider">
          <template v-for="(data, index) in post.slice(0, 6)">
            <div class="px-2" :key="index">
              <overlay-card stype="small" :datas="data" />
            </div>
          </template>
        </slider>
        <span
          @click="featureSliderNext"
          class="next slick-arrow"
          style="display: block"
          ><i class="fal fa-angle-right"></i
        ></span>
      </div>
    </div>
  </section>
</template>

<script>
/* import post from "../Data/post";
 */import Slider from "../Helpers/Slider.vue";
import OverlayCard from "../Utility/Cards/OverlayCard.vue";
export default {
  components: { Slider, OverlayCard },
  data: () => ({
    //feature
    post:[],
    featureSliderSettings: {
      slidesToShow: 4,
      slideToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slideToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          },
        },
      ],
    },
  }),async created() {
    await JSON.parse(JSON.stringify(this.fetchFeature()));
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
  async  fetchFeature() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/feature").then(response => {
       this.post= response[0].data;
    });
  },
  
    //feature
    featureSliderNext() {
      this.$refs.featureSlider.next();
    },
    featureSliderPrev() {
      this.$refs.featureSlider.prev();
    },
  },
};
</script>

<style></style>
