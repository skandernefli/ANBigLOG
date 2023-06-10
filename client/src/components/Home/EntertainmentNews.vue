<template>
  <div class="post-entertainment">
    <div
      :class="[
        'section-title',
        darkClass && 'title' in darkClass ? darkClass.title : '',
      ]"
    >
      <h3 class="title">Entertainment News</h3>
    </div>
    <div class="row" v-if="manageEntertainmentSection.length > 0">
      <template v-for="(data, index) in manageEntertainmentSection.slice(0, 4)">
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
/* import entertainmentNewsDatas from "../Data/EntertainmentNews";
 */export default {
  components: { DivideCard },
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    manageEntertainmentSection: [{}],
  }),async created() {
    
    await JSON.parse(JSON.stringify(this.fetchmanageEntertainmentSection()));
   }, methods: {
    async fetchmanageEntertainmentSection() {
      const response = await fetch("https://18.218.162.154:8443/server/manageEntertainmentSection").then(res => res.json());
      const data = response[0].data;
      return this.manageEntertainmentSection = data;
    },
   }
};
</script>

<style>
</style>