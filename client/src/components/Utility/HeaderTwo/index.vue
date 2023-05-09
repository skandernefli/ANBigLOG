<template>
  <div>
    <header class="header-area header-style-2 header-style-4">
      <top-bar />
      <div class="header-centerbar">
        <div class="container custom-container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-5">
              <div class="logo">
                <router-link to="/">
                  <img src="@/assets/images/logo.png" alt="logo" />
                </router-link>
              </div>
            </div>
            <div class="col-lg-5 col-md-7">
              <div class="header-search">
                <form action="#">
                  <div class="input-box">
                    <input type="text" placeholder="What you want to search?" />
                    <button type="button">Search</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-2">
              <div
                class="
                  header-temperature
                  justify-content-end
                  d-none d-lg-flex
                  align-items-center
                "
              >
                <div class="icon">
                  <img src="assets/images/temperature-icon.svg" alt="" />
                </div>
                <div class="temperature-content text-center">
                  <h5 class="title">
                    13 <sup>0<sub>C</sub></sup>
                  </h5>
                  <p>San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-menubar">
        <div class="container custom-container">
          <div class="menubar-bg">
            <div class="row align-items-center">
              <div class="col-lg-9 col-sm-3 col-3">
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
                  <path
                    d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"
                  ></path>
                </svg>
                <nav-items style="margin-left: 10px" class="header-two" />
              </div>
              <div class="col-lg-3 col-sm-9 col-9">
                <div class="header-menu-rightbar">
                  <div class="header-date">
                    <p>Thursday, March 26, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import NavItems from "../Common/NavItems.vue";
import TopBar from "./TopBar.vue";
export default {
  components: { NavItems, TopBar },
  methods: {
    hideSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
  },
};
</script>

<style></style>
