<template>
  <section class="post-footer-style-2-area pb-100">
    <div class="container custom-container">
      <div class="row">
        <div class="col-lg-8">
          <div class="mt-40">
            <a href="#"><img src="@/assets/images/ads/one_ad.png" alt="" /></a>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <signup-style-one />
              <div class="post-sports-box mt-40">
                <div class="section-title">
                  <h3 class="title">Sports</h3>
                </div>
                <div class="post-sports-item">
                  <div class="post-sports-thumb">
                    <img
                      :src="require(`@/assets/images/${sports[0].image}`)"
                      alt=""
                    />
                  </div>
                  <div class="post-sports-content">
                    <h3 class="title">
                      <router-link to="/posts/postOne">{{
                        sports[0].title
                      }}</router-link>
                    </h3>
                    <p>
                      {{ sports[0].article }}
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
                  <div
                    v-for="(data, index) in sports.slice(1, 6)"
                    :key="index"
                    class="post-gallery-style-2"
                  >
                    <div class="post-gallery-thumb">
                      <img
                        :src="
                          require(`@/assets/images/gallery-post/${data.image}`)
                        "
                        alt="gallery"
                      />
                    </div>
                    <div class="post-gallery-content">
                      <h5 class="title">
                        <router-link to="/posts/postOne">{{
                          data.title
                        }}</router-link>
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
                <div class="post-btn pt-20">
                  <a class="main-btn main-btn-2" href="#">See More</a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="finance-box mt-40">
                <div class="section-title">
                  <h3 class="title">Most View</h3>
                </div>
                <div class="finance-items">
                  <template v-for="(data, index) in otherfinance.slice(0, 3)">
                    <divide-card
                      stype="col-style-2"
                      :key="index"
                      :datas="data"
                    />
                  </template>
                </div>
                <div class="finance-btn text-center mt-10">
                  <a class="main-btn main-btn-2" href="#">See more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-footer-sidebar">
            <div class="post-contact mt-40">
              <div class="section-title">
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
          </div>
          <div class="post-international mt-40">
            <div class="section-title">
              <h3 class="title">International news</h3>
            </div>
            <div class="international-post-items">
              <div class="international-item">
                <div class="meta-category">
                  <span>TECHNOLOGY</span>
                </div>
                <h5 class="title">
                  <router-link to="/posts/postOne"
                    >Why clinician spiritual health matters in the covid-19
                    crisis: you can’t pour from an empty cup…</router-link
                  >
                </h5>
                <div class="meta-user">
                  <span><i class="fal fa-user-circle"></i> Subash Chandra</span>
                </div>
                <div class="text-thumb d-flex align-items-center">
                  <p>
                    The property, complete with seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy shower…
                  </p>
                  <div class="thumb">
                    <img
                      src="@/assets/images/international-post-thumb.jpg"
                      alt=""
                    />
                  </div>
                </div>
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
              <div class="international-item">
                <div class="meta-category">
                  <span>TECHNOLOGY</span>
                </div>
                <h5 class="title">
                  <router-link to="/posts/postOne"
                    >Why clinician spiritual health matters in the covid-19
                    crisis: you can’t pour from an empty cup…</router-link
                  >
                </h5>
                <div class="meta-user">
                  <span><i class="fal fa-user-circle"></i> Subash Chandra</span>
                </div>
                <div class="text-thumb d-flex align-items-center">
                  <p>
                    The property, complete with seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy shower…
                  </p>
                  <div class="thumb">
                    <img
                      src="@/assets/images/international-post-thumb.jpg"
                      alt=""
                    />
                  </div>
                </div>
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
              <div class="international-item">
                <div class="meta-category">
                  <span>TECHNOLOGY</span>
                </div>
                <h5 class="title">
                  <router-link to="/posts/postOne"
                    >Why clinician spiritual health matters in the covid-19
                    crisis: you can’t pour from an empty cup…</router-link
                  >
                </h5>
                <div class="meta-user">
                  <span><i class="fal fa-user-circle"></i> Subash Chandra</span>
                </div>
                <div class="text-thumb d-flex align-items-center">
                  <p>
                    The property, complete with seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy shower…
                  </p>
                  <div class="thumb">
                    <img
                      src="@/assets/images/international-post-thumb.jpg"
                      alt=""
                    />
                  </div>
                </div>
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
              <div class="international-item">
                <div class="meta-category">
                  <span>TECHNOLOGY</span>
                </div>
                <h5 class="title">
                  <router-link to="/posts/postOne"
                    >Why clinician spiritual health matters in the covid-19
                    crisis: you can’t pour from an empty cup…</router-link
                  >
                </h5>
                <div class="meta-user">
                  <span><i class="fal fa-user-circle"></i> Subash Chandra</span>
                </div>
                <div class="text-thumb d-flex align-items-center">
                  <p>
                    The property, complete with seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy shower…
                  </p>
                  <div class="thumb">
                    <img
                      src="@/assets/images/international-post-thumb.jpg"
                      alt=""
                    />
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DivideCard from "../Utility/Cards/DivideCard.vue";
import SignupStyleOne from "../Utility/Signup/SignupStyleOne.vue";
export default {
  components: { DivideCard, SignupStyleOne },
  props: {
    sports: {
      type: Array,
    },
    otherfinance: {
      type: Array,
    },
  },
};
</script>

<style></style>
