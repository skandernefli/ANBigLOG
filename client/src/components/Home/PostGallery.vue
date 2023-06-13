<template>
  <div class="post__gallery__area">
    <div v-if="isDisplay">
    <div v-if="postGallery.length > 0" class="trending-news-item">
      <div class="col " v-for="(single, index) in postGallery" :key="index">
        <div v-if="index === postGallery.length / 2 + 2">
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

                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="index === 2">
          <div class="col-lg-4">
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>
           
            </div>
          </div>
        </div>
        <div class="trending-news-thumb">
          <img :src="single.thumbnail" :alt="single.title" />
          <div v-if="single.action === 'trending'" class="icon">
            <a :href="single.link"><i class="fas fa-bolt"></i></a>
          </div>
        </div>
        <div class="trending-news-content">
          <div class="post-meta">
            <div class="meta-categories" v-if="single.category && single.category.name && single.category.create_At">
              <a :href="single.link">{{ single.category.name }}</a>
            </div>
            <div class="meta-date" v-if="single.category && single.category.name && single.category.create_At">
              <span>{{ single.category.create_At }}</span>
            </div>
          </div>
          <h3 class="title">
            <a :href="single.link" class="d-block">
              {{ truncatedTextT(single.title) }}</a>
          </h3>
          <p class="text">
            {{ truncatedTextI(single.description) }} </p>
          <a v-if="readMore" :href="single.link">Read more</a>
        </div>
      </div>

    </div></div>
    <div class="container">
      <div class="row">

        <div class="col-lg-8" v-if="postGallery.length > 0">
          <div class="limit">
            <div class="about-post-items">

            </div>
            <div class="post_gallery_slider">
              <slider :settings="BigCardsSettings" ref="BigCards">
                <big-video-card-with-des v-for="(single, index) in postGallery" :key="index" :datas="single" />
              </slider>

            </div>
          </div>
          <div class="post_gallery_inner_slider" style="position: relative">
            <span @click="postGalleryPrev" class="prev slick-arrow" style="display: block"><i
                class="fal fa-angle-left"></i></span>
            <slider :settings="miniCardsSettings" ref="miniCards">
              <div v-for="(multi, index) in postGallery" class="item" :key="index">
                <img :src="multi.picture" :alt="multi.title" />
              </div>
            </slider>

            <span @click="postGalleryNext" class="next slick-arrow" style="display: block"><i
                class="fal fa-angle-right"></i></span>
          </div>
        </div>
        <div class="col-lg-4"
          v-if="smallPostGallery.length > 0 && latestPostGallery.length > 0 && popularPostGallery.length > 0">

            <div  v-if="isDisplay" class="all-post-sidebar">
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

                </div>
              </div>
            </div>
       
          <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
            :darkClass="darkClass" role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery"
            :datas_3="popularPostGallery" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
import BigVideoCardWithDes from "../Utility/Cards/BigVideoCardWithDes.vue";
import HomeOne from "../Utility/Sidebar/StyleOne.vue";

export default {
  components: { Slider, BigVideoCardWithDes, HomeOne },
  props: {
    darkClass: {
      type: Object,
      default: () => { },
    },
  },
  async created() {
    await this.fetchPostGallery();
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();




  }, methods: {
    postGalleryPrev() {
      this.$refs.BigCards.prev();
      this.$refs.miniCards.prev();
    },
    postGalleryNext() {
      this.$refs.BigCards.next();
      this.$refs.miniCards.next();
    },
    selectGalleryTab(value) {
      this.selectedGallery = value;
    },
    //post gallery
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

async  fetchPostGallery() {
  return this.fetchWithRetry("https://18.218.162.154:8443/server/postgalley").then(response => {
    this.postGallery= response[0].data;
  });
}, truncatedTextI(data) {
      const maxLength = 120;
      if (data.length > maxLength) {
        return data.substring(0, maxLength) + "...";
      } else if (data.length < maxLength) {
        const invisibleCharsToAdd = maxLength - data.length;
        const invisibleChars = "\u00A0".repeat(invisibleCharsToAdd);
        return data + invisibleChars;
      }
      return data;
    },
    truncatedTextT(data) {
      const maxLength = 60;
      if (data.length >= maxLength) {
        return data.substring(0, maxLength) + "...";
      } else if (data.length < maxLength) {
        const invisibleCharsToAdd = maxLength - data.length;
        const invisibleChars = " \u00A0".repeat(invisibleCharsToAdd);
        return data + invisibleChars;
      }
      return data;
    }, handleResize() {
      // Update the value of isLargeScreen based on the media query
      this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
    },
   async  fetchsmallPostGallery() {
  return this.fetchWithRetry("https://18.218.162.154:8443/server/trendy").then(response => {
     this.smallPostGallery= response[0].data;
     console.log( this.smallPostGallery)
  });
},

async  fetchlatestPostGallery() {
  return this.fetchWithRetry("https://18.218.162.154:8443/server/latest").then(response => {
      this.latestPostGallery  = response[0].data;
      console.log(  this.latestPostGallery )
  });
},

async  fetchpopularPostGallery() {
  return this.fetchWithRetry("https://18.218.162.154:8443/server/popular").then(response => {
         this.popularPostGallery = response[0].data;
         console.log(  this.popularPostGallery)
  });
},

  },
  data: () => ({
    //post gallery
    postGallery: [],
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    isDisplay:false,
    selectedGallery: 'trendy',
    miniCardsSettings: {
      slidesToShow: 8,
      slideToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slideToScroll: 1,
            autoplay: true,
          },
        },
      ],
    },
    BigCardsSettings: {
      slidesToShow: 1,
      slideToScroll: 1,
      autoplay: true,
      arrows: false,
    },
  }),  mounted() {
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

<style>
@media only screen and (min-width: 992px) and (max-width: 1200px) {

  .display {
    display: none !important;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1600px) {

  .display {
    display: none !important;
  }
}

@media (max-width: 767px) {

  .limit {
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 1);
    padding: 1px !important;
    border-radius: 4%
  }

}
</style>
