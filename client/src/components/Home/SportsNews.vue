<template>
  <div class="sports-news-area">
    <div
      :class="[
        'section-title',
        darkClass && 'title' in darkClass ? darkClass.title : '',
      ]"
    >
      <h3 class="title">Sports News</h3>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-6">
        <divide-card
          :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
          stype="col"
          :datas="sportNews[0]"
        />
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="trending-sidebar-slider">
          <span
            @click="sportSliderPrev"
            class="prev slick-arrow d-md-block d-none"
            ><i class="fal fa-angle-left"></i
          ></span>
          <slider :settings="trendingSidebarSlide" ref="sportSlider">
            <div class="post_gallery_items">
              <template v-for="(data, index) in sportNews.slice(1, 6)">
                <row-card
                  :class="[
                    darkClass && 'news_item' in darkClass
                      ? darkClass.news_item
                      : '',
                  ]"
                  :sports="true"
                  :datas="data"
                  :key="index"
                />
              </template>
            </div>
            <div class="post_gallery_items">
              <template v-for="(data, index) in sportNews.slice(1, 6)">
                <row-card
                  :class="[
                    darkClass && 'news_item' in darkClass
                      ? darkClass.news_item
                      : '',
                  ]"
                  :sports="true"
                  :datas="data"
                  :key="index"
                />
              </template>
            </div>
          </slider>
          <span
            @click="sportSliderNext"
            class="next slick-arrow d-md-block d-none"
            ><i class="fal fa-angle-right"></i
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sportNews from "../Data/sportNews";
import Slider from "../Helpers/Slider.vue";
import DivideCard from "../Utility/Cards/DivideCard.vue";
import RowCard from "../Utility/Cards/RowCard.vue";
export default {
  components: { DivideCard, Slider, RowCard },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    sportNews: sportNews.data,
    trendingSidebarSlide: {
      arrows: false,
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
    },
  }),
  methods: {
    //sports
    sportSliderPrev() {
      this.$refs.sportSlider.prev();
    },
    sportSliderNext() {
      this.$refs.sportSlider.next();
    },
  },
};
</script>

<style></style>
