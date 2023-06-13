<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-topbar">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-5">
              <div class="footer-logo">
                <router-link to='/'><img src="@/assets/images/logodark.svg" alt="" />                </router-link>
                <ul>
                  <li>
                    <a href="https://twitter.com/ANGuideHU"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100093210267113"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC1NFBLqXHqGYRytj-2YGVqg"><i class="fab fa-youtube"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/anguidehub/"><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-5 col-md-7">
        
            </div>
          </div>
        </div>
        <div  class="footer-widget-area">
          <div class="row">
            <div >
              <div class="footer-widget-right-border">
                <div class="row">
                  <div v-if="isDisplay===false" class="col-lg-6 col-md-6">
                    <div class="widget widget-list">
                      <div class="section-title section-title-2">
                        <h3 class="title">Our categories</h3>
                      </div>
                      <div class="list d-flex justify-content-between">
                        <ul>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Personal Development'"> Personal Development</router-link>
</li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Health and Fitness'">
Health and Fitness 
</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Travel and Adventure'">
Travel and Adventure 
</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Technology and Gadgets'">
Technology and Gadgets
</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Food and Cooking'">
Food and Cooking
</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Fashion and Beauty'">
Fashion and Beauty</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Finance and Money Management'">
Finance and Money Management
</router-link></li>
                        </ul>
                        <ul>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/DIY and Crafts'">
DIY and Crafts 
</router-link></li>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Parenting and Family'">
Parenting and Family </router-link>
</li>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Home and Gardening'">
Home and Gardening </router-link>
</li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Book Reviews and Literature'">Book Reviews and Literature </router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Business and Entrepreneurship'">Business and Entrepreneurship</router-link></li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Photography and Visual Arts'">Photography and Visual Arts</router-link>
</li>
                          <li><router-link :to="'/Categories/latest/PostsInCategory/Sustainable Living'">Sustainable Living</router-link>
</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div   class="col-lg-6 col-md-6">
                    <div class="widget widget-list widget-list-2">
                      <div class="section-title section-title-2">
                        <h3 class="title">More</h3>
                      </div>
                      <div class="list d-flex justify-content-between">
                        <ul>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Pet Care and Animal Wellfare'">
Pet Care and Animal Wellfare</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/News and Current Events'">News and Current Events</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Politics and Government'">Politics and Government</router-link>
</li>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Social Issues and Activism'">
Social Issues and Activism</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Technology Trends'">Technology Trends</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Entertainment and Pop Culture'">Entertainment and Pop Culture</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Gaming and Esports'">Gaming and Esports</router-link>
</li>
                        </ul>
                        <ul>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Science and Space'">
Science and Space</router-link>
</li>
                          <li> <router-link :to="'/Categories/latest/PostsInCategory/Environment and Sustainability'">Environment and Sustainability</router-link>
</li>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Education and Learning'">Education and Learning</router-link>
</li>
                          <li>        <router-link :to="'/Categories/latest/PostsInCategory/Sports and Fitness'">
Sports and Fitness</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Personal Finance and Investing'">Personal Finance and Investing</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Mental Health and Well-being'">Mental Health and Well-being</router-link>
</li>
                          <li>
        <router-link :to="'/Categories/latest/PostsInCategory/Cultural Insights and Travel'">Cultural Insights and Travel</router-link>
</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div  class="footer-twitter-post">
                  <div class="row">
                    <div class="col-lg-5 col-md-5">
                      <div class="widget widget-list">
                        <div class="section-title section-title-2">
                          <h3 class="title">Creator</h3>
                        </div>
                        <div class="list">
                          <ul>
                            <li><a href="https://linkedin.com/in/skander-nefli-37191a1a0
">Skander NEFLI</a></li>
                      
                         
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                  <router-link to='/'><img src="@/assets/images/logodark.svg" alt="" />                </router-link>


                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </footer>
    <div class="footer-copyright">
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
              <p>© Copyright 2023, All Rights Reserved</p>
              <ul>
                <li><router-link to="/about-us">About</router-link></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="https://www.termsfeed.com/live/7924089a-50ec-44e4-8732-82241c08c0e7">Privacy Policy</a></li>
                <li><a href="https://www.termsfeed.com/live/48bc2b1c-51ba-4d4f-b972-878bdfd03331">Terms of Service</a></li>                <li><router-link to="/contact">Contact Us</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDisplay:false,

  }),  mounted() {
    // Add event listener for window resize
    window.addEventListener("resize", this.handleResize);
    // Initial check
    this.handleResize();
  },beforeDestroy() {
    // Remove event listener when component is destroyed
    window.removeEventListener("resize", this.handleResize);
  },  methods: { handleResize() {
      // Update the value of isLargeScreen based on the media query
      this.isDisplay = window.matchMedia("(max-width: 767px)").matches;
    },}
};
</script>

<style></style>
