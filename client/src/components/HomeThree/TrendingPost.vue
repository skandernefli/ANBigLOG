<template>
  <section class="trending-3-area">
    <div class="container custom-container">
      <div class="row">
        <div class="col-lg-8">
          <div class="trending-news-3 mt-50">
            <div class="section-title section-title-3">
              <h3 class="title">Trending News</h3>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="trending-news-3-item">
                  <div class="trending-news-thumb">
                    <img
                      :src="require(`@/assets/images/${datas[0].image}`)"
                      alt="trending"
                    />
                    <div class="icon">
                      <a href="#" tabindex="-1"><i class="fas fa-bolt"></i></a>
                    </div>
                  </div>
                  <div class="trending-news-content">
                    <div class="post-meta">
                      <div class="meta-categories">
                        <a href="#" tabindex="-1">{{
                          datas[0].category.name
                        }}</a>
                      </div>
                      <div class="meta-date">
                        <span>{{ datas[0].category.create_At }}</span>
                      </div>
                      <div class="share-link">
                        <ul>
                          <li>
                            <a href="#"><i class="fal fa-bookmark"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-share"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 class="title">
                      <router-link to="/posts/postOne" tabindex="-1">{{
                        datas[0].title
                      }}</router-link>
                    </h3>
                    <p class="text">
                      {{ datas[0].article }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="post_gallery_items">
                  <template v-for="(data, index) in datas.slice(1, 5)">
                    <div :key="index" class="gallery_item gallery_item_3">
                      <div class="gallery_item_thumb">
                        <img
                          :src="require(`@/assets/images/${data.image}`)"
                          alt="gallery"
                        />
                      </div>
                      <div class="gallery_item_content">
                        <div class="post-meta">
                          <div class="meta-categories">
                            <a href="#">{{ data.category.name }}</a>
                          </div>
                          <div class="meta-date">
                            <span>{{ data.category.create_At }}</span>
                          </div>
                        </div>
                        <h4 class="title">
                          <router-link to="/posts/postOne">{{
                            data.title
                          }}</router-link>
                        </h4>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="trending-slider-item mt-40">
            <div class="trending-slider-3 position-relative">
              <span @click="prev" class="prev slick-arrow d-none d-md-block"
                ><i class="fal fa-angle-left"></i
              ></span>
              <slider :settings="settings" ref="trending">
                <template v-for="(data, index) in datas">
                  <div :key="index" class="px-3">
                    <div class="international-item international-3-item">
                      <div class="meta-category">
                        <span>{{ data.category.name }}</span>
                      </div>
                      <h5 class="title">
                        <router-link to="/posts/postOne">{{
                          data.title
                        }}</router-link>
                      </h5>
                      <div class="text-thumb d-flex align-items-center">
                        <p>
                          {{ data.article }}
                        </p>
                        <div class="thumb">
                          <img
                            src="@/assets/images/international-1.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </slider>
              <span @click="next" class="next slick-arrow d-none d-md-block"
                ><i class="fal fa-angle-right"></i
              ></span>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="finance-3-style mt-50">
            <div class="section-title section-title-3">
              <h3 class="title">Finance</h3>
            </div>

            <div class="finance-item finance-item-3">
              <div class="finance-thumb">
                <img
                  src="@/assets/images/finance/finance-1.jpg"
                  alt="finance"
                />
                <div class="finance-date">
                  <span>April 26, 2020</span>
                </div>
              </div>
              <div class="finance-content">
                <h3 class="title">
                  <router-link to="/posts/postOne"
                    >Japan’s virus success puzzled the world luck running
                    out</router-link
                  >
                </h3>
                <p>
                  The property, complete with seates screening from room
                  amphitheater pond with sandy
                </p>
                <ul>
                  <li>
                    <a href="#"><i class="far fa-eye"></i> 53,346</a>
                  </li>
                  <li>
                    <a href="#"><i class="far fa-heart"></i> 53,346</a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-share"></i> 53,346</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="finance-item finance-item-3">
              <div class="finance-thumb">
                <img
                  src="@/assets/images/finance/finance-1.jpg"
                  alt="finance"
                />
                <div class="finance-date">
                  <span>April 26, 2020</span>
                </div>
              </div>
              <div class="finance-content">
                <h3 class="title">
                  <router-link to="/posts/postOne">
                    Japan’s virus success puzzled the world luck running
                    out</router-link
                  >
                </h3>
                <p>
                  The property, complete with seates screening from room
                  amphitheater pond with sandy
                </p>
                <ul>
                  <li>
                    <a href="#"><i class="far fa-eye"></i> 53,346</a>
                  </li>
                  <li>
                    <a href="#"><i class="far fa-heart"></i> 53,346</a>
                  </li>
                  <li>
                    <a href="#"><i class="fas fa-share"></i> 53,346</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 col-md-6">
          <div class="trending-image-slide position-relative">
            <span
              @click="buisnessNext"
              class="prev slick-arrow d-none d-md-block"
              style="display: block"
              ><i class="fal fa-angle-left"></i
            ></span>
            <slider :settings="buisnessSettings" ref="buisnessTrending">
              <template v-for="(data, index) in buisnessData">
                <div :key="index" class="trending-image-post mt-30">
                  <img :src="require(`@/assets/images/` + data.image)" alt="" />
                  <div class="trending-image-content">
                    <div class="post-meta">
                      <div class="meta-categories">
                        <a href="#">{{ data.category.name }}</a>
                      </div>
                      <div class="meta-date">
                        <span>{{ data.category.create_At }}</span>
                      </div>
                    </div>
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        data.title
                      }}</router-link>
                    </h3>
                  </div>
                </div>
              </template>
            </slider>
            <span
              @click="buisnessNext"
              class="next slick-arrow d-none d-md-block"
              style="display: block"
              ><i class="fal fa-angle-right"></i
            ></span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6">
          <div class="trending-business-post mt-30">
            <div class="section-title section-title-3">
              <h3 class="title">Business</h3>
            </div>
            <div class="trending-business-items">
              <div class="gallery_item populer_item-style">
                <div class="gallery_item_thumb">
                  <img
                    src="@/assets/images/trending-business/1.jpg"
                    alt="populer"
                  />
                </div>
                <div class="gallery_item_content">
                  <h4 class="title">
                    <router-link to="/posts/postOne"
                      >The city with highest quality of life in
                      world.</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="gallery_item populer_item-style">
                <div class="gallery_item_thumb">
                  <img
                    src="@/assets/images/trending-business/2.jpg"
                    alt="populer"
                  />
                </div>
                <div class="gallery_item_content">
                  <h4 class="title">
                    <router-link to="/posts/postOne"
                      >The city with highest quality of life in
                      world.</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="gallery_item populer_item-style">
                <div class="gallery_item_thumb">
                  <img
                    src="@/assets/images/trending-business/3.jpg"
                    alt="populer"
                  />
                </div>
                <div class="gallery_item_content">
                  <h4 class="title">
                    <router-link to="/posts/postOne"
                      >The city with highest quality of life in
                      world.</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="gallery_item populer_item-style">
                <div class="gallery_item_thumb">
                  <img
                    src="@/assets/images/trending-business/4.jpg"
                    alt="populer"
                  />
                </div>
                <div class="gallery_item_content">
                  <h4 class="title">
                    <router-link to="/posts/postOne"
                      >The city with highest quality of life in
                      world.</router-link
                    >
                  </h4>
                </div>
              </div>
              <div class="gallery_item populer_item-style">
                <div class="gallery_item_thumb">
                  <img
                    src="@/assets/images/trending-business/5.jpg"
                    alt="populer"
                  />
                </div>
                <div class="gallery_item_content">
                  <h4 class="title">
                    <router-link to="/posts/postOne"
                      >The city with highest quality of life in
                      world.</router-link
                    >
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="ad mt-30">
            <a href="#">
              <img src="@/assets/images/ads/three_ad.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
export default {
  components: { Slider },
  props: {
    datas: {
      type: Array,
    },
    buisnessData: {
      type: Array,
    },
  },
  data: () => ({
    settings: {
      arrows: false,
      dots: false,
      autoplay: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    buisnessSettings: {
      arrows: false,
      dots: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
  methods: {
    prev() {
      this.$refs.trending.prev();
    },
    next() {
      this.$refs.trending.next();
    },
    buisnessPrev() {
      this.$refs.buisnessTrending.prev();
    },
    buisnessNext() {
      this.$refs.buisnessTrending.next();
    },
  },
};
</script>

<style></style>
