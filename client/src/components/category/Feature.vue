<template>
  <category-layout>
    <section class="about-item-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="about-author-content pt-15">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Category</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    <a href="#"> {{ $route.params.categorie_name }}</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="about-tab-btn mt-40">
              <div class="archive-btn">
                <ul>
                  <li>
                    <span>Category: <span>                    {{ $route.params.categorie_name }}
</span></span>
                  </li>
                </ul>
              </div>
              <div class="about-post-items">
                <div class="row" v-if="posts.length > 0"> 
                  <div class="col-lg-6 col-md-6"  v-for="(post,index) in postsToShow" :key="index">
                    <div v-if="isDisplay && index%3===0 && index!==0" class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                <a href="#"><img src="@/assets/images/ads/two_ad.jpg" alt="ad" /></a>
              </div>

            </div>
                    <div class="trending-image-post feature-item mt-30  "  >
                      <img :src="coverToShow(post)" :alt="post.title" />
                      <div class="trending-image-content">
                        <div class="post-meta">
                          <div class="meta-categories">
                            <a href="#">{{ $route.params.categorie_name }}</a>
                          </div>
                       
                        </div>
                        <h3 class="title">
                          <router-link :to="'/posts/post/' + post._id"  @click.prevent="$router.push({ name: 'PostOne', params: { id: post._id } })"
                            >{{truncatedTextT(post.title )}}</router-link
                          >
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  <div class="col-lg-12">
                    <div class="bussiness-btn">
                      <a class="main-btn main-btn-2" href="#" v-if="visiblePosts < posts.length" @click.prevent="loadMore">See more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4"
            v-if="smallPostGallery.length > 0 && latestPostGallery.length > 0 && popularPostGallery.length > 0">
            <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
              role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery"
              :datas_3="popularPostGallery" />
            <div v-if="isDisplay===false" class="all-post-sidebar">
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
            <div v-if="isDisplay===false" class="Categories-post mt-40">
                <div
                  class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
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
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  </category-layout>
</template>

<script>
import HomeOne from "../Utility/Sidebar/StyleOne.vue"; 

import CategoryLayout from "./CategoryLayout.vue";
export default {
  props: {
    category: {
      type: String,
    }
  },
 
  components: { CategoryLayout ,HomeOne},
  data: () => ({
    posts: [],
    visiblePosts: 18,
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    selectedGallery: 'trendy',
    isDisplay:false,


  }),   computed: {
    postsToShow() {

      return this.posts.slice(0, this.visiblePosts);
    },

      coverToShow() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "coverimage") {
            return post.content[i].value;
          }
        }
        return "";
      };
    },




  }, async created() {
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();
    await this.fetchPosts();},  methods: {
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

      handleResize() {
      // Update the value of isLargeScreen based on the media query
      this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
    },
    async fetchPosts() {
      try {
        return this.fetchWithRetry(`https://18.218.162.154:8443/server/post/category/${this.$route.params.categorie_name}`).then(response => {
       this.posts= response;
       this.headerimage = this.headerImage(this.posts);

this.coverimage = this.coverToShow(this.posts);
    });   
       
      } catch (error) {
        console.error(error);
      }
    },
    loadMore() {
      this.visiblePosts += 5;
    },
truncatedTextT(data) {
      const maxLength = 30;
      if (data.length >= maxLength) {
        return data.substring(0, maxLength) + "...";
      }else if (data.length < maxLength) {
    const invisibleCharsToAdd = maxLength - data.length+10;
    const invisibleChars = " \u00A0".repeat(invisibleCharsToAdd);
    return data + invisibleChars;
  }
  return data;
},
selectGalleryTab(value) {
      this.selectedGallery = value;
    },   async  fetchsmallPostGallery() {
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
  
  }, watch: {
    category(newValue, oldValue) {
      if (newValue !== oldValue) {
      this.fetchPosts();
    }
    },}, mounted() {
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

<style></style>
