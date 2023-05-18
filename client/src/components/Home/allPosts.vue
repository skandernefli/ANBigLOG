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
                      <img :src="coverToShow(post)" :alt="post.title" />
                    </div>
                    <div class="bussiness-post-content">
                      <h3 class="title">
                       
                        <router-link :to="'/posts/post/' + post._id" @click.prevent>{{ post.title }}</router-link>
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
                      
                      <p>{{ post.intro }}</p>
                      <router-link :to="'/posts/post/' + post._id"  @click.prevent="$router.push({ name: 'PostOne', params: { id: post._id } })">LEARN MORE<img src="@/assets/images/arrow-2.svg" alt="" /></router-link>
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
    posts:[{}],
    visiblePosts: 1,
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
    }





  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:8000/server/post/client/");
        this.posts = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    loadMore() {
      this.visiblePosts += 5;
    },
  },
};

</script>
<style></style>