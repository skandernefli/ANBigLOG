<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <!--====== HEADER PART START ======-->
    <header-one image="logo.png" @toggleSidebar="toggleSidebar" />
    <!--====== HEADER PART ENDS ======-->

    <!--====== POST PART START ======-->

    <post-part-home-one />

    <!--====== POST PART ENDS ======-->

    <!--====== POST GALLERY PART START ======-->
    <post-gallery />

    <!--====== POST GALLERY PART ENDS ======-->

    <!--====== FEATURE PART START ======-->
    <features />

    <!--====== FEATURE PART ENDS ======-->

    <!--====== TRENDING NEWS PART START ======-->
    <!-- <trending-news /> -->

    <!--====== TRENDING NEWS PART ENDS ======-->

    <!--====== SINGLE PLAY POST PART START ======-->
    <!-- <single-play-post /> -->

    <!--====== VIDEO NEWS PART START ======-->

    <video-news />

    <!--====== VIDEO NEWS PART ENDS ======-->

    <!--====== ALL POST PART START ======-->

    <section class="all-post-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <entertainment-news />
            <sports-news />
            <div class="post-add mt-30">
              <a href="#"
                ><img src="@/assets/images/ads/one_ad.png" alt="ad"
              /></a>
            </div>
            <buisness-news class="pt-40" />
          </div>
          <div class="col-lg-4">
            <div class="all-post-sidebar">
              <share-post />
              <div class="upcoming-matches-post mt-35">
                <div
                  class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <h3 class="title">Upcoming Matches</h3>
                  <a href="#">ALL SEE</a>
                </div>
                <div class="upcoming-matches-post-items">
                  <div
                    class="upcoming-matches-post-item d-flex align-items-center"
                  >
                    <div class="upcoming-matches-flag">
                      <img src="@/assets/images/flag/flag-1.png" alt="flag" />
                    </div>
                    <div class="upcoming-matches-content">
                      <span>Germany <span>VS</span> France</span>
                      <ul>
                        <li>Tomorrow</li>
                        <li>22:30 (CST)</li>
                      </ul>
                    </div>
                    <div class="upcoming-matches-circle">
                      <div class="circle-bar">
                        <div class="first circle"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="upcoming-matches-post-item d-flex align-items-center"
                  >
                    <div class="upcoming-matches-flag">
                      <img src="@/assets/images/flag/flag-2.png" alt="flag" />
                    </div>
                    <div class="upcoming-matches-content">
                      <span>Spain <span>VS</span> Portugal</span>
                      <ul>
                        <li>Tomorrow</li>
                        <li>22:30 (CST)</li>
                      </ul>
                    </div>
                    <div class="upcoming-matches-circle">
                      <div class="circle-bar">
                        <div class="first circle"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="upcoming-matches-post-item d-flex align-items-center"
                  >
                    <div class="upcoming-matches-flag">
                      <img src="@/assets/images/flag/flag-3.png" alt="flag" />
                    </div>
                    <div class="upcoming-matches-content">
                      <span>Russia <span>VS</span> Italy</span>
                      <ul>
                        <li>Tomorrow</li>
                        <li>22:30 (CST)</li>
                      </ul>
                    </div>
                    <div class="upcoming-matches-circle">
                      <div class="circle-bar">
                        <div class="first circle"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="upcoming-matches-post-item d-flex align-items-center"
                  >
                    <div class="upcoming-matches-flag">
                      <img src="@/assets/images/flag/flag-4.png" alt="flag" />
                    </div>
                    <div class="upcoming-matches-content">
                      <span>Croatia <span>VS</span> England</span>
                      <ul>
                        <li>Tomorrow</li>
                        <li>22:30 (CST)</li>
                      </ul>
                    </div>
                    <div class="upcoming-matches-circle">
                      <div class="circle-bar">
                        <div class="first circle"></div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="upcoming-matches-post-item d-flex align-items-center"
                  >
                    <div class="upcoming-matches-flag">
                      <img src="@/assets/images/flag/flag-5.png" alt="flag" />
                    </div>
                    <div class="upcoming-matches-content">
                      <span>Germany <span>VS</span> France</span>
                      <ul>
                        <li>Tomorrow</li>
                        <li>22:30 (CST)</li>
                      </ul>
                    </div>
                    <div class="upcoming-matches-circle">
                      <div class="circle-bar">
                        <div class="first circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="newsletter-box mt-45">
                <h5 class="title">Newsletter</h5>
                <p>
                  Your email address will not be this published. Required fields
                  are News Today.
                </p>
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="Your email address" />
                    <button type="button">SIGN UP</button>
                  </div>
                </form>
                <span>We hate spam as much as you do</span>
              </div>
              <div class="Categories-post mt-40">
                <div
                  class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <h3 class="title">Categories</h3>
                  <a href="#">ALL SEE</a>
                </div>
                <div class="Categories-item">
                  <div class="item">
                    <img
                      src="@/assets/images/categories-1.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Restaurant</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-2.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Entertainment</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-3.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Financial</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-4.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Business</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-5.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Scientists</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-6.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>International’s</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sidebar-add pt-35">
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== ALL POST PART ENDS ======-->

    <!--====== FOOTER PART START ======-->
    <footer-one />

    <!--====== FOOTER PART ENDS ======-->

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
import HeaderOne from "../Utility/Header/index";
import PostPartHomeOne from "./PostPartHomeOne.vue";
import PostGallery from "./PostGallery.vue";
import Features from "./Features.vue";
// import TrendingNews from "./TrendingNews.vue";
// import SinglePlayPost from "./SinglePlayPost.vue";
import VideoNews from "./VideoNews.vue";
// import EntertainmentNews from "./EntertainmentNews.vue";
import SportsNews from "./SportsNews.vue";
import BuisnessNews from "./BuisnessNews.vue";
import SharePost from "./SharePost.vue";
import FooterOne from "../Utility/Footer/FooterOne.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
export default {
  components: {
    HeaderOne,
    PostPartHomeOne,
    PostGallery,
    Features,
    // TrendingNews,
    // SinglePlayPost,
    VideoNews,
    // EntertainmentNews,
    SportsNews,
    BuisnessNews,
    SharePost,
    FooterOne,
    Drawer,
    VideoPopUp,
  },
  data: () => ({
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

<style scoped>
/* play post */
.single-play-post-area .single-play-box {
  padding: 23px 12px !important;
}
</style>
