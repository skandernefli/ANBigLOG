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
                    <li class="breadcrumb-item"><a href="#">Buzz</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                      <a href="#">Latest</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div class="col-lg-8">
           <AllPosts/>
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
                      <img
                        src="@/assets/images/categories-1.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Personal Development </span>
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
                          <span>Health and Fitness</span>
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
                          <span>ad</span>
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
                          <span>Travel and Adventure</span>
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
                          <span>Technology and Gadgets</span>
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
                          <span>ad</span>
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
                          <span>Food and Cooking</span>
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
                          <span>Fashion and Beauty</span>
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
                          <span>ad</span>
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
                          <span>Finanace and Money Management</span>
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
                          <span>DIY and Crafts</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Parenting and Family</span>
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
                          <span>Home and Gardening</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Book Reviews and Literature</span>
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
                          <span>Business and Entrepreneurship</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Photography and Visual Arts</span>
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
                          <span>Sustainable Living</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Pet Care and Animal Wellfare </span>
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
                          <span>News and Current Events</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Politics and Government</span>
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
                          <span>Social issues and Activism</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Technology Trends</span>
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
                          <span>Entertainment and Pop Culture</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Gaming and Esports</span>
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
                          <span>Science And Space</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Environment and Sustainability</span>
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
                          <span>Education and Learning </span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Sports and Fitness</span>
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
                          <span>Personal Finance and Investing </span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Mental Health and Well-being</span>
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
                          <span>Cultural Insights and Travel</span>
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
                          <span>ad</span>
                          <img src="@/assets/images/arrow.svg" alt="" />
                        </a>
                      </div>
                    </div> <div class="item">
                      <img
                        src="@/assets/images/categories-5.jpg"
                        alt="categories"
                      />
                      <div class="Categories-content">
                        <a href="#">
                          <span>Artificial Intelligence and Robotics</span>
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
                          <span>Cryptocurrency and Blockchain</span>
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
  import HomeOne from "../../../components/Utility/Sidebar/StyleOne.vue"; 
  import AllPosts from "./../../Home/allPosts.vue";

  import CategoryLayout from "../../category/CategoryLayout.vue";
  export default {
    props: {
      category: {
        type: String,
      }
    },
   
    components: { CategoryLayout,AllPosts ,HomeOne},
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
        handleResize() {
        // Update the value of isLargeScreen based on the media query
        this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
      },
      async fetchPosts() {
        try {
          const response = await fetch(`https://3.145.167.18:8000/server/post/category/${this.$route.params.categorie_name}`); // use "postId" instead of "id"
          this.posts = await response.json();
          console.log("this posts",this.posts);
          this.headerimage = this.headerImage(this.posts);
  
          this.coverimage = this.coverToShow(this.posts);
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
      }, async fetchsmallPostGallery() {
        const response = await fetch("https://3.145.167.18:8000/server/trendy").then(res => res.json());
        const data = response[0].data;
        return this.smallPostGallery = data;
      },
      async fetchlatestPostGallery() {
        const response = await fetch("https://3.145.167.18:8000/server/latest").then(res => res.json());
        const data = response[0].data;
        return this.latestPostGallery = data;
      },
      async fetchpopularPostGallery() {
        const response = await fetch("https://3.145.167.18:8000/server/popular").then(res => res.json());
        const data = response[0].data;
        return this.popularPostGallery = data;
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
  