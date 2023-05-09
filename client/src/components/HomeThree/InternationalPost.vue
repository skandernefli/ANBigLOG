<template>
  <section class="all-post-3-area pb-100">
    <div class="container custom-container">
      <div class="row">
        <div class="col-lg-8">
          <div class="international-news-area">
            <div class="section-title section-title-3">
              <h3 class="title">International News</h3>
            </div>
            <div class="international-news-items">
              <template v-for="(data, index) in internationalPost">
                <div :key="index" class="international-news-item">
                  <div class="international-news-thumb">
                    <img
                      :src="
                        require(`@/assets/images/international-post/${data.image}`)
                      "
                      alt=""
                    />
                  </div>
                  <div class="international-news-content">
                    <div class="international-meta">
                      <div class="post-meta">
                        <div class="meta-categories">
                          <a href="#">{{ data.category.name }}</a>
                        </div>
                        <div class="meta-date">
                          <span>{{ data.category.create_At }}</span>
                        </div>
                      </div>
                      <div class="share-link">
                        <ul>
                          <li>
                            <a href="#"><i class="fal fa-bookmark"></i></a>
                          </li>
                          <li>
                            <a href="#"><i class="fas fa-share"></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        data.title
                      }}</router-link>
                    </h3>
                    <p>
                      {{ data.article }}
                    </p>
                    <a href="#">LEARN MORE</a>
                  </div>
                </div>
              </template>
            </div>
          </div>
          <div class="ad text-center mt-40">
            <a href="#"><img src="@/assets/images/ads/one_ad.png" alt="" /></a>
          </div>
          <div class="science-news-area mt-30">
            <div class="section-title section-title-3">
              <h3 class="title">Science News</h3>
            </div>
            <div class="science-slide">
              <slider ref="sciencePost" :settings="sciencePostSliderSettings">
                <div class="px-3">
                  <div
                    :key="index"
                    v-for="(data, index) in scienceNews.slice(0, 2)"
                    class="science-news-item"
                  >
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        data.title
                      }}</router-link>
                    </h3>
                    <div class="post-text-thumb">
                      <div class="thumb">
                        <img
                          :src="require(`@/assets/images/${data.image}`)"
                          alt="science"
                        />
                      </div>
                      <div class="text">
                        <p>
                          {{ data.article }}
                        </p>
                      </div>
                    </div>
                    <div class="post-user">
                      <a href="#"><i class="fal fa-bookmark"></i></a>
                      <span>By <span>Subash Chandra</span></span>
                      <p>March 26, 2020</p>
                    </div>
                  </div>
                </div>
                <div lass="px-3">
                  <div
                    :key="index"
                    v-for="(data, index) in scienceNews.slice(2, 4)"
                    class="science-news-item"
                  >
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        data.title
                      }}</router-link>
                    </h3>
                    <div class="post-text-thumb">
                      <div class="thumb">
                        <img
                          :src="require(`@/assets/images/${data.image}`)"
                          alt="science"
                        />
                      </div>
                      <div class="text">
                        <p>
                          {{ data.article }}
                        </p>
                      </div>
                    </div>
                    <div class="post-user">
                      <a href="#"><i class="fal fa-bookmark"></i></a>
                      <span>By <span>Subash Chandra</span></span>
                      <p>March 26, 2020</p>
                    </div>
                  </div>
                </div>
                <div class="px-3">
                  <div
                    :key="index"
                    v-for="(data, index) in scienceNews.slice(0, 2)"
                    class="science-news-item"
                  >
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        data.title
                      }}</router-link>
                    </h3>
                    <div class="post-text-thumb">
                      <div class="thumb">
                        <img
                          :src="require(`@/assets/images/${data.image}`)"
                          alt="science"
                        />
                      </div>
                      <div class="text">
                        <p>
                          {{ data.article }}
                        </p>
                      </div>
                    </div>
                    <div class="post-user">
                      <a href="#"><i class="fal fa-bookmark"></i></a>
                      <span>By <span>Subash Chandra</span></span>
                      <p>March 26, 2020</p>
                    </div>
                  </div>
                </div>
              </slider>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="sports-post-3-area mt-40">
                <div class="section-title section-title-3">
                  <h3 class="title">Sports</h3>
                </div>

                <div class="finance-item finance-item-3">
                  <div class="finance-thumb">
                    <img
                      src="@/assets/images/finance/finance-1.jpg"
                      alt="finance"
                    />
                  </div>
                  <div class="finance-content">
                    <h3 class="title">
                      <a href="#"
                        >Japan’s virus success puzzled the world luck running
                        out?</a
                      >
                    </h3>
                    <p>
                      The property, complete with seates screening from room
                      amphitheater pond with sandy
                    </p>
                    <ul>
                      <li>
                        <a href="#"><i class="far fa-eye"></i> 53,346</a>
                      </li>
                      <li>
                        <a href="#"><i class="far fa-heart"></i> 53,346</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="post_gallery_items">
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/1.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/2.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/3.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/4.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/5.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/5.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="post-gallery-style-2">
                    <div class="post-gallery-thumb">
                      <img
                        src="@/assets/images/gallery-post/5.png"
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <a href="#"
                          >The city with highest quality of life in world.</a
                        >
                      </h5>
                      <ul>
                        <li>
                          <a href="#"><i class="far fa-eye"></i> 53,346</a>
                        </li>
                        <li>
                          <a href="#"><i class="far fa-heart"></i> 53,346</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="sports-btn mt-25">
                  <a class="main-btn main-btn-2" href="#">See More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="trending-image-post mt-40">
                <img src="@/assets/images/trending-image-thumb.jpg" alt="" />
                <div class="trending-image-content">
                  <div class="post-meta">
                    <div class="meta-categories">
                      <a href="#">TECHNOLOGY</a>
                    </div>
                    <div class="meta-date">
                      <span>March 26, 2020</span>
                    </div>
                  </div>
                  <h3 class="title">
                    <a href="#"
                      >Japans virus success has from puzzled the running out?</a
                    >
                  </h3>
                </div>
              </div>
              <div class="counter-post-tab">
                <div class="post-tab-btn">
                  <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link active"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        >Food</a
                      >
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        >Business</a
                      >
                    </li>
                    <li class="nav-item" role="presentation">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                        >Politics</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    <div class="counter-post-main-item">
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>1</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>2</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>3</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>4</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>5</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>6</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div class="counter-post-main-item">
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>1</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>2</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>3</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>4</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>5</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>6</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                  >
                    <div class="counter-post-main-item">
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>1</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>2</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>3</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>4</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>5</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="counter-post-content">
                        <h5 class="title">
                          <a href="#"
                            >Cheers, darling. Virtual cheer. How to throw a
                            virtual cock tail party</a
                          >
                        </h5>
                        <div class="meta-date-share">
                          <div class="counter-number">
                            <span>6</span>
                          </div>
                          <div class="meta-date">
                            <span>March 26, 2020</span>
                          </div>
                          <div class="meta-share">
                            <ul>
                              <li>
                                <a href="#"><i class="fal fa-bookmark"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fas fa-share"></i></a>
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
        </div>
        <div class="col-lg-4">
          <div class="all-post-sidebar-3">
            <div class="post-contact">
              <div class="section-title section-title-3">
                <h3 class="title">Connect us</h3>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <i class="fab fa-facebook-f"></i>
                    <span>34,456</span>
                    <p>Fans</p>
                  </a>
                </li>
                <li>
                  <a class="item-2" href="#">
                    <i class="fab fa-twitter"></i>
                    <span>34,456</span>
                    <p>Followers</p>
                  </a>
                </li>
                <li>
                  <a class="item-3" href="#">
                    <i class="fab fa-youtube"></i>
                    <span>34,456</span>
                    <p>Subscribers</p>
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a class="item-4" href="#">
                    <i class="fab fa-instagram"></i>
                    <span>34,456</span>
                    <p>Followers</p>
                  </a>
                </li>
                <li>
                  <a class="item-5" href="#">
                    <i class="fab fa-vimeo-v"></i>
                    <span>34,456</span>
                    <p>Followers</p>
                  </a>
                </li>
                <li>
                  <a class="item-6" href="#">
                    <i class="fab fa-maxcdn"></i>
                    <span>34,456</span>
                    <p>Fans</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="opinion-post mt-40">
              <div class="section-title section-title-3">
                <h3 class="title">Opinion News</h3>
              </div>
              <div
                v-for="(data, index) in opinionPost"
                :key="index"
                class="trending-news-item mb-30"
              >
                <div class="trending-news-thumb">
                  <img
                    :src="require(`@/assets/images/opinion/` + data.image)"
                    alt="trending"
                  />
                  <div class="circle-bar">
                    <div class="first circle">
                      <strong></strong>
                    </div>
                  </div>
                </div>
                <div class="trending-news-content">
                  <div class="post-meta">
                    <div class="meta-categories">
                      <a href="#">{{ data.category.name }}</a>
                    </div>
                    <div class="meta-date">
                      <span>{{ data.category.create_At }}</span>
                    </div>
                  </div>
                  <h3 class="title">
                    <router-link to="/posts/postOne">{{
                      data.title
                    }}</router-link>
                  </h3>
                  <p class="text">
                    {{ data.article }}
                  </p>
                  <ul>
                    <li>
                      <a href="#"><i class="far fa-eye"></i> 53,346</a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-heart"></i> 53,346</a>
                    </li>
                    <li>
                      <a href="#"><i class="fas fa-share"></i> 53,346</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="post-newsletter post-newsletter-3-style mt-40">
              <h3 class="title">Newsletter</h3>
              <p>
                Your email address will not be this published. Required fields
                are News Today.
              </p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Your email address" />
                  <button type="button">SIGN UP</button>
                </div>
              </form>
              <span>We hate spam as much as you do</span>
            </div>
            <div class="categories-list mt-40">
              <div class="section-title section-title-3">
                <h3 class="title">Categories</h3>
              </div>
              <div class="categories-list-item">
                <ul>
                  <li>
                    <a href="#">Restaurant <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">Entertainment <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">Financial <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">Business <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">Scientists <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">International’s <i class="fas fa-play"></i></a>
                  </li>
                  <li>
                    <a href="#">International’s <i class="fas fa-play"></i></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="ad mt-40">
              <a href="#">
                <img src="@/assets/images/ads/three_ad.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Slider from "../Helpers/Slider.vue";
export default {
  components: { Slider },
  props: {
    internationalPost: {
      type: Array,
    },
    opinionPost: {
      type: Array,
    },
    scienceNews: {
      type: Array,
    },
  },
  data: () => ({
    sciencePostSliderSettings: {
      autoplay: true,
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
};
</script>

<style></style>
