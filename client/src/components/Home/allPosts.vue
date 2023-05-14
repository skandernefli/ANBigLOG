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
                <div class="col-lg-12">
                  <div class="bussiness-post-item mb-40" v-for="(post,index) in postsToShow" :key="index">
                    <div class="bussiness-post-thumb">
                      <img :src="post.image" :alt="post.title" />
                    </div>
                    <div class="bussiness-post-content">
                      <h3 class="title">
                        <router-link :to="post.link">{{ post.title }}</router-link>
                      </h3>
                      <div class="meta-date-link">
                        <span>{{ post.category.create_At }}</span>
                        <ul>
                          <li>
                            <a href="#"><i class="fal fa-bookmark"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-share"></i></a>
                          </li>
                        </ul>
                      </div>
                      <p>{{ post.desciption }}</p>
                      <a :href="post.link">LEARN MORE<img src="@/assets/images/arrow-2.svg" alt="" /></a>
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
import Posts from "../Data/TrendingHomeThree";

export default {
  data: () => ({
    posts:"posts",
    visiblePosts: 2,
  }),
  async created() {
    await JSON.parse(JSON.stringify(this.fetchPosts()));
   }, 
  computed: {
    postsToShow() {
      return this.posts.slice(0, this.visiblePosts);
    },
  },
  methods: {
    async fetchPosts(){
      const response = await fetch("http://localhost:8000/server/post/client/").then(res => res.json());
      const data = response.data;
      return this.posts = data;


    },
    loadMore() {
      this.visiblePosts += 2;
    },
  },
};
</script>
<style></style>