<template>
  <router-link to="/posts/postOne" v-if="category" class="gallery_item">
    <template v-if="datas">
      <div class="gallery_item_thumb">
        <img
          v-if="datas.image"
          :src="require(`@/assets/images/${datas.image}`)"
          alt="gallery"
        />
      </div>
      <div class="gallery_item_content">
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
    </template>
  </router-link>
  <router-link
    to="/posts/postOne"
    v-else-if="countingtwo"
    class="post-gallery-style-2 most-view-style-2"
  >
    <div class="post-gallery-thumb">
      <img
        :src="require(`@/assets/images/gallery-post/${datas.image}`)"
        alt="gallery"
      />
      <span>{{ count }}</span>
    </div>
    <div class="post-gallery-content">
      <h5 class="title">
        <a href="#">{{ datas.title }}</a>
      </h5>
      <div class="meta-post-2-style">
        <div class="meta-post-categores">
          <a href="#">{{ datas.category.name }}</a>
        </div>
        <div class="meta-post-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
    </div>
  </router-link>
  <router-link to="/posts/postOne" v-else-if="trending" class="gallery_item">
    <div class="gallery_item_thumb">
      <img
        v-if="datas.image"
        :src="require(`@/assets/images/${datas.image}`)"
        alt="gallery"
      />
      <div v-if="datas.trending" class="icon"><i class="fas fa-bolt"></i></div>
    </div>
    <div class="gallery_item_content">
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
      <!-- <span v-if="counting">{{ counting }}</span> -->
    </div>
  </router-link>
  <router-link
    to="/posts/postOne"
    v-else-if="counting"
    class="gallery_item gallery_item-style-2"
  >
    <div class="gallery_item_thumb">
      <img src="@/assets/images/most-post/most-1.jpg" alt="gallery" />
      <div class="icon"><i class="fas fa-bolt"></i></div>
    </div>
    <div class="gallery_item_content">
      <div class="post-meta">
        <div class="meta-categories">
          <a href="#">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>March 26, 2020</span>
        </div>
      </div>
      <h4 class="title">
        <a href="#">{{ datas.title }}</a>
      </h4>
      <span>{{ count }}</span>
    </div>
  </router-link>
  <router-link to="/posts/postOne" v-else-if="sports" class="gallery_item">
    <template v-if="datas">
      <div class="gallery_item_thumb">
        <img
          v-if="datas.image"
          :src="require(`@/assets/images/sports/${datas.image}`)"
          alt="gallery"
        />
      </div>
      <div class="gallery_item_content">
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
    </template>
  </router-link>
  <router-link
    to="/posts/postOne"
    v-else
    class="single__post d-lg-flex text-center text-lg-left"
  >
    <template v-if="datas">
      <div class="post-thumb mb-3 mb-lg-0">
        <img
          v-if="datas.image"
          :src="require(`@/assets/images/${datas.image}`)"
          alt="post"
        />
      </div>
      <div class="post-content">
        <h4 class="title">
          <a href="#" class="line-clumb">{{ datas.title }}</a>
        </h4>
        <p class="line-clumb-one">{{ datas.description }}</p>
      </div>
    </template>
  </router-link>
</template>

<script>
export default {
  props: {
    category: {
      type: Boolean,
    },
    trending: {
      type: Boolean,
    },
    sports: { type: Boolean, default: false },
    datas: {
      type: Object,
    },
    counting: {
      type: Boolean,
    },
    countingtwo: {
      type: Boolean,
    },
    count: {
      type: Number,
    },
  },
};
</script>

<style></style>
