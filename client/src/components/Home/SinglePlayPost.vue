<template>
  <section class="single-play-post-area mt-10">
    <div class="container custom-container">
      <div class="single-play-box">
        <div class="single-play-post-slider position-relative">
          <span
            @click="playSliderPrev"
            class="prev slick-arrow"
            style="display: block"
            ><i class="fal fa-angle-left"></i
          ></span>
          <slider :settings="playPostSettings" ref="playPost">
            <template v-for="(data, index) in playPostDatas">
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
import playPostDatas from "../Data/singlePlay";
import Slider from "../Helpers/Slider.vue";
import OverlayCard from "../Utility/Cards/OverlayCard.vue";
export default {
  components: { OverlayCard, Slider },
  data: () => ({
    //playPost
    playPostDatas: playPostDatas.data,
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
  methods: {
    //playPost
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
