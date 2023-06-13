<template>
  <section class="video-news-area">
    <div class="container custom-container">
      <div
        :class="[
          'video-news-box',
          darkClass && 'section' in darkClass ? darkClass.section : '',
        ]"
      >
        <div class="row">
          <div class="col-lg-8">
            <div class="video-news-post">
              <div class="section-title section-title-2">
                <h3 class="title">Videos News</h3>
              </div>
              <div
                :class="[
                  'video-news-post-item',
                  darkClass && 'section_2' in darkClass
                    ? darkClass.section_2
                    : '',
                ]"
                 v-if="mainvideo"
              >
                <div class="video-news-post-thumb">
                  <img :src="mainvideo.image" :alt="mainvideo.title" />
                  <div class="play-btn">
                    <a class="video-popup" @click.prevent="$store.dispatch('setUrl', mainvideo.linkvideo); $store.dispatch('toggleVideo')">
<i class="fab fa-youtube"></i
                    ></a>
                  </div>
                </div>
                <div class="video-news-post-content">
                  <div class="post-meta" v-if="mainvideo.category && mainvideo.category.name && mainvideo.category.create_At">
                    <div class="meta-categories"  >
                      <a :href="mainvideo.linkpost">{{ mainvideo.category.name }}</a>
                    </div>
                    <div class="meta-date">
                      <span>{{ mainvideo.category.create_At }}</span>
                    </div>
                  </div>
                  <h3 class="title">
                    <a :href="mainvideo.linkpost">{{ mainvideo.title }}</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="populer-post"     v-if="smallPostGallery.length > 0">
              <div class="section-title">
                <h3 class="title">Popular</h3>
              </div>
              <div class="trending-sidebar-slider position-relative">
                <span
                  @click="tssPrev"
                  class="prev slick-arrow"
                  style="display: block"
                  ><i class="fal fa-angle-left"></i
                ></span>
                <slider :settings="videoNewsSlide" ref="trendingSidebarSlide">
                  <div class="post_gallery_items">
                    <template
                      v-for="(small, index) in smallPostGallery.slice(0, 4)"
                    >
                      <row-card
                        :class="[
                          'populer_item-style',
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
                  <div class="post_gallery_items">
                    <template
                      v-for="(small, index) in smallPostGallery.slice(4, 8)"
                    >
                      <row-card
                        :class="[
                          'populer_item-style',
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
    </div>
  </section>
</template>

<script>
/* import smallPostGallery from "../Data/NewsRowCard";
 */import Slider from "../Helpers/Slider.vue";
import RowCard from "../Utility/Cards/RowCard.vue";
export default {
  components: { Slider, RowCard },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    smallPostGallery: [],
    mainvideo: {},
    videoNewsSlide: {
      arrows: false,
      slidesToShow: 1,
      slideToScroll: 1,
    },
  }),
  async created() {
    await this.fetchsmallPostGallery();
    await this.fetchmainvideo();


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

    async  fetchsmallPostGallery() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/managevideoposts").then(response => {
       this.smallPostGallery= response[0].data;
    });
  },
  async  fetchmainvideo() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/mainvideo").then(response => {
       this.mainvideo= response[0].data[0];
    });
  },
    tssPrev() {
      this.$refs.trendingSidebarSlide.prev();
    },
    tssNext() {
      this.$refs.trendingSidebarSlide.next();
    },
  },
};
</script>

<style></style>
