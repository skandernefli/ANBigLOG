<template>
  <section class="trending-news-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8"  v-if="manageBigPosts.length > 0">
          <div
            :class="[
              'section-title',
              darkClass && 'title' in darkClass ? darkClass.title : '',
            ]"
          >
            <h3 class="title">Trending News</h3>
          </div>
          <div class="trending-news-slider position-relative">
            <span
              @click="trandingPrev"
              class="prev slick-arrow"
              style="display: block"
              ><i class="fal fa-angle-left"></i
            ></span>
            <slider :settings="trendingSettings" ref="trendingSlider">
              <template v-for="(data, index) in manageBigPosts">
                <div :key="index" class="px-2">
                  <divide-card
                    :class="[
                      darkClass && 'item' in darkClass ? darkClass.item : '',
                    ]"
                    stype="col"
                    :datas="data"
                  />
                </div>
              </template>
            </slider>
            <span
              @click="trandingNext"
              class="next slick-arrow"
              style="display: block"
              ><i class="fal fa-angle-right"></i
            ></span>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div
                :class="[
                  'trending-news-post-items',
                  darkClass && 'news_section' in darkClass
                    ? darkClass.news_section
                    : '',
                ]"
                  v-if="manageSidePosts.length > 0"
                
              >
                <template
                  v-for="(small, index) in manageSidePosts.slice(0, 3)"
                >
                  <row-card
                    :class="[
                      darkClass && 'news_item' in darkClass
                        ? darkClass.news_item
                        : '',
                    ]"
                    :key="index"
                    :trending="true"
                    :datas="small"
                  />
                </template>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div
                :class="[
                  'trending-news-post-items',
                  darkClass && 'news_section' in darkClass
                    ? darkClass.news_section
                    : '',
                ]"
              >
                <template
                  v-for="(small, index) in manageSidePosts.slice(3, 6)"
                >
                  <row-card
                    :class="[
                      darkClass && 'news_item' in darkClass
                        ? darkClass.news_item
                        : '',
                    ]"
                    :key="index"
                    :trending="true"
                    :datas="small"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 display_2">
          <div class="trending-right-sidebar">
            <FollowCount />
            <div class="trending-most-view mt-25">
              <div class="section-title">
                <h3 class="title">Most View</h3>
              </div>
            </div>
            <div class="trending-sidebar-slider position-relative">
              <span
                @click="tssPrev"
                class="prev slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-left"></i
              ></span>
              <slider
                :settings="trendingSidebarSlide"
                ref="trendingSidebarSlide"
              >
                <div class="post_gallery_items" v-if="manageSidePosts.length > 0">
                  <template
                    v-for="(small, index) in manageSidePosts.slice(6, 12)"
                  >
                    <row-card
                      :class="[
                        darkClass && 'news_item' in darkClass
                          ? darkClass.news_item
                          : '',
                      ]"
                      :key="index"
                      :counting="true"
                      :count="index + 1"
                      :datas="small"
                    />
                  </template>
                </div>
                <div class="post_gallery_items">
                  <template
                    v-for="(small, index) in manageSidePosts.slice(12, 18)"
                  >
                    <row-card
                      :class="[
                        darkClass && 'news_item' in darkClass
                          ? darkClass.news_item
                          : '',
                      ]"
                      :key="index"
                      :counting="true"
                      :count="index + 1"
                      :datas="small"
                    />
                  </template>
                </div>
              </slider>
              <span
                @click="tssNext"
                class="next slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-right"></i
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
import DivideCard from "../Utility/Cards/DivideCard.vue";
/* import manageBigPosts from "../Data/TrendingPost";
 *//* import smallPostGallery from "../Data/NewsRowCard"; */
import RowCard from "../Utility/Cards/RowCard.vue";
import FollowCount from "../Utility/FollowCount/index";
export default {
  components: { Slider, DivideCard, RowCard, FollowCount },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    manageSidePosts: [],
    manageBigPosts: [],
    trendingSettings: {
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
    trendingSidebarSlide: {
      arrows: false,
      slidesToShow: 1,
      slideToScroll: 1,
    },
  }),  methods: {
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
  async  fetchmanageBigPosts() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageBigPosts").then(response => {
       this.manageBigPosts= response[0].data;
    });
  },
  async  fetchmanageSidePosts() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageSidePosts").then(response => {
       this.manageSidePosts= response[0].data;
    });
  },
    //trending
    trandingPrev() {
      this.$refs.trendingSlider.prev();
    },
    trandingNext() {
      this.$refs.trendingSlider.next();
    },
    tssPrev() {
      this.$refs.trendingSidebarSlide.prev();
    },
    tssNext() {
      this.$refs.trendingSidebarSlide.next();
    },
  },
  async created() {
    await this.fetchmanageBigPosts();
    await this.fetchmanageSidePosts();


   

  },

};
</script>

<style>

@media (max-width: 767px) {
.display_2{
  display: none;
}
}
</style>
