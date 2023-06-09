<template>
  <header class="header-area">
    <div class="header-centerbar">
      <div>
        <div class="row align-items-center ">
          <div class="col-lg-4">
            <div class="logo mar-left">
              <router-link to="/">
                <img :src="require(`@/assets/images/` + image)" alt="feature" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="header-centerbar-ad">
              <a href="#">
                <img src="@/assets/images/ads/one_ad.png" alt="" /></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="header-centerbar-ad">
              <a href="#">
                <img src="@/assets/images/ads/one_ad.png" alt="" /></a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="header-menubar">
      <div class="mar-left">
        <div class="col align-items-center">
          <div>

            <a href="#" class="menu-drawer">
              <div class="container_menubar "><i class="fas fa-location-arrow"></i> <a class="but">Support us !</a></div>

              <img class="size " :src="require(`@/assets/images/` + pnl)" />


            </a>


            <a class="menu-drawer">


              <i class="fas fa-align-center height red " style="cursor: pointer" @click.prevent="hideSidebar"
                alt="Menu"></i>
                <a class="responsive"><router-link to="/">Home</router-link></a>
                <a class="responsive red"><router-link class="red" to="/Buzz"><i class="fab fa-gripfire height red"></i> Buzz</router-link></a>
                <a class="responsive"><router-link to="/contact">Contact</router-link></a>
                <a class="responsive"><router-link to="/about-us">About</router-link></a>




            </a>
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
  components: { NavItems },
  props: {
    image: {
      type: String,
      default: "logo.svg",
    }, pnl: {
      type: String,
      default: "logoV2.png",
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

.mar-left {
  padding: 0;
  margin-left: 0;
}

.size {
  height: 100% !important;
  z-index: 0;
}

.container_menubar {
  position: absolute;
  display: inline;
  width: 55%;
  box-shadow: 0px 10px 40px rgba(23, 34, 43, 0.1);
  border-radius: 0;
  font-size: 25px;
  font-weight: 400;
  color: #1091FF;
  z-index: 1;
  top: 15%;
  left: 51%;

}

.container_menubar_home {
  position: absolute;
  box-shadow: 0px 10px 40px rgba(23, 34, 43, 0.1);
  border-radius: 0;
  font-size: 25px;
  font-weight: 400;
  color: #1091FF;
  width: 50%;
  padding: 10px;
  z-index: 1;
  top: 50%;
  left: 5%;

}

.height {
  font-size: 20px;
  padding-bottom: 7px;
}

.green {
  color: #49BF3C !important;

}
.red{
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(180deg, #ff5555 0%, #ab50ef 100%);
  -webkit-background-image: -webkit-linear-gradient(180deg, #ff5555 0%, #ab50ef 100%);
  text-fill-color: transparent;
  -webkit-text-fill-color: transparent;}

.responsive{
  font-size: 15px;
  font-weight: 500;
  color: #eeeef0;
  line-height: 60px;
}
.compass {
  font-size: 45px;
  padding-bottom: 10px;

}
</style>
