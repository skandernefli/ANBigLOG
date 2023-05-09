<template>
  <div
    :class="[
      'newspark-header-main-menu',
      darkClass && 'menuItem' in darkClass ? darkClass.menuItem : '',
    ]"
  >
    <ul v-if="nav_items">
      <li v-for="(item, index) in nav_items" :key="index">
        <a v-if="item.child"
          >{{ item.linkText }}
          <i v-if="item.child" class="fal fa-angle-down"></i
        ></a>
        <router-link v-else :to="`${item.link}`">{{
          item.linkText
        }}</router-link>
        <ul v-if="item.child" class="sub-menu">
          <li v-for="(lvlTwo, index) in item.submenu" :key="index">
            <router-link :to="`${lvlTwo.link}`">
              {{ lvlTwo.linkText }}
              <i v-if="lvlTwo.child" class="fal fa-angle-down"></i
            ></router-link>
            <ul v-if="lvlTwo.child" class="sub-menu">
              <li v-for="(lvlThree, index) in lvlTwo.third_menu" :key="index">
                <router-link :to="`${lvlThree.link}`">{{
                  lvlThree.linkText
                }}</router-link>
              </li>
            </ul>
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
    nav_items: navItems.data, // when you have api then delete json file (dir:components/data/) and add your data this variable
  }),
};
</script>

<style>
.newspark-header-main-menu.header-two ul > li > a {
  color: #ffffff;
}
.newspark-header-main-menu.header-three-nav ul > li > a {
  color: white;
}
.header-three-nav {
  margin-left: 35px;
}
</style>
