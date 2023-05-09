<template>
  <div class="post__gallery__area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="post_gallery_slider">
            <slider :settings="BigCardsSettings" ref="BigCards">
              <template v-for="(single, index) in postGallery">
                <big-video-card-with-des :datas="single" :key="index" />
              </template>
            </slider>
          </div>
          <div class="post_gallery_inner_slider" style="position: relative">
            <span
              @click="postGalleryPrev"
              class="prev slick-arrow"
              style="display: block"
              ><i class="fal fa-angle-left"></i
            ></span>
            <slider :settings="miniCardsSettings" ref="miniCards">
              <template v-for="(multi, index) in postGallery">
                <div class="item" :key="index">
                  <img
                    :src="
                      require(`@/assets/images/gallery-post/${multi.picture}`)
                    "
                    alt=""
                  />
                </div>
              </template>
            </slider>
            <span
              @click="postGalleryNext"
              class="next slick-arrow"
              style="display: block"
              ><i class="fal fa-angle-right"></i
            ></span>
          </div>
        </div>
        <div class="col-lg-4">
          <home-one
            :trendingShortPost="false"
            :signup="false"
            :trendingBigPost="false"
            :ad="false"
            :sharePost="false"
            :darkClass="darkClass"
            role="sidebar"
            :datas="smallPostGallery"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import postGallery from "../Data/BigVideoCardWithDes";
import Slider from "../Helpers/Slider.vue";
import smallPostGallery from "../Data/NewsRowCard";
import BigVideoCardWithDes from "../Utility/Cards/BigVideoCardWithDes.vue";
import HomeOne from "../Utility/Sidebar/StyleOne.vue";
export default {
  components: { Slider, BigVideoCardWithDes, HomeOne },
  props: {
    darkClass: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    //post gallery
    postGallery: postGallery.data,
    smallPostGallery: smallPostGallery.data,
    selectedGallery: "trendy",
    miniCardsSettings: {
      slidesToShow: 8,
      slideToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slideToScroll: 1,
            autoplay: true,
          },
        },
      ],
    },
    BigCardsSettings: {
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      arrows: false,
    },
  }),
  methods: {
    //post gallery
    postGalleryPrev() {
      this.$refs.BigCards.prev();
      this.$refs.miniCards.prev();
    },
    postGalleryNext() {
      this.$refs.BigCards.next();
      this.$refs.miniCards.next();
    },
    selectGalleryTab(value) {
      this.selectedGallery = value;
    },
  },
};
</script>

<style></style>
