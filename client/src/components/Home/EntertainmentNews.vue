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
    async  fetchWithRetry(url, options, maxRetries = 30, delay = 1000) {
    let retries = 0;
    while (retries < maxRetries) {
      try {
        const response = await fetch(url, options);
        console.log('Response Status:', response.status); // Add this line
        if (response.status === 200) {
          console.log('Success');
          return response.json();
        } else {
          throw new Error('Non-200 response status');
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      retries++;
      console.log('Retry:', retries); // Add this line
    }
    throw new Error('Max retries exceeded');
  },


  async  fetchmanageEntertainmentSection() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/manageEntertainmentSection").then(response => {
       this.manageEntertainmentSection= response[0].data;
    });
  },
  
   }
};
</script>

<style>
</style>