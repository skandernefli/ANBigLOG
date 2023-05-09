<template>
  <div class="business-news-post">
    <div
      :class="[
        'section-title d-flex justify-content-between align-items-center',
        darkClass && 'title' in darkClass ? darkClass.title : '',
      ]"
    >
      <h3 class="title">Business News</h3>
      <a href="#">ALL SEE</a>
    </div>
    <div class="business-post">
      <template v-for="(data, index) in TrendingPosts.slice(0, 4)">
        <div
          :key="index"
          :class="[
            'business-post-item  mb-40',
            darkClass && 'item' in darkClass ? darkClass.item : '',
          ]"
        >
          <divide-card :readMore="true" stype="row" :datas="data" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DivideCard from "../Utility/Cards/DivideCard.vue";
import TrendingPosts from "../Data/TrendingPost";
export default {
  components: { DivideCard },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    TrendingPosts: TrendingPosts.data,
  }),
};
</script>

<style>
</style>