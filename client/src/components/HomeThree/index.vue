<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <header-three @toggleSidebar="toggleSidebar" />
    <post-play :datas="post" />
    <trending-post :datas="trendingPost" :buisnessData="buisnessData" />
    <international-post
      :internationalPost="internationalPost"
      :opinionPost="opinionPost"
      :scienceNews="scienceNews"
    />
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
import HeaderThree from "../Utility/HomeThree/index";
import PostPlay from "./PostPlay.vue";
import post from "../Data/post";
import trendingPost from "../Data/TrendingHomeThree";
import internationalPost from "../Data/InernationalPost";
import TrendingPost from "./TrendingPost.vue";
import InternationalPost from "./InternationalPost.vue";
import Footer from "./Footer.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
export default {
  components: {
    HeaderThree,
    PostPlay,
    TrendingPost,
    InternationalPost,
    Footer,
    Drawer,
    VideoPopUp,
  },
  data: () => ({
    sidebar: false,
    post: post.data,
    trendingPost: trendingPost.data,
    buisnessData: trendingPost.buisness,
    internationalPost: internationalPost.international,
    opinionPost: internationalPost.opinionNews,
    scienceNews: internationalPost.scienceNews,
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
