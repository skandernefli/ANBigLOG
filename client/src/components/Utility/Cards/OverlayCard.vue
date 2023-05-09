<template>
  <router-link
    to="/posts/postOne"
    v-if="stype === 'small'"
    class="feature-post d-block"
  >
    <div class="feature-post-thumb">
      <img :src="require(`@/assets/images/` + datas.image)" alt="feature" />
    </div>
    <div class="feature-post-content">
      <div class="post-meta">
        <div class="meta-categories">
          <a href="#">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h4 class="title">
        <a href="#">{{ datas.title }}</a>
      </h4>
    </div>
  </router-link>
  <router-link
    to="/posts/postOne"
    v-else-if="stype === 'big'"
    class="single-play-post-item d-block"
  >
    <img :src="require(`@/assets/images/` + datas.image)" alt="feature" />
    <div class="single-play-post-content">
      <div class="post-meta">
        <div class="meta-categories">
          <a href="#">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h3 class="title">
        <a href="#">{{ datas.title }}</a>
      </h3>
    </div>
    <div v-if="datas.action === 'play'" class="play-btn">
      <a class="video-popup" @click.prevent="$store.dispatch('toggleVideo')"
        ><i class="fas fa-play"></i
      ></a>
    </div>
    <div v-if="datas.action === 'trending'" class="trending-btn">
      <a href="#"><i class="fas fa-bolt"></i></a>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
    },
    stype: {
      type: String,
    },
  },
};
</script>

<style></style>
