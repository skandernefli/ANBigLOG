<template>
  <div class="topbar-trending">
    <span>Trending</span>
    <div class="trending-slider">
      <span @click="prev" class="prev slick-arrow" style="display: block"
        ><i class="fal fa-angle-left"></i
      ></span>
      <slider ref="carousel" :settings="settings">
        <div class="trending-item">
          <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now</p>
        </div>
        <div class="trending-item">
          <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now</p>
        </div>
        <div class="trending-item">
          <p>Top 10 Best Movies of 2018 So Far: Great Movies To Watch Now</p>
        </div>
      </slider>
      <span @click="next" class="next slick-arrow" style="display: block"
        ><i class="fal fa-angle-right"></i
      ></span>
    </div>
  </div>
</template>

<script>
import Slider from "../../Helpers/Slider.vue";
import json from "../../Data/TrandingHeaderOneTopBar";
export default {
  components: { Slider },
  data: () => ({
    settings: {
      dots: false,
      arrows: false,
      autoplay: false,
    },
    news: json.datas,
  }),
  methods: {
    next() {
      this.$refs.carousel.next();
    },
    prev() {
      this.$refs.carousel.prev();
    },
  },
};
</script>

<style>
</style>