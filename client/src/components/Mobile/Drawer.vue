<template>
  <!--====== OFFCANVAS MENU PART START ======-->
  <div>
    <div
      class="off_canvars_overlay"
      :class="[sidebar ? 'active' : '']"
      @click.prevent="hideSidebar"
    ></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div
              class="offcanvas_menu_wrapper"
              :class="[sidebar ? 'active' : '']"
              style="overflow-y: scroll; overflow-x: hidden"
            >
              <div class="canvas_close">
                <a href="javascript:void(0)" @click="hideSidebar"
                  ><i class="fa fa-times"></i
                ></a>
              </div>
              <div class="offcanvas-brand text-center mb-40">
                <img src="@/assets/images/logo.png" alt="appie" />
              </div>
              <div id="menu" :style="heightPro" class="text-left">
                <ul class="offcanvas_main_menu list-unstyled">
                  <li
                    v-for="(item, index) in menuItems"
                    :key="index"
                    class="menu-item-has-children active"
                    :class="[menuOpen === item.linkText ? 'menu-open' : '']"
                  >
                    <span
                      v-if="item.submenu && item.submenu.length > 0 && nasted"
                      class="menu-expand"
                      ><i class="fa fa-angle-down"></i
                    ></span>
                    <router-link
                      style="text-transform: capitalize"
                      v-if="item.link"
                      :to="item.link"
                    >
                      {{ item.linkText }}</router-link
                    >
                    <a v-else href="#" @click.prevent="show(item.linkText)">
                      {{ item.linkText }}</a
                    >
                    <ul
                      v-if="item.submenu && nasted"
                      :id="item.linkText"
                      class="sidebar-sub-menu list-unstyled ml-3"
                      :class="[
                        menuOpen === item.linkText ? 'expend_menu_item' : '',
                      ]"
                    >
                      <li v-for="(subItem, i) in item.submenu" :key="i">
                        <router-link :to="subItem.link ? subItem.link : '#'">{{
                          subItem.linkText
                        }}</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="offcanvas-social">
                <ul class="text-center list-unstyled">
                  <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fab fa-dribbble"></i></a>
                  </li>
                </ul>
              </div>
              <div class="footer-widget-info">
                <ul>
                  <li>
                    <a href="#"
                      ><i class="fal fa-envelope"></i> support@appie.com</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fal fa-phone"></i> +(642) 342 762 44</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><i class="fal fa-map-marker-alt"></i> 442 Belle Terre St
                      Floor 7, San Francisco, AV 4206</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====== OFFCANVAS MENU PART ENDS ======-->
</template>

<script>
import Navs from "../Data/NavItems";
export default {
  props: {
    sidebar: {
      type: Boolean,
      required: true,
    },
    nasted: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      menuOpen: null,
      subMenuHeight: null,
      menuItems: Navs.data,
    };
  },
  computed: {
    heightPro() {
      return {
        "--height": this.subMenuHeight,
      };
    },
  },
  methods: {
    hideSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
    show(value) {
      if (value !== this.menuOpen) {
        this.menuOpen = value;
      } else {
        this.menuOpen = null;
      }
      const getListItem = document.querySelectorAll(`#${value} li`).length;
      this.subMenuHeight = 43 * getListItem + "px";
    },
  },
};
</script>

<style>
.sidebar-sub-menu {
  padding-left: 20px;
  overflow: hidden;
  height: 0px;
}
.sidebar-sub-menu {
  transition: all linear 0.65s;
}
.sidebar-sub-menu.expend_menu_item {
  transition: all linear 0.65s;
}
.expend_menu_item.sidebar-sub-menu {
  height: var(--height);
}
</style>
