<template>
  <header class="header-area">
    <div class="header-centerbar">
      <div >
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
                <img src="@/assets/images/ads/one_ad.png" alt=""
              /></a>
            </div>
          </div>
          <div class="col-lg-4">
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
      <div class="mar-left">
        <div class="col align-items-center">
          <div >
            <a href="#"       class="menu-drawer"
>

            <img
            class="size "
            :src="require(`@/assets/images/` + pnl)"

    />
    <i class="fas fa-heart height red" ></i>    
    <i class="fas fa-bars height red"   style="cursor: pointer"
      @click.prevent="hideSidebar"
      alt="Menu"></i>
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
  components: {  NavItems },
  props: {
    image: {
      type: String,
      default: "logo.svg",
    },   pnl: {
      type: String,
      default: "logophone.png",
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
.mar-left{
padding: 0;
margin-left: 0;
}

.size{
  height: 50px !important;
}
.height{
 font-size:  20px;
 padding-bottom: 7px;
}
.green{
  color: #49BF3C !important;

}
.red{
  box-shadow: 0px 0px 10px rgba(0,0,0,1);
}


</style>
