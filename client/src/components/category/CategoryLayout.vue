<template>
  <div>
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <slot></slot>
    <!--====== LATEST NEWS PART START ======-->
   
    <!--====== POST FORM PART ENDS ======-->

    <!--====== POST COMMENTS PART START ======-->

  

    <!--====== POST COMMENTS PART ENDS ======-->

    <!--====== ADD PART ENDS ======-->

    <div class="add-area text-center">
      <a href="#">
        <img src="@/assets/images/ads/one_ad.png" alt="" />
      </a>
    </div>

    <!--====== ADD PART ENDS ======-->

    <Footer />
    <!--====== GO TO TOP PART START ======-->
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
    <!--====== GO TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import Header from "../Utility/Header/index";
import Footer from "../Utility/Footer/FooterOne";
import Posts from "../Data/About";
import Drawer from "../Mobile/Drawer.vue";
export default {
  components: { Header, Footer,  Drawer },
  data: () => ({
    posts: Posts.data,
    sidebar: false,
  }),
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
