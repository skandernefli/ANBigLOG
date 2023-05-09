<template>
  <section class="latest-news-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h3 class="title">Our latest news</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(data, index) in Posts.slice(0, 3)"
          :key="index"
          class="col-lg-4"
        >
          <divide-card stype="col" :datas="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DivideCard from "../Cards/DivideCard.vue";
export default {
  components: { DivideCard },
  props: {
    Posts: {
      type: Array,
    },
  },
};
</script>

<style></style>
