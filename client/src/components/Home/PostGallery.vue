<template>
  <div class="post__gallery__area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8"  v-if="postGallery.length > 0">
          <div class="post_gallery_slider">
            <slider :settings="BigCardsSettings" ref="BigCards">
              <big-video-card-with-des v-for="(single, index) in postGallery" :key="index" :datas="single" />
            </slider>

          </div>
          <div class="post_gallery_inner_slider" style="position: relative">
            <span @click="postGalleryPrev" class="prev slick-arrow" style="display: block"><i
                class="fal fa-angle-left"></i></span>
            <slider :settings="miniCardsSettings" ref="miniCards">
              <div v-for="(multi, index) in postGallery" class="item" :key="index">
                <img :src="multi.picture" :alt="multi.title" />
              </div>
            </slider>

            <span @click="postGalleryNext" class="next slick-arrow" style="display: block"><i
                class="fal fa-angle-right"></i></span>
          </div>
        </div>
        <div class="col-lg-4" v-if="smallPostGallery.length > 0 && latestPostGallery.length > 0 &&popularPostGallery.length > 0 " >
          <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
            :darkClass="darkClass" role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery"
            :datas_3="popularPostGallery" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
import BigVideoCardWithDes from "../Utility/Cards/BigVideoCardWithDes.vue";
import HomeOne from "../Utility/Sidebar/StyleOne.vue";

export default {
  components: { Slider, BigVideoCardWithDes, HomeOne },
  props: {
    darkClass: {
      type: Object,
      default: () => { },
    },
  },
  async created() {
    await this.fetchPostGallery();
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();




  }, methods: {
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
    //post gallery
    async fetchPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/postgalley");
      const data = await response.json();
      this.postGallery = data[0].data;


    },
    async fetchsmallPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/trendy").then(res => res.json());
      const data = response[0].data;
      return this.smallPostGallery = data;
    },
    async fetchlatestPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/latest").then(res => res.json());
      const data = response[0].data;
      return this.latestPostGallery = data;
    },
    async fetchpopularPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/popular").then(res => res.json());
      const data = response[0].data;
      return this.popularPostGallery = data;
    },

  },
  data: () => ({
    //post gallery
    postGallery: [],
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    selectedGallery: 'trendy',
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



};
</script>

<style></style>
