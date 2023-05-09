<template>
  <VueSlickCarousel ref="carosel" v-bind="settings">
    <slot></slot>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: ["settings"],
  methods: {
    next() {
      this.$refs.carosel.next();
    },
    prev() {
      this.$refs.carosel.prev();
    },
  },
};
</script>

<style>
</style>