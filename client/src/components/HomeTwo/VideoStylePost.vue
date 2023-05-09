<template>
  <div class="video-style-post-2-area">
    <div class="container custom-container">
      <div class="video-style-box mt-40">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h3 class="title">Videos News</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="video-play-item">
              <div class="video-play-thumb">
                <img
                  :src="require(`@/assets/images/` + videoNews[0].image)"
                  alt=""
                />
                <div class="play-btn">
                  <a
                    class="video-popup"
                    @click.prevent="$store.dispatch('toggleVideo')"
                    ><i class="fab fa-youtube"></i
                  ></a>
                </div>
                <div class="share-item">
                  <ul>
                    <li>
                      <a href="#"><i class="fal fa-bookmark"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fas fa-share"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="post-meta">
                  <div class="meta-categories">
                    <a href="#" tabindex="0">{{
                      videoNews[0].category.name
                    }}</a>
                  </div>
                  <div class="meta-date">
                    <span>{{ videoNews[0].category.create_At }}</span>
                  </div>
                  <div class="meta-date">
                    <span>8:36mm</span>
                  </div>
                </div>
              </div>
              <div class="video-play-content">
                <h3 class="title">
                  <a href="#">{{ videoNews[0].title }}</a>
                </h3>
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
          </div>
          <div class="col-lg-4">
            <div class="video-play-sidebar-items">
              <template v-for="(data, index) in videoNews.slice(1, 7)">
                <div :key="index" class="post-gallery-style-2">
                  <div class="post-gallery-thumb">
                    <img
                      :src="
                        require(`@/assets/images/video-items/${data.image}`)
                      "
                      alt="gallery"
                    />
                  </div>
                  <div class="post-gallery-content">
                    <h5 class="title">
                      <router-link to="/posts/postOne" tabindex="-1">{{
                        data.title
                      }}</router-link>
                    </h5>
                    <div class="meta-post-2-style">
                      <div class="meta-post-categores">
                        <a href="#" tabindex="-1">{{ data.category.name }}</a>
                      </div>
                      <div class="meta-post-date">
                        <span>{{ data.category.create_At }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoNews: {
      type: Array,
    },
  },
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  methods: {
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
  },
};
</script>

<style></style>
