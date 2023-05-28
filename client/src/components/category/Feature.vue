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
                  <li class="breadcrumb-item"><a href="#">Category</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ $route.params.categorie_name }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="about-tab-btn mt-40">
              <div class="archive-btn">
                <ul>
                  <li>
                    <span>Category: <span>                    {{ $route.params.categorie_name }}
</span></span>
                  </li>
                </ul>
              </div>
              <div class="about-post-items">
                <div class="row">
                  <div class="col-lg-6 col-md-6" v-if="posts.length > 0">
                    <div class="trending-image-post feature-item mt-30"  v-for="(post,index) in postsToShow" :key="index">
                      <img :src="coverToShow(post)" :alt="post.title" />
                      <div class="trending-image-content">
                        <div class="post-meta">
                          <div class="meta-categories">
                            <a href="#">{{ $route.params.categorie_name }}</a>
                          </div>
                       
                        </div>
                        <h3 class="title">
                          <router-link :to="'/posts/post/' + post._id"  @click.prevent="$router.push({ name: 'PostOne', params: { id: post._id } })"
                            >{{truncatedTextT(post.title )}}</router-link
                          >
                        </h3>
                      </div>
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
          <div class="col-lg-4">
            <style-one :datas="posts.slice(1, 6)" />
          </div>
        </div>
      </div>
    </section>
  </category-layout>
</template>

<script>
import StyleOne from "../Utility/Sidebar/StyleOne.vue";
import CategoryLayout from "./CategoryLayout.vue";
export default {
  props: {
    category: {
      type: String,
    }
  },
 
  components: { CategoryLayout, StyleOne },
  data: () => ({
    posts: [],
    visiblePosts: 18,
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
    await this.fetchPosts();},  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`http://localhost:8000/server/post/category/${this.$route.params.categorie_name}`); // use "postId" instead of "id"
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
}

  
  }, watch: {
    category(newValue, oldValue) {
      if (newValue !== oldValue) {
      this.fetchPosts();
    }
    },}

};
</script>

<style></style>
