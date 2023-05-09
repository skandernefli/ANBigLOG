<template>
  <div v-if="stype === 'row'" class="row">
    <div class="col-lg-6 col-md-6">
      <div class="business-post-thumb">
        <img :src="require(`@/assets/images/` + datas.image)" alt="feature" />
      </div>
    </div>
    <div class="col-lg-6 col-md-6">
      <div class="trending-news-item">
        <div class="trending-news-content">
          <div class="post-meta">
            <div class="meta-categories">
              <router-link to="/buisness">{{
                datas.category.name
              }}</router-link>
            </div>
            <div class="meta-date">
              <span>{{ datas.category.create_At }}</span>
            </div>
          </div>
          <h3 class="title">
            <router-link to="/posts/postOne">{{ datas.title }}</router-link>
          </h3>
          <p class="text">
            {{ datas.article }}
          </p>
          <a v-if="readMore" href="#">Read more</a>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="stype === 'row-style-2'" class="bussiness-post-item">
    <div class="bussiness-post-thumb">
      <img
        :src="require(`@/assets/images/business-post/${datas.image}`)"
        alt="business"
      />
    </div>
    <div class="bussiness-post-content">
      <h3 class="title">
        <router-link to="/posts/postOne">{{ datas.title }}</router-link>
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
        {{ datas.article }}
      </p>
      <a href="#"
        >LEARN MORE <img src="@/assets/images/arrow-2.svg" alt=""
      /></a>
    </div>
  </div>
  <div v-else-if="stype === 'col'" class="trending-news-item">
    <div class="trending-news-thumb">
      <img :src="require(`@/assets/images/` + datas.image)" alt="feature" />
      <div v-if="datas.action === 'trending'" class="icon">
        <a href="#"><i class="fas fa-bolt"></i></a>
      </div>
    </div>
    <div class="trending-news-content">
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
      <p class="text">
        {{ datas.article }}
      </p>
      <a v-if="readMore" href="#">Read more</a>
    </div>
  </div>
  <div v-else-if="stype === 'col-style-2'" class="finance-item">
    <div class="finance-thumb">
      <img
        :src="require(`@/assets/images/finance/${datas.image}`)"
        alt="finance"
      />
      <div class="finance-date">
        <span>{{ datas.category.name }}</span>
      </div>
    </div>
    <div class="finance-content">
      <h3 class="title">
        <router-link to="/posts/postOne">{{ datas.title }}}</router-link>
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
