<template>
  <a  :href="datas.link"  v-if="category" class="gallery_item" >
    <template v-if="datas">
      <div class="gallery_item_thumb">
        <img
          v-if="datas.image"
          :src="datas.image"
          :alt="datas.title"        />
      </div>
      <div class="gallery_item_content">
        <div class="post-meta">
          <div class="meta-categories">
            <a :href="datas.link">{{ truncatedTextI(datas.category.name) }}</a>
          </div>
          <div class="meta-date">
            <span>{{ datas.category.create_At }}</span>
          </div>
        </div>
        <h4 class="title">
          <a :href="datas.link">{{ truncatedTextT(datas.title)}}</a>
        </h4>
      </div>
    </template>
  </a>
  <a  :href="datas.link"      v-else-if="countingtwo"
    class="post-gallery-style-2 most-view-style-2">

 
    <div class="post-gallery-thumb">
      <img
        :src="datas.image"
        :alt="datas.title"      />
      <span>{{ count }}</span>
    </div>
    <div class="post-gallery-content">
      <h5 class="title">
        <a :href="datas.link">{{ datas.title }}</a>
      </h5>
      <div class="meta-post-2-style">
        <div class="meta-post-categores">
          <a :href="datas.link">{{ datas.category.name }}</a>
        </div>
        <div class="meta-post-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
    </div>
  </a>
  <a  :href="datas.link"    v-else-if="trending" class="gallery_item">
    <div class="gallery_item_thumb">
      <img
        v-if="datas.image"
        :src="datas.image"
        :alt="datas.title"      />
      <div v-if="datas.trending" class="icon"><i class="fas fa-bolt"></i></div>
    </div>
    <div class="gallery_item_content">
      <div class="post-meta">
        <div class="meta-categories">
          <a :href="datas.link">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h4 class="title">
        <a :href="datas.link">{{ datas.title }}</a>
      </h4>
      <!-- <span v-if="counting">{{ counting }}</span> -->
    </div>
  </a>
  <a  :href="datas.link"     v-else-if="counting"
    class="gallery_item gallery_item-style-2">
 
    <div class="gallery_item_thumb">
      <img :src="datas.image"  :alt="datas.title" />
      <div class="icon"><i class="fas fa-bolt"></i></div>
    </div>
    <div class="gallery_item_content">
      <div class="post-meta">
        <div class="meta-categories">
          <a :href="datas.link">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date">
          <span>March 26, 2020</span>
        </div>
      </div>
      <h4 class="title">
        <a :href="datas.link">{{ datas.title }}</a>
      </h4>
      <span>{{ count }}</span>
    </div>
  </a>
  <a  :href="datas.link"      v-else-if="sports" class="gallery_item">
    <template v-if="datas">
      <div class="gallery_item_thumb">
        <img
          :src="datas.image"
          :alt="datas.title"        />
      </div>
      <div class="gallery_item_content">
        <div class="post-meta">
          <div class="meta-categories">
            <a :href="datas.link">{{ datas.category.name }}</a>
          </div>
          <div class="meta-date">
            <span>{{ datas.category.create_At }}</span>
          </div>
        </div>
        <h4 class="title">
          <a :href="datas.link">{{ datas.title }}</a>
        </h4>
      </div>
    </template>
  </a>
  <a  :href="datas.link"          v-else
    class="single__post d-lg-flex text-center text-lg-left">

 
    <template v-if="datas">
      <div class="post-thumb mb-3 mb-lg-0">
        <img
          v-if="datas.image"
          :src="datas.image"
          :alt="datas.title"        />
      </div>
      <div class="post-content">
        <h4 class="title">
          <a :href="datas.link" class="line-clumb">{{ datas.title }}</a>
        </h4>
        <p class="line-clumb-one">{{ datas.description }}</p>
      </div>
    </template>
  </a>
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
  },methods:{
    truncatedTextI(data) {
      const maxLength = 17;
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
      const maxLength = 50;
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
