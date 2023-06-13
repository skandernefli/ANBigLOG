<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <!--====== HEADER PART START ======-->
    <header-one image="logo.svg" @toggleSidebar="toggleSidebar" />
    <!--====== HEADER PART ENDS ======-->

    <!--====== POST PART START ======-->

    <post-part-home-one />

    <!--====== POST PART ENDS ======-->

    <!--====== POST GALLERY PART START ======-->
    <post-gallery />


    <!--====== POST GALLERY PART ENDS ======-->
    <section class="all-post-area pdt">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">

            <Movies />
          </div>
          <div class="col-lg-4">
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
              <div class="Categories-post mt-40">
                <div class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  ">
                  <h3 class="title">Categories</h3>
                </div>
                <div class="Categories-item">
                  <div class="item">
                    <img src="@/assets/images/categories-1.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Personal Development'"  >
                        <span>Personal Development </span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Health and Fitness'">
        <span>Health and Fitness </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-3.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Travel and Adventure'">
        <span>Travel and Adventure </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-4.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Technology and Gadgets'">
        <span>Technology and Gadgets </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>

            </div></div></div>
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
              <div class="Categories-post mt-40">
                <div class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  ">
                  <h3 class="title">Categories</h3>
                </div>
                <div class="Categories-item">
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Food and Cooking'">
        <span>Food and Cooking </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Fashion and Beauty'">
        <span>Fashion and Beauty </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                     </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
             <!--      <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Finanace and Money Management</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>DIY and Crafts</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div> -->

                </div>
              </div>
            </div></div>
            <div class="col-lg-4">
          
          </div>

        </div>
      </div>
    </section>
    <!--====== FEATURE PART START ======-->
    <features />

    <!--====== FEATURE PART ENDS ======-->

    <!--====== TRENDING NEWS PART START ======-->
    <trending-news />

    <!--====== TRENDING NEWS PART ENDS ======-->

    <!--====== SINGLE PLAY POST PART START ======-->
    <single-play-post />

    <!--====== VIDEO NEWS PART START ======-->

    <video-news />

    <!--====== VIDEO NEWS PART ENDS ======-->

    <!--====== ALL POST PART START ======-->

    <section class="all-post-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="post-add mt-30">
              <a href="#"><img src="@/assets/images/ads/one_ad.png" alt="ad" /></a>
            </div>
            <entertainment-news />
            <div class="post-add mt-30">
              <a href="#"><img src="@/assets/images/ads/one_ad.png" alt="ad" /></a>
            </div>
            <sports-news />
            <div class="post-add mt-30">
              <a href="#"><img src="@/assets/images/ads/one_ad.png" alt="ad" /></a>
            </div>
            <AllPosts />
          </div>
          <div v-if="isDisplay===false" class="col-lg-4">
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
              <div class="Categories-post mt-40">
                <div class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  ">
                  <h3 class="title">Categories</h3>
                </div>
                <div class="Categories-item">
                  <div class="item">
                    <img src="@/assets/images/categories-1.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Personal Development'"  >
                        <span>Personal Development </span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Health and Fitness'">
        <span>Health and Fitness </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-3.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Travel and Adventure'">
        <span>Travel and Adventure </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-4.jpg" alt="categories" />
                    <div class="Categories-content">
    <router-link :to="'/Categories/latest/PostsInCategory/Technology and Gadgets'">
        <span>Technology and Gadgets </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>

                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Food and Cooking'">
        <span>Food and Cooking </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Fashion and Beauty'">
        <span>Fashion and Beauty </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Finance and Money Management'">
        <span>Finance and Money Management </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/DIY and Crafts'">
        <span>DIY and Crafts </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Parenting and Family'">
        <span>Parenting and Family </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Home and Gardening'">
        <span>Home and Gardening </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Book Reviews and Literature'">
        <span>Book Reviews and Literature </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Business and Entrepreneurship'">
        <span>Business and Entrepreneurship </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Photography and Visual Arts'">
        <span>Photography and Visual Arts </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Sustainable Living'">
        <span>Sustainable Living </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Pet Care and Animal Wellfare'">
        <span>Pet Care and Animal Wellfare </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/News and Current Events'">
        <span>News and Current Events </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Politics and Government'">
        <span>Politics and Government </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Social Issues and Activism'">
        <span>Social Issues and Activism </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Technology Trends'">
        <span>Technology Trends </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Entertainment and Pop Culture'">
        <span>Entertainment and Pop Culture </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>


                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Gaming and Esports'">
        <span>Gaming and Esports </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Science and Space'">
        <span>Science and Space </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Environment and Sustainability'">
        <span>Environment and Sustainability </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Education and Learning'">
        <span>Education and Learning </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Sports and Fitness'">
        <span>Sports and Fitness </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Personal Finance and Investing'">
        <span>Personal Finance and Investing </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Mental Health and Well-being'">
        <span>Mental Health and Well-being </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Cultural Insights and Travel'">
        <span>Cultural Insights and Travel </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-5.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Artificial Intelligence and Robotics'">
        <span>Artificial Intelligence and Robotics </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>

                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-6.jpg" alt="categories" />
                    <div class="Categories-content">
                      <router-link :to="'/Categories/latest/PostsInCategory/Cryptocurrency and Blockchain'">
        <span>Cryptocurrency and Blockchain </span>
        <img src="@/assets/images/arrow.svg" alt="" />
    </router-link>
                    </div>
                  </div>
                  <div class="item">
                    <img src="@/assets/images/categories-2.jpg" alt="categories" />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sidebar-add pt-35">
                  <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
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
import TrendingNews from "./TrendingNews.vue";
import SinglePlayPost from "./SinglePlayPost.vue";
import VideoNews from "./VideoNews.vue";
import EntertainmentNews from "./EntertainmentNews.vue";
import Movies from "./Movies.vue";
import SportsNews from "./SportsNews.vue";
import AllPosts from "./allPosts.vue"
import FooterOne from "../Utility/Footer/FooterOne.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
export default {
  components: {
    HeaderOne,
    Movies,
    PostPartHomeOne,
    PostGallery,
    Features,
    TrendingNews,
    SinglePlayPost,
    VideoNews,
    EntertainmentNews,
    SportsNews,

    AllPosts,
    FooterOne,
    Drawer,
    VideoPopUp,
  },
  data: () => ({
    sidebar: false,
    isDisplay:false,

  }),
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    }, handleResize() {
      // Update the value of isLargeScreen based on the media query
      this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
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
  }, mounted() {
    // Add event listener for window resize
    window.addEventListener("resize", this.handleResize);
    // Initial check
    this.handleResize();
  },beforeDestroy() {
    // Remove event listener when component is destroyed
    window.removeEventListener("resize", this.handleResize);
  },  
};
</script>

<style scoped>
/* play post */
.single-play-post-area .single-play-box {
  padding: 23px 12px !important;
}

.pdt {
  padding-top: 50pxnb !important;
}
</style>
