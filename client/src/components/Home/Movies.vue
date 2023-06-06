<template>
  <div class="post-entertainment pdt">
    <div
      :class="[
        'section-title',
        darkClass && 'title' in darkClass ? darkClass.title : '',
      ]"
    >
      <h3 class="title"> Movies & Shows</h3>
    </div>
    <div class="row" v-if="moviesDatas.length > 0">
      <template v-for="(data, index) in moviesDatas.slice(0, 6)">
        <div :key="index" class="col-lg-6 col-md-6">
          <divide-card
            :class="[darkClass && 'item' in darkClass ? darkClass.item : '']"
            stype="col"
            :datas="data"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DivideCard from "../Utility/Cards/DivideCard.vue";
export default {
  components: { DivideCard },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    moviesDatas: [{}],
  }),async created() {
    await this.fetchMoviesDatas();
   }, methods: {
    async fetchMoviesDatas() {
      const response = await fetch("http://3.145.167.18:8000/server/manageMoviesSection").then(res => res.json());
      const data = response[0].data;
      return this.moviesDatas = data;
    },
   }
};
</script>

<style>
.pdt{
  padding-top:100px !important ;
}
</style>