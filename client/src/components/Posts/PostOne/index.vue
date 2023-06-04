<template>
  <div>
    <video-pop-up />

    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <!--====== POST LAYOUT 1 PART START ======-->
    <div class="thumb">
      <img :src=headerimage.value :alt="headerimage.title" style="width: 100%; height: auto;">
      
    </div>
    <section class="post-layout-1-area pb-80">

      <div class="container">

        <div class="row">

          <div class="col-lg-12">
            <div class="about-author-content">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">title:{{ headerimage.title }}</a></li>
                  <li class="breadcrumb-item"><a href="#">desciption:{{ headerimage.title }}</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    source:{{ headerimage.source }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="post-layout-top-content">
              <div class="
                  post-categories
                  d-flex
                  justify-content-between
                  align-content-center
                ">
                <div class="categories-item">
                  <span>{{ Posts.categorie_name }}</span>
                </div>

              </div>
              <div class="post-content">
                <h3 class="title">
                  {{ Posts.title }}
                </h3>
                <p>
                  {{ Posts.intro }}
                </p>

              </div>
              <div class="post-author">
                <div class="author-info">
                  <div class="thumb">
                    <img src="@/assets/images/author1.png" alt="" />
                  </div>
                  <h5 class="title">Alexander.N</h5>
                  <ul>
                    <li>Created {{ Posts.created_at }}</li>
                  </ul>
                </div>
                <div class="author-social">
                  <ul>
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
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
              <div>
                <div v-for="(data) in content" :key="data._id">


                  <div v-if="Array.isArray(data)" class="post-text mt-30">


                    <p>
                      <span v-for="(innerData) in   data " :key="innerData._id">
                        <template v-if="innerData.type === 'backlink'">
                          <a class="backlink" :href="JSON.parse(innerData.value).backlinkLink"><u>{{
                            (JSON.parse(innerData.value)).textOfLink
                          }}</u></a>

                        </template>
                        <template v-else-if="innerData.type === 'text'">

                          {{ innerData.value }}


                        </template>
                      </span>
                    </p>




                  </div>

                  <div v-else-if="data.type === 'points'" class="post-text mt-30">
                    <ul>
                      <li><a>{{ data.value }}</a></li>
                    </ul>
                  </div>
                  <div v-else-if="data.type === 'title'" class="post-text pt-20">
                    <h3 class="title">{{ data.value }}</h3>
                  </div>
                  <div v-else-if="data.type === 'subtitle'" class="post-text pt-20">
                    <h5 class="title">{{ data.value }}</h5>
                  </div>
                  <div v-else-if="data.type === 'thumb'" class="row pt-10">
                    <div class="col-lg-6 thumbtext">
                      <div class="post-thumb">
                        <img :src="data.value" :alt="data.title" />
                      </div>
                    </div>
                    <div class="col-lg-6 thumbtext">
                      <div class="text ">
                        <p>
                          {{ data.desciption }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="data.type === 'quote'" class="post-text pt-20">
                    <p>
                      <span class="quote-text">{{ data.value }}</span>
                    </p>
                  </div>
                  <div v-else-if="data.type === 'image'" class="post-text pt-20">
                    <div class="thumb pt-20 pb-35">
                      <img :src="data.value" alt="" />
                      <span>{{ data.title }}</span>
                      <span>{{ data.desciption }}</span>
                    </div>
                  </div>
                  <div v-else-if="data.type === 'externalImage'" class="post-text pt-20">
                    <div class="thumb pt-20 pb-35">
                      <img :src="data.value" alt="" />
                    </div>
                  </div>
                  <div v-else-if="data.type === 'postquote'" class="post-quote d-block d-md-flex align-items-center">
                    <div class="thumb">
                      <img :src="data.value" :alt="data.title" />
                    </div>
                    <div class="post-quote-content ">
                      <img src="@/assets/images/quote-icon.png" alt="" />
                      <p class="thumbtext">
                        {{ data.desciption }}
                      </p>
                      <div class="user">
                        <h5 class="title">{{ data.title }}</h5>
                        <span>{{ data.source }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-else-if="data.type === 'video' || data.type ===  'externalVideo'" class="post_gallery_play">
                    <div class="bg-image">
                      <img :src="coverimage.value" :alt="coverimage.title" style="width: 100%; height: 100%" />
                    </div>
                    <div class="post__gallery_play_content" style="z-index: 10">
                      <div class="post-meta">
                        <div class="meta-categories">
                          <a>{{ Posts.categorie_name }}</a>
                        </div>
                        <div class="meta-date">
                          <span>{{ Posts.created_at }}</span>
                        </div>
                      </div>
                      <h2 class="title">
                        <a>{{ data.title }}</a>
                      </h2>
                      <p>
                        {{ data.desciption }}
                      </p>
                    </div>
                    <div class="post_play_btn">
                      <a class="video-popup"
                        @click.prevent="$store.dispatch('setUrl', data.value); $store.dispatch('toggleVideo')"><i
                          class="fas fa-play"></i></a>
                    </div>
                  </div>
              
                  <div
                    v-else-if="data.type === 'file' || data.type === 'audio' || data.type === 'externalAudio' || data.type === 'externalFile' || data.type === 'externalLink'">
                    <button class="main-btn"><a class="main-btn" :href="data.value" target="_blank">Click me! :)</a>
</button>
                  </div>
                <!--   <div v-if="data.type === 'code'" class="post-text mt-30">
                    <code>{{ data.value }}</code>
                  </div> -->

                </div>
              </div>
              <div class="post-text mt-35">
                <div class="post-tags">
                <!--   <ul>
                    <li>
                      <a href="#"><i class="fas fa-tag"></i> Tags</a>
                    </li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">World</a></li>
                    <li><a href="#">Corona</a></li>
                  </ul> -->
                </div>

              </div>
            </div>



          </div>

          <div class="col-lg-4"
            v-if="smallPostGallery.length > 0 && latestPostGallery.length > 0 && popularPostGallery.length > 0">
            <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
              role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery" :datas_3="popularPostGallery" />
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
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
                    <a href="#">
                      <span>Personal Development </span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-2.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Health and Fitness</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Travel and Adventure</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-4.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Technology and Gadgets</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Food and Cooking</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Fashion and Beauty</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Parenting and Family</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Home and Gardening</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Book Reviews and Literature</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Business and Entrepreneurship</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Photography and Visual Arts</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Sustainable Living</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Pet Care and Animal Wellfare </span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>News and Current Events</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Politics and Government</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Social issues and Activism</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Technology Trends</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Entertainment and Pop Culture</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Gaming and Esports</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Science And Space</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Environment and Sustainability</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Education and Learning </span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Sports and Fitness</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Personal Finance and Investing </span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Mental Health and Well-being</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Cultural Insights and Travel</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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
                    <a href="#">
                      <span>Artificial Intelligence and Robotics</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
                  </div>
                </div>
                <div class="item">
                  <img src="@/assets/images/categories-6.jpg" alt="categories" />
                  <div class="Categories-content">
                    <a href="#">
                      <span>Cryptocurrency and Blockchain</span>
                      <img src="@/assets/images/arrow.svg" alt="" />
                    </a>
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

    </section>

    <!--====== POST LAYOUT 1 PART ENDS ======-->

    <!--====== LATEST NEWS PART START ======-->


    <!--====== LATEST NEWS PART ENDS ======-->

    <!--====== POST FORM PART START ======-->



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

    <footer-one />
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

import VideoPopUp from "./../../../components/Utility/VideoPopUp.vue";
import Header from "../../Utility/Header/index";
import FooterOne from "../../Utility/Footer/FooterOne.vue";
import Drawer from "../../Mobile/Drawer.vue";
import HomeOne from "../../Utility/Sidebar/StyleOne.vue";

export default {
  props: {
    id: {
      type: String,
    }
  },
  components: { Header, HomeOne, FooterOne, Drawer,     VideoPopUp,
},
  data: () => ({
    Posts: [],
    content: [],
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    newParagraph: [],
    newContent: [],

    l: -1,
    selectedGallery: 'trendy',
    headerimage: "headerimage",
    coverimage: "coverimage",
    start: -1,
    sidebar: false,
  }),
  async created() {
    await this.fetchPosts();
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();
    this.content = this.Posts.content;

    this.newContent = [...this.content]; // Create a copy of the original array

    let index = 0; // Start from the desired index

    do {
      const data = this.newContent[index];

      if (data && (data.type === "text" || data.type === "backlink")) {
        let end = this.lCalculate(index);
        console.log("index", index);
        console.log("end created", end);
        let start = index;
        let newParagraph = this.filteredContent(start, end);
        let length = newParagraph.length;
        this.newContent.splice(start, length, newParagraph);
        index++;
      } else {

        index++;
      }
    } while (index < this.newContent.length);

    this.content = this.newContent; // Assign the modified array back to this.content
    console.log("new contern", this.content);


    document.addEventListener("scroll", this.topToBottom);
  }, computed: {


    coverToShow() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "coverimage") {
            return post.content[i];
          }
        }
        return "";
      };

    },
    headerImage() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "headerimage") {
            return post.content[i];
          }
        }
        return "";
      };
    },

  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`http://http://3.145.167.18/:8000/server/post/${this.$route.params.postId}`); // use "postId" instead of "id"
        this.Posts = await response.json();
        this.headerimage = this.headerImage(this.Posts);
        this.coverimage = this.coverToShow(this.Posts);
      } catch (error) {
        console.error(error);
      }
    },

    filteredContent(index, end) {
      const start = index;
      console.log("start", start);
      console.log("end", end);
      const filteredContent = this.newContent.filter((data, index) => start <= index && index <= end);
      return filteredContent;
    },
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

    lCalculate(index) {
      let l = -1; // Use this.l as the initial value of l
      for (let i = index; i < this.newContent.length; i++) {
        console.log(" // Update this.l with the new value", l);

        if (this.newContent[i].type !== "text" && this.newContent[i].type !== "backlink") {
          if (i === 0) { l = 0 } else if (i === this.newContent.length - 1) { l = this.newContent.length - 1 } else { l = i - 1 }
          console.log(" // Update this.l with the new value");

          return l; // Update this.l with the new value
        } else if (i === this.newContent.length - 1) {
          l = this.newContent.length;
          return l;
        }
      }
    },




    selectGalleryTab(value) {
      this.selectedGallery = value;
    }, async fetchsmallPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/trendy").then(res => res.json());
      const data = response[0].data;
      return this.smallPostGallery = data;
    },
    async fetchlatestPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/latest").then(res => res.json());
      const data = response[0].data;
      return this.latestPostGallery = data;
    },
    async fetchpopularPostGallery() {
      const response = await fetch("http://http://3.145.167.18/:8000/server/popular").then(res => res.json());
      const data = response[0].data;
      return this.popularPostGallery = data;
    },


  },
};
</script>
<style>
.thumbtext {

  font-weight: 300;
}

.backlink {
  font-style: italic;
  color: aqua;
}

.backlink:hover {
  color: #e60234;
}

u {
  border-bottom: 2px solid #e60234;
  /* Change the color value to the desired color */
  text-decoration: none;
}
</style>
