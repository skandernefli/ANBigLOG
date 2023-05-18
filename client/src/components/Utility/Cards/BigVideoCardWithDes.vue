<template>
  <router-link to="/posts/postOne" class="d-block">
    <div class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="datas.thumbnail"
          alt=""
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a href="#">{{ datas.category.name }}</a>
          </div>
          <div class="meta-date">
            <span>{{ datas.category.create_At }}</span>
          </div>
        </div>
        <h2 class="title">
          <a href="#">{{ datas.title }}</a>
        </h2>
        <p>
          {{ datas.description }}
        </p>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          href="https://www.youtube.com/watch?v=4mGyYNuG6us"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
    }
 
  },
};

</script>

<style></style>
