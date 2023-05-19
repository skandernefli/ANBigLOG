<template>
  <a :href="datas.link" class="d-block">
    <div class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="datas.thumbnail"
          :alt="datas.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a :href="datas.link">{{ datas.category.name }}</a>
          </div>
          <div class="meta-date">
            <span>{{ datas.category.create_At }}</span>
          </div>
        </div>
        <h2 class="title">
          <a :href="datas.link">{{ datas.title }}</a>
        </h2>
        <p>
          {{ datas.description }}
        </p>
      </div>
      <div
      v-if="datas && datas.video_link" 
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href= "datas.video_link"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
      
    </div>
  </a>
</template>

<script>
export default {
  props: ["datas","datas_2"],
};

</script>

<style></style>
