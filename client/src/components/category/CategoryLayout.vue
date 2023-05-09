<template>
  <div>
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <slot></slot>
    <!--====== LATEST NEWS PART START ======-->
    <our-latest-news :Posts="posts" />
    <!--====== LATEST NEWS PART ENDS ======-->

    <!--====== POST FORM PART START ======-->
    <div class="post-form-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title">
              <h3 class="title">Leave an opinion</h3>
            </div>
            <div class="post-form-box">
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box">
                      <input type="text" placeholder="Email address" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box">
                      <textarea
                        name="#"
                        id="#"
                        cols="30"
                        rows="10"
                        placeholder="Tell us about your opinion…"
                      ></textarea>
                      <button class="main-btn" type="button">
                        POST OPINION
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== POST FORM PART ENDS ======-->

    <!--====== POST COMMENTS PART START ======-->

    <section class="post-comments-area pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title">
              <h3 class="title">Post Comments</h3>
            </div>
            <div class="post-comments-list">
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-1.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-2.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item ml-30">
                <div class="thumb">
                  <img src="@/assets/images/comments-3.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-4.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
            </div>
            <div class="post-load-btn">
              <a class="main-btn" href="#">LOAD MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>

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
import OurLatestNews from "../Utility/Common/OurLatestNews.vue";
import Posts from "../Data/About";
import Drawer from "../Mobile/Drawer.vue";
export default {
  components: { Header, Footer, OurLatestNews, Drawer },
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
