<template>
  <div class="header-topbar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="topbar-trending">
            <span>Trending</span>
            <div class="trending-slider">
              <span
                @click="prev"
                class="prev slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-left"></i
              ></span>
              <slider :settings="settings" ref="carousel">
                <template v-for="(data, index) in news">
                  <div :key="index" class="trending-item">
                    <p>
                      {{ data.news }}
                    </p>
                  </div>
                </template>
              </slider>
              <span
                @click="next"
                class="next slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-right"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="topbar-social d-flex align-items-center">
            <p>Thursday, March 26, 2020</p>
            <div class="social">
              <ul>
                <li>
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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