<template>
  <div
    :class="[
      'post_gallery_sidebar',
      darkClass && 'section' in darkClass ? darkClass.section : '',
    ]"
  >
    <ul class="nav nav-pills" id="pills-tab" role="tablist">
      <li class="nav-item" @click.prevent="selectGalleryTab('trendy')">
        <a
          :class="['nav-link', selectedGallery === 'trendy' ? 'active' : '']"
          data-toggle="pill"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
          >TRENDY</a
        >
      </li>
      <li class="nav-item" @click.prevent="selectGalleryTab('latest')">
        <a
          :class="['nav-link', selectedGallery === 'latest' ? 'active' : '']"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
          >LATEST</a
        >
      </li>
      <li class="nav-item" @click.prevent="selectGalleryTab('popular')">
        <a
          :class="['nav-link', selectedGallery === 'popular' ? 'active' : '']"
          class="nav-link"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
          >POPULAR</a
        >
      </li>
    </ul>
    <div class="tab-content">
      <div
        :class="[
          'tab-pane fade',
          selectedGallery === 'trendy' ? 'show active' : '',
        ]"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="post_gallery_items" v-if="datas && datas.length > 0">
          <template v-for="(small, index) in datas.slice(0, 5)">
            <row-card
              :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
              :category="true"
              :datas="small"
              :key="index"
            />
          </template>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div
        :class="[
          'tab-pane fade',
          selectedGallery === 'latest' ? 'show active' : '',
        ]"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div v-if="datas && datas.length > 0" class="post_gallery_items">
          <template v-for="(small, index) in datas.slice(0, 5)">
            <row-card :category="true" :datas="small" :key="index" />
          </template>
        </div>
      </div>
    </div>
    <div class="tab-content">
      <div
        :class="[
          'tab-pane fade',
          selectedGallery === 'popular' ? 'show active' : '',
        ]"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div v-if="datas && datas.length > 0" class="post_gallery_items">
          <template v-for="(small, index) in datas.slice(0, 5)">
            <row-card :category="true" :datas="small" :key="index" />
          </template>
        </div>
      </div>
    </div>
    <signup-style-two v-if="signup" />
    <div v-if="trendingBigPost" class="trending-sidebar mt-40">
      <div class="section-title">
        <h3 class="title">Trending News</h3>
      </div>
      <div class="trending-sidebar-slider position-relative">
        <span
          @click.prevent="trendingNewsPrev"
          class="prev slick-arrow"
          style="display: block"
          ><i class="fal fa-angle-left"></i
        ></span>
        <slider :settings="trendingNews" ref="trendingNews">
          <template v-for="(data, index) in datas">
            <divide-card stype="col" :datas="data" :key="index" />
          </template>
        </slider>
        <span
          @click.prevent="trendingNewsNext"
          class="next slick-arrow"
          style="display: block"
          ><i class="fal fa-angle-right"></i
        ></span>
      </div>
    </div>
    <div v-if="trendingShortPost" class="trending-news-post-items">
      <div class="gallery_item">
        <div class="gallery_item_thumb">
          <img src="@/assets/images/gallery-1.jpg" alt="gallery" />
          <div class="icon"><i class="fas fa-bolt"></i></div>
        </div>
        <div class="gallery_item_content">
          <div class="post-meta">
            <div class="meta-categories">
              <a href="#">TECHNOLOGY</a>
            </div>
            <div class="meta-date">
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 class="title">
            <a href="#">Nancy zhang a chinese busy woman and dhaka</a>
          </h4>
        </div>
      </div>
      <div class="gallery_item">
        <div class="gallery_item_thumb">
          <img src="@/assets/images/gallery-2.jpg" alt="gallery" />
          <div class="icon"><i class="fas fa-bolt"></i></div>
        </div>
        <div class="gallery_item_content">
          <div class="post-meta">
            <div class="meta-categories">
              <a href="#">TECHNOLOGY</a>
            </div>
            <div class="meta-date">
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 class="title">
            <a href="#">The billionaire Philan thropist read to learn</a>
          </h4>
        </div>
      </div>
      <div class="gallery_item">
        <div class="gallery_item_thumb">
          <img src="@/assets/images/gallery-3.jpg" alt="gallery" />
          <div class="icon"><i class="fas fa-bolt"></i></div>
        </div>
        <div class="gallery_item_content">
          <div class="post-meta">
            <div class="meta-categories">
              <a href="#">TECHNOLOGY</a>
            </div>
            <div class="meta-date">
              <span>March 26, 2020</span>
            </div>
          </div>
          <h4 class="title">
            <a href="#">Cheap smartphone sensor could help you old food safe</a>
          </h4>
        </div>
      </div>
    </div>
    <div v-if="ad" class="sidebar-add pt-35">
      <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
    </div>
    <share-post v-if="sharePost" class="mt-40" />
  </div>
</template>

<script>
import Slider from "../../Helpers/Slider.vue";
import SharePost from "../../Home/SharePost.vue";
import DivideCard from "../Cards/DivideCard.vue";
import RowCard from "../Cards/RowCard.vue";
import SignupStyleTwo from "../Signup/SignupStyleTwo.vue";
export default {
  components: { RowCard, SignupStyleTwo, DivideCard, Slider, SharePost },
  props: {
    datas: {
      type: Array,
      default: () => [],
    },
    darkClass: {
      type: Object,
      default: () => {},
    },
    signup: {
      type: Boolean,
      default: true,
    },
    trendingBigPost: {
      type: Boolean,
      default: true,
    },
    trendingShortPost: {
      type: Boolean,
      default: true,
    },
    ad: {
      type: Boolean,
      default: true,
    },
    sharePost: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    selectedGallery: "trendy",
    trendingNews: {
      autoplay: true,
      slideToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      dots: false,
    },
  }),
  methods: {
    selectGalleryTab(value) {
      this.selectedGallery = value;
    },
    trendingNewsPrev() {
      this.$refs.trendingNews.prev();
    },
    trendingNewsNext() {
      this.$refs.trendingNews.next();
    },
  },
};
</script>

<style></style>
