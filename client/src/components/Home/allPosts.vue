<template>
  <div>
      <section class="about-item-area">
        <div class="container">
          <div class="row">        <div >
          <div class="about-tab-btn mt-40">
            <div class="archive-btn">
              <ul>
                <li>
                  <span>Recent</span>
                </li>
              </ul>
            </div>
            <div class="about-post-items">
              <div class="row">
                <div class="col-lg-12" v-if="posts.length > 0">
                  <div class="bussiness-post-item mb-40" v-for="(post,index) in postsToShow" :key="index">
                    <div v-if="isDisplay" class="col-lg-4"
       >

            <div     v-if="index%3===0 && index!==0"  class="all-post-sidebar">
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

                </div>
              </div>
            </div>
       
          <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
            :darkClass="darkClass" role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery"
            :datas_3="popularPostGallery" />
        </div>
                    
                    
                    
                    
                    
                    
                    <div class="bussiness-post-thumb">
                      <img :src="coverToShow(post)" :alt="post.title" />
                    </div>
                    <div class="bussiness-post-content">
                      <h3 class="title">
                       
                        <router-link :to="'/posts/post/' + post._id" @click.prevent>{{truncatedTextT(post.title )}}</router-link>
                      </h3>
                      <div class="meta-date-link">
                        <span>Created at {{ post.created_at }}</span>

                        <ul>
                          <li>
                            <a href="#"><i class="fal fa-bookmark"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-share"></i></a>
                          </li>
                        </ul>
                      </div>
                      
                      <p>{{truncatedTextI(post.intro)}} </p>
                      <router-link :to="'/posts/post/' + post._id"  @click.prevent="$router.push({ name: 'PostOne', params: { id: post._id } })">LEARN MORE<img src="@/assets/images/arrow-2.svg" :alt="post.intro" /></router-link>
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
        </div>
  
      </div>
    </div>
  </section>
 </div>
</template>
<script>

/* import Posts from "../Data/TrendingHomeThree";
 */

export default {

  data: () => ({
    posts:[],
    visiblePosts: 10,
    isDisplay:false,

  }),
  async created() {
    await this.fetchPosts();
  },
  computed: {
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




  },
  methods: {
    handleResize() {
      // Update the value of isLargeScreen based on the media query
      this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
    },
    async fetchPosts() {
      try {
        const response = await fetch("https://3.145.167.18:8000/server/post/client/");
        this.posts = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    loadMore() {
      this.visiblePosts += 5;
    },
    truncatedTextI(data) {
      const maxLength = 150;
      if (data.length > maxLength) {
        return data.substring(0, maxLength) + "...";
      }else if (data.length < maxLength) {
    const invisibleCharsToAdd = maxLength - data.length;
    const invisibleChars = "\u00A0".repeat(invisibleCharsToAdd);
    return data + invisibleChars;
  }
  return data;
},
truncatedTextT(data) {
      const maxLength = 100;
      if (data.length >= maxLength) {
        return data.substring(0, maxLength) + "...";
      }else if (data.length < maxLength) {
    const invisibleCharsToAdd = maxLength - data.length+10;
    const invisibleChars = " \u00A0".repeat(invisibleCharsToAdd);
    return data + invisibleChars;
  }
  return data;
}

  },mounted() {
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

@media (max-width: 767px) {
  .bussiness-post-item .bussiness-post-content .meta-date-link span {
  font-size: x-small !important;
  color: #e60234 !important;
} .footer-area{
  padding-left: 20px;
}
}

</style>