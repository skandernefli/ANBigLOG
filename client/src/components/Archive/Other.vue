<template>
  <section class="about-item-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="about-tab-btn mt-40">
              <div class="archive-btn">
                  <ul>
                      <li>April, 2020</li>
                      <li><i class="fal fa-calendar"></i></li>
                  </ul>
              </div>
              <div class="about-post-items">
                  <div class="row">
                      <div v-for="(data,index) in aboutDatas" :key="index" class="col-lg-6 col-md-6">
                          <div class="trending-news-item mb-30">
                              <div class="trending-news-thumb">
                                  <img :src="require(`@/assets/images/${data.image}`)" alt="trending">
                              </div>
                              <div class="trending-news-content">
                                  <div class="post-meta">
                                      <div class="meta-categories">
                                          <a href="#">{{data.category.name }}</a>
                                      </div>
                                      <div class="meta-date">
                                          <span>{{data.category.create_At }}</span>
                                      </div>
                                  </div>
                                  <h3 class="title"><a href="#">{{data.title}}</a></h3>
                                  <p class="text">{{data.article}}</p>
                              </div>
                          </div>
                      </div>
                      <div v-for="(data,index) in aboutDatas.slice(0,2)" :key="index" class="col-lg-6 col-md-6">
                          <div class="trending-news-item mb-30">
                              <div class="trending-news-thumb">
                                  <img :src="require(`@/assets/images/${data.image}`)" alt="trending">
                              </div>
                              <div class="trending-news-content">
                                  <div class="post-meta">
                                      <div class="meta-categories">
                                          <a href="#">{{data.category.name }}</a>
                                      </div>
                                      <div class="meta-date">
                                          <span>{{data.category.create_At }}</span>
                                      </div>
                                  </div>
                                  <h3 class="title"><a href="#">{{data.title}}</a></h3>
                                  <p class="text">{{data.article}}</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-12">
                          <div class="pagination-item">
                              <nav aria-label="Page navigation example">
                                  <ul class="pagination">
                                      <li class="page-item active"><a class="page-link" href="#">01</a></li>
                                      <li class="page-item"><a class="page-link" href="#">02</a></li>
                                      <li class="page-item"><a class="page-link" href="#">...</a></li>
                                      <li class="page-item"><a class="page-link" href="#">50</a></li>
                                      <li class="page-item">
                                          <a class="page-link" href="#" aria-label="Next">
                                              <span aria-hidden="true"><i class="fas fa-caret-right"></i></span>
                                          </a>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="col-lg-4">
          <styleOne class="mt-40" role="sidebar" :datas="aboutDatas"  :signup="true" :trendingShortPost="true" :trendingBigPost="true" :ad="true" />
          
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import styleOne from "../Utility/Sidebar/StyleOne.vue";
import aboutDatas from "../Data/About";

export default {
  components: { styleOne},
  data: () => ({
    selected: "latest",
    aboutDatas: aboutDatas.data,
    
  }),
  methods: {
    selectTab(value) {
      this.selected = value;
    },
   
  },
};
</script>

<style></styleOne>
