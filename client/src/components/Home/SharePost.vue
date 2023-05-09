<template>
  <div class="share-post-col">
    <div class="most-share-post">
      <div
        class="section-title"
        :class="[
          'section-title',
          darkClass && 'title' in darkClass ? darkClass.title : '',
        ]"
      >
        <h3 class="title">Most Share</h3>
      </div>
    </div>
    <div class="trending-sidebar-slider position-relative">
      <span
        @click="sharePostPrev"
        class="prev slick-arrow"
        style="display: block"
        ><i class="fal fa-angle-left"></i
      ></span>
      <slider :settings="trendingSidebarSlide" ref="sharePost">
        <div class="most-share-post-items">
          <template v-for="(data, index) in sharePosts.slice(0, 5)">
            <share-card
              :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
              :count="index + 1"
              :datas="data"
              :key="index"
            />
          </template>
        </div>
        <div class="most-share-post-items">
          <template v-for="(data, index) in sharePosts.slice(0, 5)">
            <share-card
              :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
              :count="index + 1"
              :datas="data"
              :key="index"
            />
          </template>
        </div>
      </slider>
      <span
        @click="sharePostNext"
        class="next slick-arrow"
        style="display: block"
        ><i class="fal fa-angle-right"></i
      ></span>
    </div>
  </div>
</template>

<script>
import ShareCard from "../Utility/Cards/ShareCard.vue";
import sharePosts from "../Data/sharePost";
import Slider from "../Helpers/Slider.vue";
export default {
  components: { ShareCard, Slider },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    sharePosts: sharePosts.data,
    trendingSidebarSlide: {
      arrows: false,
      slidesToShow: 1,
      slideToScroll: 1,
    },
  }),
  methods: {
    //share
    sharePostNext() {
      this.$refs.sharePost.next();
    },
    sharePostPrev() {
      this.$refs.sharePost.prev();
    },
  },
};
</script>

<style>
</style>