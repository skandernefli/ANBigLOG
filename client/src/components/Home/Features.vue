<template>
  <section class="feature-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h3 class="title">Feature News</h3>
          </div>
        </div>
      </div>
      <div class="feature-post-slider position-relative">
        <span
          @click="featureSliderPrev"
          class="prev slick-arrow"
          style="display: block"
          ><i class="fal fa-angle-left"></i
        ></span>
        <slider :settings="featureSliderSettings" ref="featureSlider">
          <template v-for="(data, index) in post.slice(1, 6)">
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
import post from "../Data/post";
import Slider from "../Helpers/Slider.vue";
import OverlayCard from "../Utility/Cards/OverlayCard.vue";
export default {
  components: { Slider, OverlayCard },
  data: () => ({
    //feature
    post: post.data,
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
  }),
  methods: {
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
