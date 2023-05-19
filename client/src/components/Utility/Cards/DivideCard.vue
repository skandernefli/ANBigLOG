<template>
  <div v-if="stype === 'row'" class="row">
    <div class="col-lg-6 col-md-6">
      <div class="business-post-thumb">
        <img :src="datas.image" :alt="datas.title" />
      </div>
    </div>
    <div class="col-lg-6 col-md-6">
      <div class="trending-news-item">
        <div class="trending-news-content">
          <div class="post-meta"  v-if="datas.category && datas.category.name && datas.category.create_At">
            <div class="meta-categories">
              <a :href="datas.link" class="d-block">
{{
                datas.category.name
              }}</a>
            </div>
            <div class="meta-date">
              <span>{{ datas.category.create_At }}</span>
            </div>
          </div>
          <h3 class="title">
            <a :href="datas.link" class="d-block">
{{ datas.title }}</a>
          </h3>
          <p class="text">
            {{ datas.description }}
          </p>
          <a v-if="readMore" :href="datas.link">Read more</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="stype === 'row-style-2'" class="bussiness-post-item" >
    <div class="bussiness-post-thumb">
      <img
        :src="datas.image"
        :alt="datas.title"
      />
    </div>
    <div class="bussiness-post-content"  v-if="datas.category && datas.category.name && datas.category.create_At">
      <h3 class="title">
        <a :href="datas.link" class="d-block">
{{ datas.title }}</a>
      </h3>
      <div class="meta-date-link">
        <span>{{ datas.category.create_At }}</span>
        <ul>
          <li>
            <a href="#"><i class="fal fa-bookmark"></i></a>
          </li>
          <li>
            <a href="#"><i class="fas fa-share"></i></a>
          </li>
        </ul>
      </div>
      <p>
        {{ datas.description }}
      </p>
      <a :href="datas.link"
        >LEARN MORE <img src="@/assets/images/arrow-2.svg"  :alt="datas.title"
      /></a>
    </div>
  </div>
  <div v-else-if="stype === 'col'" class="trending-news-item">
    <div class="trending-news-thumb" >
      <img :src="datas.image"  :alt="datas.title" />
      <div v-if="datas.action === 'trending'" class="icon">
        <a :href="datas.link"><i class="fas fa-bolt"></i></a>
      </div>
    </div>
    <div class="trending-news-content">
      <div class="post-meta">
        <div class="meta-categories" v-if="datas.category && datas.category.name && datas.category.create_At">
          <a :href="datas.link">{{ datas.category.name }}</a>
        </div>
        <div class="meta-date"  v-if="datas.category && datas.category.name && datas.category.create_At">
          <span>{{ datas.category.create_At }}</span>
        </div>
      </div>
      <h3 class="title">
        <a :href="datas.link" class="d-block">
{{ datas.title }}</a>
      </h3>
      <p class="text">
        {{ datas.description }}
      </p>
      <a v-if="readMore" :href="datas.link">Read more</a>
    </div>
  </div>
  <div v-else-if="stype === 'col-style-2'" class="finance-item">
    <div class="finance-thumb">
      <img
        :src="datas.image"
        :alt="datas.title"      />
      <div class="finance-date" v-if="datas.category && datas.category.name && datas.category.create_At">
        <span>{{ datas.category.name }}</span>
      </div>
    </div>
    <div class="finance-content">
      <h3 class="title">
        <a :href="datas.link" class="d-block">
{{ datas.title }}</a>
      </h3>
      <p class="line-clumb">
        {{ datas.article }}
      </p>
      <ul>
        <li>
          <a href="#"><i class="far fa-eye"></i> 53,346</a>
        </li>
        <li>
          <a href="#"><i class="far fa-heart"></i> 53,346</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-share"></i> 53,346</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
    },
    readMore: {
      type: Boolean,
      default: false,
    },
    stype: {
      type: String,
    },
  },
};
</script>

<style></style>
