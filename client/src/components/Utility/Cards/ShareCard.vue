<template>
  <div class="most-share-post-item">
    <div class="post-meta">
      <div class="meta-categories">
        <a href="#">{{ datas.category.name }}</a>
      </div>
      <div class="meta-date">
        <span>{{ datas.category.create_At }}</span>
      </div>
    </div>
    <h3 class="title">
      <router-link to="/posts/postOne">{{ datas.title }}</router-link>
    </h3>
    <ul>
      <li><i class="fab fa-twitter"></i> 2.2K</li>
      <li><i class="fab fa-facebook-f"></i> 3.5K</li>
    </ul>
    <div class="count">
      <span>{{ count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
    },
    count: {
      type: Number,
    },
  },
};
</script>

<style></style>
