<template>
  <!--====== HEADER PART START ======-->
  <header class="header-area header-style-2 header-style-3">
    <div class="container custom-container">
      <div class="row no-gutters">
        <div class="col-lg-3">
          <div class="header-logo">
            <a href="#"><img src="@/assets/images/logo-3.png" alt="" /></a>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="header-topbar d-none d-lg-block">
            <div class="container custom-container">
              <div class="row align-items-center">
                <div class="col-lg-9">
                  <top-bar />
                </div>
                <div class="col-lg-3">
                  <div class="topbar-social d-flex align-items-center">
                    <div class="header-menu-search">
                      <ul>
                        <li>
                          <a href="#"><i class="fal fa-user-circle"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="nice-select-item">
                      <select>
                        <option data-display="English">English</option>
                        <option value="1">Bangla</option>
                        <option value="2">Hindi</option>
                        <option value="3">option</option>
                        <option value="4">Potato</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header-centerbar d-none d-md-block">
            <div class="container custom-container">
              <div class="row align-items-center justify-content-end">
                <div class="col-lg-11">
                  <div
                    class="
                      header-center-items
                      d-flex
                      justify-content-end
                      align-items-center
                    "
                  >
                    <div class="header-date text-right">
                      <h5 class="title">Thursday</h5>
                      <span>March 26, 2020</span>
                    </div>
                    <div class="header-temperature">
                      <div class="icon">
                        <img
                          src="@/assets/images/temperature-icon-2.png"
                          alt=""
                        />
                      </div>
                      <div class="temperature-content text-center">
                        <h5 class="title">
                          13 <sup>0<sub>C</sub></sup>
                        </h5>
                        <p>San Francisco</p>
                      </div>
                    </div>
                    <div class="social">
                      <ul>
                        <li>
                          <a href="#"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-youtube"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fab fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
                <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z"></path>
              </svg>
              <nav-items class="header-three-nav" />
            </div>
            <div class="col-lg-3 col-sm-9 col-9">
              <div class="header-menu-rightbar">
                <div class="header-search">
                  <form action="#">
                    <div class="input-box">
                      <button type="button">
                        <i class="far fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!--====== HEADER PART ENDS ======-->
</template>

<script>
import NavItems from "../Common/NavItems.vue";
import TopBar from "./TopBar.vue";
export default {
  components: { TopBar, NavItems },
  methods: {
    hideSidebar(e) {
      this.$emit("toggleSidebar", e);
    },
  },
};
</script>

<style></style>
