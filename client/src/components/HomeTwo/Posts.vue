<template>
  <section class="all-post-style-2-area">
    <div class="container custom-container">
      <div class="row">
        <div class="col-lg-8">
          <div class="treding-post-news mt-40">
            <div class="section-title">
              <h3 class="title">Trending News</h3>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="post-news-item-2">
                  <div class="post-news-thumb">
                    <img
                      :src="require(`@/assets/images/${trending[0].image}`)"
                      alt=""
                    />
                  </div>
                  <div class="post-news-content">
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        trending[0].title
                      }}</router-link>
                    </h3>
                    <p>
                      {{ trending[0].article }}
                    </p>
                    <div class="meta-post-2-style">
                      <div class="meta-post-categores">
                        <a href="#">{{ trending[0].category.name }}</a>
                      </div>
                      <div class="meta-post-date">
                        <span>{{ trending[0].category.create_At }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="trending-sidebar-slider position-relative">
                  <span
                    @click="trendingPrev"
                    class="prev slick-arrow"
                    style="display: block"
                  >
                    <i class="fal fa-angle-left"></i>
                  </span>
                  <slider :settings="trendingSetting" ref="trending">
                    <div class="post_gallery_items">
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/1.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/2.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/3.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/4.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/5.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="post_gallery_items">
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/1.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/2.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/3.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/4.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="post-gallery-style-2">
                        <div class="post-gallery-thumb">
                          <img
                            src="@/assets/images/gallery-post/5.png"
                            alt="gallery"
                          />
                        </div>
                        <div class="post-gallery-content">
                          <h5 class="title">
                            <router-link to="/posts/postOne"
                              >Miami woman deliver her powerful winds kept help
                              from nuture…</router-link
                            >
                          </h5>
                          <div class="meta-post-2-style">
                            <div class="meta-post-categores">
                              <a href="#">TECHNOLOGY</a>
                            </div>
                            <div class="meta-post-date">
                              <span>April 26, 2020</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </slider>
                  <span
                    @click="trendingNext"
                    class="next slick-arrow"
                    style="display: block"
                    ><i class="fal fa-angle-right"></i
                  ></span>
                </div>
              </div>
            </div>
          </div>
          <div class="feature-news-box mt-40">
            <div class="section-title">
              <h3 class="title">Feature News</h3>
            </div>
            <div class="feature-slider position-relative">
              <span
                @click="featuresPrev"
                class="prev slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-left"></i
              ></span>
              <slider class="row" ref="features" :settings="featureSettings">
                <template v-for="(data, index) in features">
                  <div :key="index" class="px-3">
                    <div class="feature-news-item">
                      <div class="feature-news-thumb">
                        <img
                          :src="
                            require(`@/assets/images/feature/${data.image}`)
                          "
                          alt="feature"
                        />
                        <div class="meta-categores">
                          <span>{{ data.category.name }}</span>
                        </div>
                      </div>
                      <div class="feature-news-content">
                        <p>
                          {{ data.article }}
                        </p>
                      </div>
                    </div>
                  </div>
                </template>
              </slider>
              <span
                @click="featuresNext"
                class="next slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-right"></i
              ></span>
            </div>
          </div>
          <div class="bussiness-box mt-40">
            <div class="section-title">
              <h3 class="title">Business News</h3>
            </div>
            <div class="bussiness-items">
              <template v-for="(data, index) in businessPost.slice(0, 6)">
                <divide-card :datas="data" :key="index" stype="row-style-2" />
              </template>
            </div>
            <div class="bussiness-btn">
              <a class="main-btn main-btn-2" href="#">See more</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="all-post-sidebar-style-2 mt-40">
            <div class="most-view-box">
              <div class="section-title">
                <h3 class="title">Most View</h3>
              </div>
              <div class="trending-sidebar-slider position-relative">
                <span
                  @click="postGalleryPrev"
                  class="prev slick-arrow"
                  style="display: block"
                  ><i class="fal fa-angle-left"></i
                ></span>
                <slider :settings="postGalleryView" ref="postGallery">
                  <div class="post_gallery_items">
                    <template v-for="(data, index) in mostViews.slice(1, 6)">
                      <row-card
                        :datas="data"
                        :key="index"
                        :countingtwo="true"
                        :count="index + 1"
                      />
                    </template>
                  </div>
                  <div class="post_gallery_items">
                    <template v-for="(data, index) in mostViews.slice(1, 6)">
                      <row-card
                        :datas="data"
                        :key="index"
                        :countingtwo="true"
                        :count="index + 1"
                      />
                    </template>
                  </div>
                </slider>
                <span
                  @click="postGalleryNext"
                  class="next slick-arrow"
                  style="display: block"
                  ><i class="fal fa-angle-right"></i
                ></span>
              </div>
            </div>
            <div class="ad mt-40">
              <a href="#"
                ><img src="@/assets/images/ads/three_ad.png" alt=""
              /></a>
            </div>
            <div class="finance-box mt-40">
              <div class="section-title">
                <h3 class="title">Finance</h3>
              </div>
              <div class="finance-items">
                <template v-for="(data, index) in finance.slice(0, 4)">
                  <divide-card :datas="data" :key="index" stype="col-style-2" />
                </template>
              </div>
              <div class="finance-btn text-center mt-25">
                <a class="main-btn main-btn-2" href="#">See more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
import DivideCard from "../Utility/Cards/DivideCard.vue";
import RowCard from "../Utility/Cards/RowCard.vue";
export default {
  components: { Slider, RowCard, DivideCard },
  props: {
    trending: {
      type: Array,
    },
    features: {
      type: Array,
    },
    businessPost: {
      type: Array,
    },
    mostViews: {
      type: Array,
    },
    finance: {
      type: Array,
    },
  },
  data: () => ({
    trendingSetting: {
      autoplay: true,
      dots: false,
      arrows: false,
    },
    featureSettings: {
      autoplay: true,
      dots: false,
      arrows: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slideToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slideToScroll: 1,
          },
        },
      ],
    },
    postGalleryView: {
      autoplay: true,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
  methods: {
    trendingPrev() {
      this.$refs.trending.prev();
    },
    trendingNext() {
      this.$refs.trending.next();
    },
    featuresPrev() {
      this.$refs.features.prev();
    },
    featuresNext() {
      this.$refs.features.next();
    },
    postGalleryPrev() {
      this.$refs.postGallery.prev();
    },
    postGalleryNext() {
      this.$refs.postGallery.next();
    },
  },
};
</script>

<style></style>
