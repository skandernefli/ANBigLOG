<template>
  <div
    :class="[
      'newspark-header-main-menu',
      darkClass && 'menuItem' in darkClass ? darkClass.menuItem : '',
    ]"
  >
    <ul v-if="nav_items">
       <li><router-link to="/">Home</router-link></li>
       <li class=" red"><router-link class="red" to="/Buzz"><i class="fab fa-gripfire height red"></i> Buzz</router-link></li>

      <li v-for="(item, index) in categories.slice(0,5)" :key="index">
     
        <router-link :to="'/Categories/latest/PostsInCategory/' + item.name"  >{{
          item.name
        }}</router-link></li>
      <li v-for="(item, index) in nav_items" :key="index">
        <a v-if="item.child"
          >{{ item.linkText }}
          <i v-if="item.child" class="fal fa-angle-down"></i
        ></a>
        <router-link v-else :to="`${item.link}`">{{
          item.linkText
        }}</router-link>
        <ul v-if="item.child" class="sub-menu">
          <li v-for="(lvlTwo, index) in categories.slice(5,categories.length)" :key="index">
            <router-link :to="'/Categories/latest/PostsInCategory/' + lvlTwo.name"  >
              {{ lvlTwo.name }}
            </router-link>
          
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import navItems from "../../Data/NavItems.json";
export default {
  props: {
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    nav_items: navItems.data,
    categories:[] // when you have api then delete json file (dir:components/data/) and add your data this variable
  }),async created(){
    await this.fetchCtegories();
  },
  methods: {
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
    async  fetchCtegories() {
    return this.fetchWithRetry("https://18.218.162.154:8443/server/category").then(response => {
        this.categories  = response;
    });
  },}
};
</script>

<style>
.newspark-header-main-menu ul > li .sub-menu {
  /* Add !important to override Bootstrap styles */
  min-width: 300px !important;
  max-width: 300px !important;
  /* Rest of the CSS properties */
}

.newspark-header-main-menu ul > li .sub-menu > li a {
  /* Adjust the padding as needed */
  padding: 10px 30px !important;
  /* Rest of the CSS properties */
}
</style>
