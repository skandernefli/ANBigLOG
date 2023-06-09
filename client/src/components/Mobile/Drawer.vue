<template>
  <!--====== OFFCANVAS MENU PART START ======-->
  <div>
    <div class="off_canvars_overlay" :class="[sidebar ? 'active' : '']" @click.prevent="hideSidebar"></div>
    <div class="offcanvas_menu">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="offcanvas_menu_wrapper" :class="[sidebar ? 'active' : '']"
              style="overflow-y: scroll; overflow-x: hidden">
              <div class="canvas_close">
                <a href="javascript:void(0)" @click="hideSidebar"><i class="fa fa-times"></i></a>
              </div>
              <div class="offcanvas-brand text-center mb-40">
                <img src="@/assets/images/logoV2.png" alt="appie" />
              </div>
              <div id="menu" :style="heightPro" class="text-left">
                <ul class="offcanvas_main_menu list-unstyled">
                  <li v-for="(item, index) in categories" :key="index" class="menu-item-has-children active"
                    :class="[menuOpen === item.linkText ? 'menu-open' : '']">

                    <router-link style="text-transform: capitalize" v-if="item.name"
                      :to="'/Categories/latest/PostsInCategory/' + item.name">
                      {{ item.name
                      }}</router-link>
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
                    <a href="#"><i class="fal fa-envelope"></i> skander.nefli@gmail.com</a>
                  </li>
                  <li>
                    <a href="#"><i class="fal fa-phone"></i> +(216)21067995</a>
                  </li>
                  <li>
                    <a href="#"><i class="fal fa-map-marker-alt"></i> 21 Klm Ben Nouiji Henchir Ghbar
Morneg, Ben Arous</a>
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
      categories: []
    };
  }, async created() {
    await this.fetchCtegories();
    console.log(this.categories)
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
    async fetchCtegories() {
      try {
        const response = await fetch("https://3.145.167.18:443/server/category");
        this.categories = await response.json();
      } catch (error) {
        console.error(error);
      }
    }
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
