<template>
  <div>
    <video-pop-up />
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <!--====== HEADER PART START ======-->
    <Header
      @toggleSidebar="toggleSidebar"
      class="header-dark"
      image="logo-2.png"
      :darkClass="{ menuItem: 'newspark-dark-menu-items' }"
    />
    <!--====== HEADER PART ENDS ======-->

    <!--====== POST PART START ======-->

    <!-- <post-part-home-one /> -->

    <!--====== POST PART ENDS ======-->

    <!--====== POST GALLERY PART START ======-->
    <post-gallery
      class="pt-50"
      :darkClass="{
        section: 'post_gallery_sidebar_dark',
        item: 'gallery_item_dark',
      }"
    />

    <!--====== POST GALLERY PART ENDS ======-->

    <!--====== FEATURE PART START ======-->
    <features />

    <!--====== FEATURE PART ENDS ======-->

    <!--====== TRENDING NEWS PART START ======-->
    <trending-news
      :darkClass="{
        title: 'section-title-2',
        item: 'trending-news-item-dark',
        news_section: 'trending-news-post-items-dark',
        news_item: 'gallery_item_dark',
      }"
    />
    <!--====== TRENDING NEWS PART ENDS ======-->

    <!--====== SINGLE PLAY POST PART START ======-->
    <single-play-post class="single-play-post-dark-area" />

    <!--====== VIDEO NEWS PART START ======-->

    <video-news
      class="video-news-dark"
      :darkClass="{
        section: 'video-news-box-dark',
        section_2: 'video-news-post-item-dark',
        news_item: 'gallery_item_dark',
      }"
    />

    <!--====== VIDEO NEWS PART ENDS ======-->

    <!--====== ALL POST PART START ======-->

    <section class="all-post-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <entertainment-news
              :darkClass="{
                item: 'trending-news-item-dark',
                title: 'section-title-2',
              }"
            />
            <sports-news
              :darkClass="{
                item: 'trending-news-item-dark',
                title: 'section-title-2',
                news_item: 'gallery_item_dark',
              }"
            />
            <div class="post-add mt-30">
              <a href="#"
                ><img src="@/assets/images/ads/one_ad.png" alt="ad"
              /></a>
            </div>
            <buisness-news
              :darkClass="{
                item: 'business-post-item-dark',
                title: 'section-title-2',
              }"
              class="pt-40"
            />
          </div>
          <div class="col-lg-4">
            <div class="all-post-sidebar">
              <share-post
                :darkClass="{
                  title: 'section-title-2',
                  item: 'most-share-post-item-dark',
                }"
              />
              <div class="upcoming-matches-post mt-35">
                <div
                  class="
                    section-title section-title-2
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
                    class="
                      upcoming-matches-post-item upcoming-matches-post-item-dark
                      d-flex
                      align-items-center
                    "
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
                    class="
                      upcoming-matches-post-item upcoming-matches-post-item-dark
                      d-flex
                      align-items-center
                    "
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
                    class="
                      upcoming-matches-post-item upcoming-matches-post-item-dark
                      d-flex
                      align-items-center
                    "
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
                    class="
                      upcoming-matches-post-item upcoming-matches-post-item-dark
                      d-flex
                      align-items-center
                    "
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
                    class="
                      upcoming-matches-post-item upcoming-matches-post-item-dark
                      d-flex
                      align-items-center
                    "
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
              <div class="newsletter-box newsletter-box-dark mt-45">
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
                    section-title section-title-2
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

    <footer class="footer-area footer-dark">
      <div class="container">
        <div class="footer-topbar">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-5">
              <div class="footer-logo">
                <a href="#"><img src="@/assets/images/logo-2.png" alt="" /></a>
                <ul>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 col-md-7">
              <div class="footer-newaletter">
                <div class="input-box">
                  <input type="text" placeholder="Your email address" />
                  <button type="button">SIGN UP</button>
                </div>
                <p>We hate spam as much as you do</p>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-widget-area">
          <div class="row">
            <div class="col-lg-8">
              <div class="footer-widget-right-border">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="widget widget-list">
                      <div class="section-title section-title-2">
                        <h3 class="title">News categories</h3>
                      </div>
                      <div class="list d-flex justify-content-between">
                        <ul>
                          <li><a href="#">Politics</a></li>
                          <li><a href="#">Business</a></li>
                          <li><a href="#">Technology</a></li>
                          <li><a href="#">Science</a></li>
                          <li><a href="#">Health</a></li>
                          <li><a href="#">Sports</a></li>
                          <li><a href="#">Entertainment</a></li>
                        </ul>
                        <ul>
                          <li><a href="#">Education</a></li>
                          <li><a href="#">Obituaries</a></li>
                          <li><a href="#">Corrections</a></li>
                          <li><a href="#">Education</a></li>
                          <li><a href="#">Today’s Paper</a></li>
                          <li><a href="#">Corrections</a></li>
                          <li><a href="#">Foods</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="widget widget-list widget-list-2">
                      <div class="section-title section-title-2">
                        <h3 class="title">Living</h3>
                      </div>
                      <div class="list d-flex justify-content-between">
                        <ul>
                          <li><a href="#">Crossword</a></li>
                          <li><a href="#">Food</a></li>
                          <li><a href="#">Automobiles</a></li>
                          <li><a href="#">Education</a></li>
                          <li><a href="#">Health</a></li>
                          <li><a href="#">Magazine</a></li>
                          <li><a href="#">Weddings</a></li>
                        </ul>
                        <ul>
                          <li><a href="#">Classifieds</a></li>
                          <li><a href="#">Photographies</a></li>
                          <li><a href="#">NYT Store</a></li>
                          <li><a href="#">Journalisms</a></li>
                          <li><a href="#">Public Editor</a></li>
                          <li><a href="#">Tools & Services</a></li>
                          <li><a href="#">My Account</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer-twitter-post">
                  <div class="row">
                    <div class="col-lg-5 col-md-5">
                      <div class="widget widget-list">
                        <div class="section-title section-title-2">
                          <h3 class="title">Opinion</h3>
                        </div>
                        <div class="list">
                          <ul>
                            <li><a href="#">Today’s Opinion</a></li>
                            <li><a href="#">Op-Ed Contributing</a></li>
                            <li><a href="#">Contributing Writers</a></li>
                            <li><a href="#">Business News</a></li>
                            <li><a href="#">Collections</a></li>
                            <li><a href="#">Today’s Paper</a></li>
                            <li><a href="#">Saturday Review</a></li>
                            <li><a href="#">Product Review</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                      <div class="widget widget-twitter-post">
                        <div class="twitter-post">
                          <div class="icon">
                            <i class="fab fa-twitter"></i>
                          </div>
                          <div class="twitter-content">
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…
                              <a href="#"
                                >@newspark #technology
                                https://dribbble.com/subash_chandra</a
                              >
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                        <div class="twitter-post">
                          <div class="icon">
                            <i class="fab fa-twitter"></i>
                          </div>
                          <div class="twitter-content">
                            <p>
                              Cyber Monday Sale, Save 33% on Jannah theme during
                              our year-end Sale, Purchase a new license for your
                              next project…
                              <a href="#"
                                >@newspark #technology
                                https://dribbble.com/subash_chandra</a
                              >
                            </p>
                            <span>March 26, 2020</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="footer-rightbar mt-60">
                <div class="row">
                  <div class="col-lg-12 col-md-6">
                    <div class="widget widget-news">
                      <div class="section-title section-title-2">
                        <h3 class="title">News categories</h3>
                      </div>
                      <div class="footer-news">
                        <div
                          class="
                            gallery_item gallery_item-style-2
                            footer_gallery_item
                          "
                        >
                          <div class="gallery_item_content">
                            <div class="post-meta">
                              <div class="meta-categories">
                                <a href="#" tabindex="0">TECHNOLOGY</a>
                              </div>
                              <div class="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h4 class="title">
                              <a href="#" tabindex="0"
                                >Nancy zhang a chinese busy woman and dhaka</a
                              >
                            </h4>
                            <span>1</span>
                          </div>
                        </div>
                        <div
                          class="
                            gallery_item gallery_item-style-2
                            footer_gallery_item
                          "
                        >
                          <div class="gallery_item_content">
                            <div class="post-meta">
                              <div class="meta-categories">
                                <a href="#" tabindex="0">TECHNOLOGY</a>
                              </div>
                              <div class="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h4 class="title">
                              <a href="#" tabindex="0"
                                >Success is not a good teacher failure makes you
                                humble</a
                              >
                            </h4>
                            <span>2</span>
                          </div>
                        </div>
                        <div
                          class="
                            gallery_item gallery_item-style-2
                            footer_gallery_item
                          "
                        >
                          <div class="gallery_item_content">
                            <div class="post-meta">
                              <div class="meta-categories">
                                <a href="#" tabindex="0">TECHNOLOGY</a>
                              </div>
                              <div class="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h4 class="title">
                              <a href="#" tabindex="0"
                                >Cheap smartphone sensor could help you old food
                                safe</a
                              >
                            </h4>
                            <span>3</span>
                          </div>
                        </div>
                        <div
                          class="
                            gallery_item gallery_item-style-2
                            footer_gallery_item
                          "
                        >
                          <div class="gallery_item_content">
                            <div class="post-meta">
                              <div class="meta-categories">
                                <a href="#" tabindex="0">TECHNOLOGY</a>
                              </div>
                              <div class="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h4 class="title">
                              <a href="#" tabindex="0"
                                >Class property employ ancho red multi humble</a
                              >
                            </h4>
                            <span>4</span>
                          </div>
                        </div>
                        <div
                          class="
                            gallery_item gallery_item-style-2
                            footer_gallery_item
                          "
                        >
                          <div class="gallery_item_content">
                            <div class="post-meta">
                              <div class="meta-categories">
                                <a href="#" tabindex="0">TECHNOLOGY</a>
                              </div>
                              <div class="meta-date">
                                <span>March 26, 2020</span>
                              </div>
                            </div>
                            <h4 class="title">
                              <a href="#" tabindex="0"
                                >Best garden wing supplies for the horticu
                                ltural</a
                              >
                            </h4>
                            <span>5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-6">
                    <div class="widget wedget-service">
                      <div class="section-title section-title-2">
                        <h3 class="title">Newspark news services</h3>
                      </div>
                      <div class="service-item">
                        <ul>
                          <li>
                            <a href="#"
                              ><i class="fal fa-mobile-android-alt"></i> On your
                              mobile</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              ><i class="fal fa-microphone-alt"></i> On smart
                              speakers</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              ><i class="fal fa-envelope"></i> Contact Newspark
                              news</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-copyright footer-copyright-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div
              class="
                copyright-item
                d-block d-md-flex
                justify-content-between
                align-items-center
              "
            >
              <p>© Copyright 2020, All Rights Reserved</p>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">Privacy & Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import Header from "../Utility/Header/index";
// import PostPartHomeOne from "../Home/PostPartHomeOne.vue";
import PostGallery from "../Home/PostGallery.vue";
import Features from "../Home/Features.vue";
import TrendingNews from "../Home/TrendingNews.vue";
import SinglePlayPost from "../Home/SinglePlayPost.vue";
import VideoNews from "../Home/VideoNews.vue";
import EntertainmentNews from "../Home/EntertainmentNews.vue";
import SportsNews from "../Home/SportsNews.vue";
import BuisnessNews from "../Home/BuisnessNews.vue";
import SharePost from "../Home/SharePost.vue";
import Drawer from "../Mobile/Drawer.vue";
import VideoPopUp from "../Utility/VideoPopUp.vue";
export default {
  components: {
    Header,
    // PostPartHomeOne,
    PostGallery,
    Features,
    TrendingNews,
    SinglePlayPost,
    VideoNews,
    EntertainmentNews,
    SportsNews,
    BuisnessNews,
    SharePost,
    Drawer,
    VideoPopUp,
  },
  data: () => ({
    sidebar: false,
  }),
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  mounted() {
    document.body.classList.add("home-dark");
  },
  beforeDestroy() {
    document.body.classList.remove("home-dark");
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
