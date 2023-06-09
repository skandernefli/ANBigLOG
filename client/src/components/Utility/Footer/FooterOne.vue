<template>
  <div>
    <footer class="footer-area">
      <div class="container">
        <div class="footer-topbar">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-5">
              <div class="footer-logo">
                <a href="#"><img src="@/assets/images/logodark.svg" alt="" /></a>
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
                          <li><a href="#">Personal Development</a></li>
                          <li><a href="#">Health and Fitness</a></li>
                          <li><a href="#">Travel and Adventure</a></li>
                          <li><a href="#">Technology and Gadgets</a></li>
                          <li><a href="#">Food and Cooking</a></li>
                          <li><a href="#">Fashion and Beauty</a></li>
                          <li><a href="#">Finance and Money Management</a></li>
                        </ul>
                        <ul>
                          <li><a href="#">DIY and Crafts</a></li>
                          <li><a href="#">Parenting and Family</a></li>
                          <li><a href="#">Home and Gardening</a></li>
                          <li><a href="#">Book Reviews and Literature</a></li>
                          <li><a href="#">Business and Entrepreneurship</a></li>
                          <li><a href="#">Photography and Visual Arts</a></li>
                          <li><a href="#">Sustainable Living</a></li>
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
                          <li><a href="#">Pet Care and Animal Wellfare</a></li>
                          <li><a href="#">News and Current Events</a></li>
                          <li><a href="#">Politics and Government</a></li>
                          <li><a href="#">Social issues and Actitvism</a></li>
                          <li><a href="#">Technology Trends</a></li>
                          <li><a href="#">Entertainment and Pop Culture</a></li>
                          <li><a href="#">Gaming and Esports</a></li>
                        </ul>
                        <ul>
                          <li><a href="#">Science Ans Space</a></li>
                          <li><a href="#">Environment and Sustainability</a></li>
                          <li><a href="#">Education and Learning</a></li>
                          <li><a href="#">Sports and Fitness</a></li>
                          <li><a href="#">Personal Finance and Investing </a></li>
                          <li><a href="#">Mental Health and Well-being</a></li>
                          <li><a href="#">Cultural Insights and Travel</a></li>
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
                            <li><a href="#">Skander NEFLI</a></li>
                      
                         
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-7">
                      <a href="#"><img src="@/assets/images/logodark.svg" alt="" /></a>

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
