<template>
  <section class="post-style-area">
    <div class="container custom-container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="post-style-tab-post mt-40">
            <div class="tab-btn">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li
                  @click.prevent="selectPostTab('trendy')"
                  class="nav-item"
                  role="presentation"
                >
                  <a
                    :class="[
                      'nav-link',
                      selectedTab === 'trendy' ? 'active' : '',
                    ]"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    >TRENDY</a
                  >
                </li>
                <li
                  @click.prevent="selectPostTab('latest')"
                  class="nav-item"
                  role="presentation"
                >
                  <a
                    :class="[
                      'nav-link',
                      selectedTab === 'latest' ? 'active' : '',
                    ]"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    >LATEST</a
                  >
                </li>
                <li
                  @click.prevent="selectPostTab('popular')"
                  class="nav-item"
                  role="presentation"
                >
                  <a
                    :class="[
                      'nav-link',
                      selectedTab === 'popular' ? 'active' : '',
                    ]"
                    id="pills-contact-tab"
                    data-toggle="pill"
                    href="#pills-contact"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    >POPULAR</a
                  >
                </li>
              </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div
                :class="[
                  'tab-pane fade',
                  selectedTab === 'trendy' ? 'show active' : '',
                ]"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <div class="post-style-items">
                  <div
                    v-for="(data, index) in morePost.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2 most-view-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="require(`@/assets/images/tab-post/${data.image}`)"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link
                          to="/posts/postOne"
                          class="line-clumb"
                          tabindex="-1"
                          >{{ data.title }}</router-link
                        >
                      </h5>
                      <div class="meta-post-2-style">
                        <div class="meta-post-categores">
                          <a href="#" tabindex="-1">{{ data.category.name }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-btn">
                  <a class="main-btn main-btn-2" href="#">See More</a>
                </div>
              </div>
              <div
                :class="[
                  'tab-pane fade',
                  selectedTab === 'latest' ? 'show active' : '',
                ]"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                <div class="post-style-items">
                  <div
                    v-for="(data, index) in morePost.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2 most-view-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="require(`@/assets/images/tab-post/${data.image}`)"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link
                          to="/posts/postOne"
                          class="line-clumb"
                          tabindex="-1"
                          >{{ data.title }}</router-link
                        >
                      </h5>
                      <div class="meta-post-2-style">
                        <div class="meta-post-categores">
                          <a href="#" tabindex="-1">{{ data.category.name }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-btn">
                  <a class="main-btn main-btn-2" href="#">See More</a>
                </div>
              </div>
              <div
                :class="[
                  'tab-pane fade',
                  selectedTab === 'popular' ? 'show active' : '',
                ]"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
              >
                <div class="post-style-items">
                  <div
                    v-for="(data, index) in morePost.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2 most-view-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="require(`@/assets/images/tab-post/${data.image}`)"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link
                          to="/posts/postOne"
                          class="line-clumb"
                          tabindex="-1"
                          >{{ data.title }}</router-link
                        >
                      </h5>
                      <div class="meta-post-2-style">
                        <div class="meta-post-categores">
                          <a href="#" tabindex="-1">{{ data.category.name }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post-btn">
                  <a class="main-btn main-btn-2" href="#">See More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6">
          <div class="opinion-post mt-40">
            <div class="section-title">
              <h3 class="title">Opinion</h3>
            </div>
            <div class="opinion-post-item">
              <div class="opinion-post-thumb">
                <img
                  :src="require(`@/assets/images/` + morePost[0].image)"
                  alt=""
                />
                <div class="circle-bar">
                  <div class="first circle">
                    <strong></strong>
                  </div>
                </div>
              </div>
              <div class="opinion-post-content">
                <h3 class="title">
                  <router-link to="/posts/postOne">{{
                    morePost[0].title
                  }}</router-link>
                </h3>
                <p>
                  {{ morePost[0].article }}
                </p>
                <div class="meta-post-2-style">
                  <div class="meta-post-categores">
                    <a href="#">{{ morePost[0].category.name }}</a>
                  </div>
                  <div class="meta-post-date">
                    <span>{{ morePost[0].category.create_At }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="most-view-box mt-40">
            <div class="section-title">
              <h3 class="title">What’s new</h3>
            </div>
            <div class="trending-sidebar-slider position-relative">
              <span
                @click="postGalleryTwoPrev"
                class="prev slick-arrow"
                style="display: block"
                ><i class="fal fa-angle-left"></i
              ></span>
              <slider :settings="postGalleryTwo" ref="postGalleryTwo">
                <div class="post_gallery_items">
                  <div
                    v-for="(data, index) in morePost.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="
                          require(`@/assets/images/gallery-post/${data.image}`)
                        "
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link to="/posts/postOne">{{
                          data.title
                        }}</router-link>
                      </h5>
                      <div class="meta-post-2-style">
                        <div class="meta-post-categores">
                          <a href="#">{{ data.category.name }}</a>
                        </div>
                        <div class="meta-post-date">
                          <span>{{ data.category.create_At }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="post_gallery_items">
                  <div
                    v-for="(data, index) in morePost.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="
                          require(`@/assets/images/gallery-post/${data.image}`)
                        "
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link to="/posts/postOne">{{
                          data.title
                        }}</router-link>
                      </h5>
                      <div class="meta-post-2-style">
                        <div class="meta-post-categores">
                          <a href="#">{{ data.category.name }}</a>
                        </div>
                        <div class="meta-post-date">
                          <span>{{ data.category.create_At }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </slider>
              <span
                @click="postGalleryTwoNext"
                class="next slick-arrow"
                style="display: block"
              >
                <i class="fal fa-angle-right"></i>
              </span>
            </div>
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
    morePost: {
      type: Array,
    },
  },
  data: () => ({
    selectedTab: "trendy",
    postGalleryTwo: {
      autoplay: true,
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  }),
  methods: {
    selectPostTab(value) {
      this.selectedTab = value;
    },
    postGalleryTwoPrev() {
      this.$refs.postGalleryTwo.prev();
    },
    postGalleryTwoNext() {
      this.$refs.postGalleryTwo.next();
    },
  },
};
</script>

<style></style>
