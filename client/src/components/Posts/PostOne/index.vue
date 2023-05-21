<template>
  <div>
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <!--====== POST LAYOUT 1 PART START ======-->
    <div class="thumb">
      <img :src=headerimage.value :alt="headerimage.title" style="width: 100%; height: auto;">
    </div>
    <section class="post-layout-1-area pb-80">

      <div class="container">

        <div class="row">

          <div class="col-lg-12">
            <div class="about-author-content">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">title:{{ headerimage.title }}</a></li>
                  <li class="breadcrumb-item"><a href="#">desciption:{{ headerimage.title }}</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    source:{{ headerimage.source }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="post-layout-top-content">
              <div class="
                  post-categories
                  d-flex
                  justify-content-between
                  align-content-center
                ">
                <div class="categories-item">
                  <span>{{ Posts.categorie_name }}</span>
                </div>

              </div>
              <div class="post-content">
                <h3 class="title">
                  {{ Posts.title }}
                </h3>
                <p>
                  {{ Posts.intro }}
                </p>
                <template v-for="(data, index) in content">
                  <div v-if="data.type === 'image'" :key="index" class="thumb">
                    <img :src="data.value" :alt="Posts.title" />
                  </div>
                </template>
              </div>
              <div class="post-author">
                <div class="author-info">
                  <div class="thumb">
                    <img src="@/assets/images/author1.png" alt="" />
                  </div>
                  <h5 class="title">Alexander.N</h5>
                  <ul>
                    <li>Created {{ Posts.created_at }}</li>
                  </ul>
                </div>
                <div class="author-social">
                  <ul>
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-heart"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fal fa-bookmark"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fas fa-ellipsis-v"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>

                <div v-for="(data, index) in content" v-bind:key="data._id">


                  <div v-if="index === 0">
                    <div v-if="data.type === 'backlink'" class="post-text mt-30">
                      <div v-if="JSON.parse(JSON.stringify(content[index + 1].value)).position === 'start'">
                        <p>
                          {{ data.value }}<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(content[index + 1].value).textOfLink }}</u></a>
                        </p>
                        
                        {{ assignSkip_1(index) }}

                      </div>

                    </div>
                    <div v-if="data.type === 'text'" class="post-text mt-30">
                      <div v-if="content[index + 1].type === 'backlink'">
                        <div v-if="JSON.parse(content[index + 1].value).position === 'end'">
                          <p>
                            {{ data.value }}<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a>
                          </p>

                        </div>
                        <div v-else-if="JSON.parse(content[index + 1].value).position === 'middle'">
                          <p>
                            {{ data.value }}<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a> {{ content[index + 2] }}
                          </p>
                          {{ assignSkip_2(index) }}
                        </div>
                        <div v-else-if="JSON.parse(content[index + 1].value).position === 'between'">
                          <p>
                            {{ data.value }}
                          </p>
                          <p>
                            :)<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a>
                          </p>
                          <p>
                            {{ content[index + 2] }}
                          </p>
                          {{ assignSkip_2(index) }}
                        </div>
                      </div>
                      <div v-else>
                        <p>
                          {{ data.value }}
                        </p>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'points'" class="post-text mt-30">
                      <ul>
                        <li><a>{{ data.value }}</a></li>
                      </ul>
                    </div>
                    <div v-else-if="data.type === 'title'" class="post-text pt-20">
                      <h3 class="title">{{ data.value }}</h3>
                    </div>
                    <div v-else-if="data.type === 'subtitle'" class="post-text pt-20">
                      <h5 class="title">{{ data.value }}</h5>
                    </div>
                    <div v-else-if="data.type === 'thumb'" class="row pt-10">
                      <div class="col-lg-6">
                        <div class="post-thumb">
                          <img :src="data.value" :alt="data.title" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="text">
                          <p>
                            {{ data.desciption }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'quote'" class="post-text pt-20">
                      <p>
                        <span class="quote-text">{{ data.value }}</span>
                      </p>
                    </div>
                    <div v-else-if="data.type === 'image'" class="post-text pt-20">
                      <div class="thumb pt-20 pb-35">
                        <img :src="data.value" alt="" />
                        <span>{{ data.title }}</span>
                        <span>{{ data.desciption }}</span>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'externalImage'" class="post-text pt-20">
                      <div class="thumb pt-20 pb-35">
                        <img :src="data.value" alt="" />
                      </div>
                    </div>
                    <div v-else-if="data.type === 'postquote'" class="post-quote d-block d-md-flex align-items-center">
                      <div class="thumb">
                        <img :src="data.value" :alt="data.title" />
                      </div>
                      <div class="post-quote-content">
                        <img src="@/assets/images/quote-icon.png" alt="" />
                        <p>
                          {{ data.desciption }}
                        </p>
                        <div class="user">
                          <h5 class="title">{{ data.title }}</h5>
                          <span>{{ data.source }}</span>
                        </div>
                      </div>
                    </div>
                    <!--  <div v-else-if="data.type==='video'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
        <h2 class="title">
          <a >{{ data.title }}</a>
        </h2>
        <p>
          {{ data.desciption }}
        </p>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div>
        <div v-else-if="data.type==='externalVideo'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div> -->
                    <div
                      v-else-if="data.type === 'file' || data.type === 'audio' || data.type === 'externalAudio' || data.type === 'externalFile' || data.type === 'externalLink'">
                      <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
                    </div>
                    <div v-if="data.type === 'code'" class="post-text mt-30">
                      <div v-html="data.value"></div>
                    </div>

                  </div>
                  <div v-else-if="index === content.length - 1">
                    <div v-if="index !== skip_1 && index !== skip_2">

                      <div v-if="data.type === 'text'" class="post-text mt-30">
                        <p>
                          {{ data.value }}
                        </p>

                      </div>
                      <div v-else-if="data.type === 'points'" class="post-text mt-30">
                        <ul>
                          <li><a>{{ data.value }}</a></li>
                        </ul>
                      </div>
                      <div v-else-if="data.type === 'title'" class="post-text pt-20">
                        <h3 class="title">{{ data.value }}</h3>
                      </div>
                      <div v-else-if="data.type === 'subtitle'" class="post-text pt-20">
                        <h5 class="title">{{ data.value }}</h5>
                      </div>
                      <div v-else-if="data.type === 'thumb'" class="row pt-10">
                        <div class="col-lg-6">
                          <div class="post-thumb">
                            <img :src="data.value" :alt="data.title" />
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <div class="text">
                            <p>
                              {{ data.desciption }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-else-if="data.type === 'quote'" class="post-text pt-20">
                        <p>
                          <span class="quote-text">{{ data.value }}</span>
                        </p>
                      </div>
                      <div v-else-if="data.type === 'image'" class="post-text pt-20">
                        <div class="thumb pt-20 pb-35">
                          <img :src="data.value" alt="" />
                          <span>{{ data.title }}</span>
                          <span>{{ data.desciption }}</span>
                        </div>
                      </div>
                      <div v-else-if="data.type === 'externalImage'" class="post-text pt-20">
                        <div class="thumb pt-20 pb-35">
                          <img :src="data.value" alt="" />
                        </div>
                      </div>
                      <div v-else-if="data.type === 'postquote'" class="post-quote d-block d-md-flex align-items-center">
                        <div class="thumb">
                          <img :src="data.value" :alt="data.title" />
                        </div>
                        <div class="post-quote-content">
                          <img src="@/assets/images/quote-icon.png" alt="" />
                          <p>
                            {{ data.desciption }}
                          </p>
                          <div class="user">
                            <h5 class="title">{{ data.title }}</h5>
                            <span>{{ data.source }}</span>
                          </div>
                        </div>
                      </div>
                      <!--   <div v-else-if="data.type==='video'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
        <h2 class="title">
          <a >{{ data.title }}</a>
        </h2>
        <p>
          {{ data.desciption }}
        </p>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div>
        <div v-else-if="data.type==='externalVideo'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div> -->
                      <div
                        v-else-if="data.type === 'file' || data.type === 'audio' || data.type === 'externalAudio' || data.type === 'externalFile' || data.type === 'externalLink'">
                        <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
                      </div>
                      <div v-if="data.type === 'code'" class="post-text mt-30">
                        <div v-html="data.value"></div>
                      </div>

                    </div>
                  </div>
                  <div v-else-if="index !== skip_1 && index !== skip_2">
                    <div v-if="data.type ==='backlink'" class="post-text mt-30">
                      <div v-if="JSON.parse(data.value).position === 'start'">
                        <p>
                         <a :href="JSON.parse(data.value).backlinkLink"><u>{{JSON.parse(data.value).textOfLink }}</u></a> {{ content[index + 1].value }}
                          {{ assignSkip_1(index) }}

                        </p>

                      </div>
<!--                       {{ consoleLog(data.type ) }}
 -->
                    </div>

<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->

                    <div v-if="data.type === 'text'" class="post-text mt-30">
                      <div v-if="content[index + 1].type === 'backlink'">
                        <div v-if="JSON.parse(content[index + 1].value).position === 'end'">
                          <p>
                            {{ data.value }}<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a>
                          </p>

                        </div>
                        <div v-else-if="JSON.parse(content[index + 1].value).position === 'middle'">
                          <p>
                            {{ data.value }}<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a>{{ content[index + 2].value }}
                          </p>
                          {{ assignSkip_2(index) }}
                        </div>
                        <div v-else-if="JSON.parse(content[index + 1].value).position === 'between'">
                          <p>
                            {{ data.value }}
                          </p>
                          <p>
                            :)<a :href="JSON.parse(content[index + 1].value).backlinkLink"><u>{{
                              JSON.parse(content[index + 1].value).textOfLink }}</u></a>
                          </p>
                          <p>
                            {{ content[index + 2].value }}
                          </p>
                          {{ assignSkip_2(index) }}
                        </div>
                      </div>
                      <div v-else>
                        <p>
                          {{ data.value }}
                        </p>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'points'" class="post-text mt-30">
                      <ul>
                        <li><a>{{ data.value }}</a></li>
                      </ul>
                    </div>
                    <div v-else-if="data.type === 'title'" class="post-text pt-20">
                      <h3 class="title">{{ data.value }}</h3>
                    </div>
                    <div v-else-if="data.type === 'subtitle'" class="post-text pt-20">
                      <h5 class="title">{{ data.value }}</h5>
                    </div>
                    <div v-else-if="data.type === 'thumb'" class="row pt-10">
                      <div class="col-lg-6">
                        <div class="post-thumb">
                          <img :src="data.value" :alt="data.title" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="text">
                          <p>
                            {{ data.desciption }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'quote'" class="post-text pt-20">
                      <p>
                        <span class="quote-text">{{ data.value }}</span>
                      </p>
                    </div>
                    <div v-else-if="data.type === 'image'" class="post-text pt-20">
                      <div class="thumb pt-20 pb-35">
                        <img :src="data.value" alt="" />
                        <span>{{ data.title }}</span>
                        <span>{{ data.desciption }}</span>
                      </div>
                    </div>
                    <div v-else-if="data.type === 'externalImage'" class="post-text pt-20">
                      <div class="thumb pt-20 pb-35">
                        <img :src="data.value" alt="" />
                      </div>
                    </div>
                    <div v-else-if="data.type === 'postquote'" class="post-quote d-block d-md-flex align-items-center">
                      <div class="thumb">
                        <img :src="data.value" :alt="data.title" />
                      </div>
                      <div class="post-quote-content">
                        <img src="@/assets/images/quote-icon.png" alt="" />
                        <p>
                          {{ data.desciption }}
                        </p>
                        <div class="user">
                          <h5 class="title">{{ data.title }}</h5>
                          <span>{{ data.source }}</span>
                        </div>
                      </div>
                    </div>
                    <!--   <div v-else-if="data.type==='video'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
        <h2 class="title">
          <a >{{ data.title }}</a>
        </h2>
        <p>
          {{ data.desciption }}
        </p>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div>
        <div v-else-if="data.type==='externalVideo'" class="post_gallery_play">
      <div class="bg-image">
        <img
          :src="coverimage.value"
          :alt="coverimage.title"
          style="width: 100%; height: 100%"
        />
      </div>
      <div class="post__gallery_play_content" style="z-index: 10">
        <div class="post-meta">
          <div class="meta-categories">
            <a >{{ Posts.categorie_name }}</a>
          </div>
          <div class="meta-date">
            <span>{{  Posts.created_at }}</span>
          </div>
        </div>
      </div>
      <div
        class="post_play_btn"
        @click.prevent="$store.dispatch('toggleVideo')"
      >
        <a
          class="video-popup"
          :href="data.value"
          a
          ><i class="fas fa-play"></i
        ></a>
      </div>
        </div> -->
                    <div
                      v-else-if="data.type === 'file' || data.type === 'audio' || data.type === 'externalAudio' || data.type === 'externalFile' || data.type === 'externalLink'">
                      <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
                    </div>
                    <div v-if="data.type === 'code'" class="post-text mt-30">
                      <div v-html="data.value"></div>
                    </div>






<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->
<!-- ----------------------------------------------------------------------------------------------------------------------------->

                  </div>
                </div>
              </div>

              <div class="post-tags">
                <ul>
                  <li>
                    <a href="#"><i class="fas fa-tag"></i> Tags</a>
                  </li>
                  <li><a href="#">Health</a></li>
                  <li><a href="#">World</a></li>
                  <li><a href="#">Corona</a></li>
                </ul>
              </div>
    
            </div>
          </div>
          <div class="col-lg-4" v-if="smallPostGallery.length > 0 && latestPostGallery.length > 0 &&popularPostGallery.length > 0 " >
          <home-one :trendingShortPost="false" :signup="false" :trendingBigPost="false" :ad="false" :sharePost="false"
            :darkClass="darkClass" role="sidebar" :datas="smallPostGallery" :datas_2="latestPostGallery"
            :datas_3="popularPostGallery" />
            <div class="all-post-sidebar">
              <div class="sidebar-add pt-35">
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div>  <div class="sidebar-add pt-35">
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div>
                <div class="sidebar-add pt-35">
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div></div>
                <div class="Categories-post mt-40">
                <div
                  class="
                    section-title
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                >
                  <h3 class="title">Categories</h3>
                  <a href="#">ALL SEE</a>
                </div>
                <div class="Categories-item">
                  <div class="item">
                    <img
                      src="@/assets/images/categories-1.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Restaurant</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-2.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Entertainment</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-2.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-3.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Financial</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-4.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Business</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-2.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
               
                  <div class="item">
                    <img
                      src="@/assets/images/categories-5.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>Scientists</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-6.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>International’s</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                  <div class="item">
                    <img
                      src="@/assets/images/categories-2.jpg"
                      alt="categories"
                    />
                    <div class="Categories-content">
                      <a href="#">
                        <span>ad</span>
                        <img src="@/assets/images/arrow.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="sidebar-add pt-35">
                  <a href="#"
                    ><img src="@/assets/images/ads/two_ad.jpg" alt="ad"
                  /></a>
                </div>
              </div>
          </div>
    
        
        </div>
      </div>
    </section>

    <!--====== POST LAYOUT 1 PART ENDS ======-->

    <!--====== LATEST NEWS PART START ======-->


    <!--====== LATEST NEWS PART ENDS ======-->

    <!--====== POST FORM PART START ======-->



    <!--====== POST FORM PART ENDS ======-->

    <!--====== POST COMMENTS PART START ======-->


    <!--====== POST COMMENTS PART ENDS ======-->

    <!--====== ADD PART ENDS ======-->

    <div class="add-area text-center">
      <a href="#">
        <img src="@/assets/images/ads/one_ad.png" alt="" />
      </a>
    </div>

    <!--====== ADD PART ENDS ======-->

    <footer-one />
    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <a href="#" class="go-top go-top-btn d-block">
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../Utility/Header/index";
import FooterOne from "../../Utility/Footer/FooterOne.vue";
import Drawer from "../../Mobile/Drawer.vue";
import HomeOne from "../../Utility/Sidebar/StyleOne.vue";HomeOne

export default {
  props: {
    id: {
      type: String,
    }
  },
  components: { Header, HomeOne, FooterOne, Drawer },
  data: () => ({
    Posts: [],
    content: [],
    latestPostGallery: [],
    popularPostGallery: [],
    smallPostGallery: [],
    selectedGallery: 'trendy',
    headerimage: "headerimage",
    coverimage: "coverimage",
    skip_1: -1,
    skip_2: -1,
    sidebar: false,
  }),
  async created() {
    await this.fetchPosts();
    await this.fetchsmallPostGallery();
    await this.fetchlatestPostGallery();
    await this.fetchpopularPostGallery();
    this.content = this.Posts.content;
    console.log("content", this.content);
    document.addEventListener("scroll", this.topToBottom);
  }, computed: {
    coverToShow() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "coverimage") {
            return post.content[i];
          }
        }
        return "";
      };
    },
    headerImage() {
      return post => {
        for (let i = 0; i < post.content.length; i++) {
          if (post.content[i].type === "headerimage") {
            return post.content[i];
          }
        }
        return "";
      };
    }

  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch(`http://localhost:8000/server/post/${this.$route.params.postId}`); // use "postId" instead of "id"
        this.Posts = await response.json();
        this.headerimage = this.headerImage(this.Posts);
        this.coverimage = this.coverToShow(this.Posts);
        console.log("post", this.Posts);
      } catch (error) {
        console.error(error);
      }
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    topToBottom() {
      const result = document.querySelector(".go-top");
      if (
        document.body.scrollTop > window.innerHeight ||
        document.documentElement.scrollTop > window.innerHeight
      ) {
        result.classList.add("active");
      } else {
        result.classList.remove("active");
      }
    },
    assignSkip_1(index) {
      this.skip_1 = index + 1;
      console.log("passed by skip1");
    },
    assignSkip_2(index) {
      this.skip_2 = index + 2;
      console.log("passed by skip2");

    },
    consoleLog(breakpoint){
      console.log("passed by point",breakpoint);
    },   selectGalleryTab(value) {
      this.selectedGallery = value;
    },   async fetchsmallPostGallery() {
      const response = await fetch("http://localhost:8000/server/trendy").then(res => res.json());
      const data = response[0].data;
      return this.smallPostGallery = data;
    },
    async fetchlatestPostGallery() {
      const response = await fetch("http://localhost:8000/server/latest").then(res => res.json());
      const data = response[0].data;
      return this.latestPostGallery = data;
    },
    async fetchpopularPostGallery() {
      const response = await fetch("http://localhost:8000/server/popular").then(res => res.json());
      const data = response[0].data;
      return this.popularPostGallery = data;
    },

  },
};
</script>
<style></style>
