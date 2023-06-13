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
      <div class="col-lg-6 col-md-6"  v-if="manageSportsMainSection.length > 0">
        <divide-card
          :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
          stype="col"
          :datas="manageSportsMainSection[0]"
        />
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="trending-sidebar-slider"  v-if="manageSideSportsSection.length > 0">
          <span
            @click="sportSliderPrev"
            class="prev slick-arrow d-md-block d-none"
            ><i class="fal fa-angle-left"></i
          ></span>
          <slider :settings="trendingSidebarSlide" ref="sportSlider">
            <div class="post_gallery_items">
              <template v-for="(data, index) in manageSideSportsSection.slice(0, 5)">
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
              <template v-for="(data, index) in manageSideSportsSection.slice(5, 12)">
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
    manageSportsMainSection: [],
    manageSideSportsSection:[],
    trendingSidebarSlide: {
      arrows: false,
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
    },
  }),async created() {
    await this.fetchmanageSportsMainSection();
    await this.fetchmanageSideSportsSection();


   

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
    async  fetchmanageSportsMainSection() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageSportsMainSection").then(response => {
       this.manageSportsMainSection= response[0].data;
    });
  },
  async  fetchmanageSideSportsSection() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageSideSportsSection").then(response => {
       this.manageSideSportsSection= response[0].data;
    });
  },
  
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
