<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-two @toggleSidebar="toggleSidebar" />
    <posts
      :trending="trendingPost"
      :features="featurePost"
      :businessPost="buisnessPost"
      :mostViews="mostViews"
      :finance="finance"
    />
    <video-style-post :videoNews="videoNews" />
    <posts-two :morePost="morePost" />
    <others :sports="sports" :otherfinance="otherfinance" />
    <Footer />
    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <a href="#" class="go-top go-top-btn d-block">
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTwo from "../Utility/HeaderTwo/index";
import Posts from "./Posts.vue";
import trendingPost from "../Data/HomeTwoPost";
import VideoStylePost from "./VideoStylePost.vue";
import PostsTwo from "./PostsTwo.vue";
import Others from "./Others.vue";
import Footer from "./Footer.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
export default {
  components: {
    HeaderTwo,
    Posts,
    VideoStylePost,
    PostsTwo,
    Others,
    Footer,
    Drawer,
    VideoPopUp,
  },
  data: () => ({
    sidebar: false,
    trendingPost: trendingPost.trending,
    featurePost: trendingPost.features,
    buisnessPost: trendingPost.buisness,
    mostViews: trendingPost.trending,
    finance: trendingPost.finance,
    videoNews: trendingPost.videoNews,
    morePost: trendingPost.morePost,
    sports: trendingPost.sports,
    otherfinance: trendingPost.otherfinance,
  }),
  mounted() {
    document.body.classList.add("home-3-bg");
  },
  beforeDestroy() {
    document.body.classList.remove("home-3-bg");
  },
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    topToBottom() {
      const result = document.querySelector(".go-top");
      if (
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
      ) {
        result.classList.add("active");
      } else {
        result.classList.remove("active");
      }
    },
  },
};
</script>

<style></style>
