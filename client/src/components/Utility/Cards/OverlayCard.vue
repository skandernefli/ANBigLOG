<template>
    <a :href="datas.link" v-if="stype === 'small'"
    class="feature-post d-block">


    <div class="feature-post-thumb">
      <img :src="datas.image"  :alt="datas.title" />
    </div>
    <div class="feature-post-content"  v-if="datas.category && datas.category.name && datas.category.create_At">
      <div class="post-meta">
        <div class="meta-categories">
          <a href="#">{{ truncatedTextI(datas.category.name) }}</a>
        </div>
        <div class="meta-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h4 class="title">
        <a href="#">  {{ truncatedTextT(datas.title) }}</a>
      </h4>
    </div>
  </a>
  <a :href="datas.link"    v-else-if="stype === 'big'"
  class="single-play-post-item d-block">
  
    <img :src="datas.image" :alt="datas.title" />
    <div class="single-play-post-content">
      <div class="post-meta">
        <div class="meta-categories">
          <a :href="datas.link">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h3 class="title">
        <a :href="datas.link">{{ datas.title }}</a>
      </h3>
    </div>
    <div v-if="datas.action === 'play'" class="play-btn">
      <a class="video-popup" @click.prevent="$store.dispatch('toggleVideo')"
        ><i class="fas fa-play"></i
      ></a>
    </div>
    <div  class="trending-btn">
      <a href="#"><i class="fas fa-bolt"></i></a>
    </div>
  </a>
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
  },  methods:{
    truncatedTextI(data) {
      const maxLength =19;
      if (data.length > maxLength) {
        return data.substring(0, maxLength) + "...";
      }else if (data.length < maxLength) {
    const invisibleCharsToAdd = maxLength - data.length;
    const invisibleChars = "\u00A0".repeat(invisibleCharsToAdd);
    return data + invisibleChars;
  }
  return data;
},
truncatedTextT(data) {
      const maxLength = 40;
      if (data.length >= maxLength) {
        return data.substring(0, maxLength) + "...";
      }else if (data.length < maxLength) {
    const invisibleCharsToAdd = maxLength - data.length;
    const invisibleChars = " \u00A0".repeat(invisibleCharsToAdd);
    return data + invisibleChars;
  }
  return data;
},
  }
};
</script>

<style></style>
