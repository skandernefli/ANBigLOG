<template>
  <header class="header-area">
    <div class="header-centerbar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div class="logo">
              <router-link to="/">
                <img :src="require(`@/assets/images/` + image)" alt="feature" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="header-centerbar-ad">
              <a href="#">
                <img src="@/assets/images/ads/one_ad.png" alt=""
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-menubar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-sm-3 col-3">
            <svg
              class="menu-drawer"
              style="cursor: pointer"
              @click.prevent="hideSidebar"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
            </svg>
            <!-- <div
              :class="[
                'newspark-header-main-menu',
                darkClass && 'menuItem' in darkClass ? darkClass.menuItem : '',
              ]"
            >
              <ul v-if="nav_items">
                <li v-for="(item, index) in nav_items" :key="index">
                  <a
                    >{{ item.linkText }}
                    <i v-if="item.child" class="fal fa-angle-down"></i
                  ></a>
                  <ul v-if="item.child" class="sub-menu">
                    <li v-for="(lvlTwo, index) in item.submenu" :key="index">
                      <router-link :to="`${lvlTwo.link}`">
                        {{ lvlTwo.linkText }}
                        <i v-if="lvlTwo.child" class="fal fa-angle-down"></i
                      ></router-link>
                      <ul v-if="lvlTwo.child" class="sub-menu">
                        <li
                          v-for="(lvlThree, index) in lvlTwo.third_menu"
                          :key="index"
                        >
                          <router-link :to="`${lvlThree.link}`">{{
                            lvlThree.linkText
                          }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> -->
            <nav-items :darkClass="darkClass" />
          </div>
        
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavItems from "../Common/NavItems.vue";
export default {
  components: {  NavItems },
  props: {
    image: {
      type: String,
      default: "logo.png",
    },
    darkClass: {
      type: Object,
    },
  },
  data: () => ({
    value: null,
    options: ["English", "Bangla", "Hinde"],
  }),
  methods: {
    hideSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
  },
};
</script>
<style>
.select-lang {
  border: 1px solid #bababa;
  width: 100px;
  padding: 2px;
  color: #17191d;
  outline: none;
  border-radius: 7px;
}
</style>
