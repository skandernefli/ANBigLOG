<template>
  <div>
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />
    <Header @toggleSidebar="toggleSidebar" />
    <!--====== POST LAYOUT 1 PART START ======-->

    <section class="post-layout-1-area post-layout-2-area pb-80">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="about-author-content">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item"><a href="#">Worldnews</a></li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Health
                  </li>
                </ol>
              </nav>
            </div>
            <div class="post-layout-top-content post-layout-top-content-2">
              <div class="thumb">
                <img src="@/assets/images/post-thumb-5.png" alt="" />
              </div>
              <div class="post-author">
                <div class="author-info">
                  <div class="thumb">
                    <img src="@/assets/images/author1.png" alt="" />
                  </div>
                  <h5 class="title">Rafiqul Islam</h5>
                  <ul>
                    <li>March 26, 2020</li>
                    <li>Updated 1:58 p.m. ET</li>
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
              <div class="post-content">
                <h3 class="title">
                  Japan’s virus success has puzzled the world. Is its luck
                  running out?
                </h3>
              </div>
              <div
                class="
                  post-categories
                  d-flex
                  justify-content-start
                  align-content-center
                "
              >
                <div class="categories-item">
                  <span>HEALTH</span>
                </div>
                <div class="categories-share">
                  <ul>
                    <li><i class="fas fa-comment"></i>45020</li>
                    <li><i class="fas fa-fire"></i>45020</li>
                  </ul>
                </div>
              </div>
              <div class="post-text mt-30">
                <p>
                  Ventilators will be taken from certain New York hospitals and
                  redistributed to the worst-hit parts of state under an order
                  to be signed by Governor Andrew Cuomo.
                </p>
                <p>
                  New York saw its highest single-day increase in deaths, up by
                  562 to 2,935 - nearly half of all virus-related US deaths
                  recorded yesterday. The White House may advise those in virus
                  hotspots to wear face coverings in public to help stem the
                  spread.
                </p>
                <p>The US now has 245,658 Covid-19 cases.</p>
                <p>
                  A shortage of several hundred ventilators in New York City,
                  the epicentre of the outbreak in the US, prompted Mr Cuomo to
                  say that he will order the machines be taken from various
                  parts of the state and give them to harder-hit areas.
                </p>
                <p>
                  Amid a deepening crisis, top health official
                  <span class="user">Dr Anthony Fauci</span> has said he
                  believes all states should issue stay-at-home orders.
                </p>
                <p>
                  “I don’t understand why that’s not happening,” Dr Fauci told
                  CNN on Thursday. “If you look at what’s going on in this
                  country, I just don’t understand why we’re not doing that.”
                </p>
                <p>
                  “You’ve got to put your foot on the accelerator to bring that
                  number down,” he added, referring to infection and death
                  rates.
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="post-text pt-20">
                    <h5 class="title">What’s the debate over masks?</h5>
                    <p>
                      Masks may also help lower the risk of individuals catching
                      the virus through the droplets another person’s sneeze or
                      a cough - and people can be taught how put masks on and
                      take them off correctly they argue.
                    </p>
                    <p>
                      On Thursday New York mayor Bill de Blasio urged all New
                      Yorkers to cover their faces when outside and near others,
                      but not to use surgical masks, which are in short supply.
                    </p>
                    <p>
                      Meanwhile, residents in Laredo, Texas will know is face a
                      $1,000 (£816) fine if they fail to cover their noses and
                      mouths while outside, after officials issued an emergency
                      ordinance to approximately 250,000 residents this weekend.
                      However, more and more health experts now say they’re
                      benefits. They argue that the public use of masks can
                      primarily help by preventing.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <style-one
                    :datas="Posts.slice(1, 6)"
                    :signup="false"
                    :trendingBigPost="false"
                    :trendingShortPost="false"
                    :ad="false"
                    :sharePost="false"
                  />
                </div>
              </div>
              <div class="post-text pt-20">
                <p>
                  Masks may also help lower the risk of individuals catching the
                  virus through the droplets from another person’s sneeze or a
                  cough - and people can be taught how put masks on and take
                  them off correctly, they argue.
                </p>
                <p>
                  On Thursday New York mayor Bill de Blasio urged all New
                  Yorkers to cover their faces when outside and near others, but
                  not to use surgical masks, which are in short supply.
                </p>
                <p>
                  “It could be a scarf. It could be something you create
                  yourself at home. It could be a bandana,” he said. Governor
                  Cuomo weighed in on Friday, saying
                  <span class="quote-text"
                    >“i think it’s fair to say that the masks couldn’t hurt
                    unless they gave you a false sense of security.”</span
                  >
                </p>
                <p>
                  Meanwhile, residents in Laredo, Texas will now face a $1,000
                  (£816) fine if they fail to cover their noses and mouths while
                  outside, after city officials issued an emergency ordinance to
                  its approximately 250,000 residents this week.
                </p>
              </div>
              <div class="post-text">
                <div class="row pt-10">
                  <div class="col-lg-6">
                    <div class="post-thumb">
                      <img src="@/assets/images/post-thumb-6.png" alt="" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="text">
                      <p>
                        The WHO advises that ordinary face masks are only
                        effective if combined with careful hand-washing and
                        social-distancing, and so far it does not recommend them
                        generally for healthy people.
                      </p>
                      <p>
                        However, more and more health experts now say there are
                        benefits. They argue that the public use of masks can
                        primarily help by preventing asymptomatic patients -
                        people who have been infected with Covid-19 but are not
                        aware, and not displaying any symptoms - from
                        unknowingly spreading the virus to others.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post-text pt-20">
                <h5 class="title">Which states are not in lockdown?</h5>
                <p>
                  Both the US Centers for Disease Control (CDC) and the World
                  Health Organization (WHO) are reassessing their guidance on
                  face masks, as experts race to find ways to fight the highly
                  contagious virus.
                </p>
                <p>
                  Covid-19 is carried in airborne droplets from people coughing
                  or sneezing, but there is some dispute over how far people
                  should distance themselves from each other, and whether masks
                  are useful when used by the public.
                </p>
                <div class="play-thumb mt-20 mb-35">
                  <img src="@/assets/images/post-play-thumb.jpg" alt="" />
                  <span
                    >I just had a baby - now I’m going to the frontline.</span
                  >
                  <a
                    class="video-popup"
                    href="https://www.youtube.com/watch?v=JIY8wk4KBhI"
                    ><i class="fas fa-play"></i
                  ></a>
                </div>
                <p>
                  Masks may also help lower the risk of individuals catching the
                  virus through the droplets from another person’s sneeze or a
                  cough - and people can be taught how put masks on and take
                  them off correctly, they argue.
                </p>
                <p>
                  On Thursday New York mayor Bill de Blasio urged all New
                  Yorkers to cover their faces when outside and near others, but
                  not to use surgical masks, which are in short supply.
                </p>
                <p>
                  Meanwhile, residents in Laredo, Texas will now face a $1,000
                  (£816) fine if they fail to cover their noses and mouths while
                  outside, after city officials issued an emergency ordinance to
                  its approximately 250,000 residents this week.
                </p>
              </div>
              <div
                class="
                  post-quote post-quote-2-style
                  d-block d-md-flex
                  align-items-center
                "
              >
                <div class="post-quote-content">
                  <p>
                    I must explain to you how all this mistake idea denouncing
                    pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure because it is pleasure.
                  </p>
                  <div class="user">
                    <img src="@/assets/images/author.png" alt="" />
                    <h5 class="title">Rafiqul islam</h5>
                    <span>Founder at Seative Digital</span>
                  </div>
                </div>
              </div>
              <div class="post-text mt-35">
                <p>
                  The next day I came back to my team and said, This is what I
                  just heard, we have to get ready, he said. We knew that it
                  wasn’t going to be long before we were going to have to deal
                  with it.
                </p>
                <p>
                  Mr. Hogan has also leaned on his wife, Yumi Hogan, a Korean
                  immigrant, who was also at the governor’s convention, which
                  included a dinner at the Korean ambassador’s home. As the
                  first Korean first lady in American history, Ms. Hogan has
                  become something of an icon in South Korea. I just grabbed my
                  wife and said, Look, you speak Korean. You know the president.
                  You know the first lady. You know the ambassador. Let’s talk
                  to them in Korean, and tell them we need their help. Companies
                  in South Korea said would tests.
                </p>
                <div class="add pt-10 pb-35">
                  <a href="#"
                    ><img src="@/assets/images/ad/ad-1.png" alt=""
                  /></a>
                </div>
                <p>
                  In global terms the US has the most Covid-19 cases - more than
                  245,000. And on Thursday the US authorities said more than
                  1,000 had died in the past 24 hours - the highest daily toll
                  so far in the world.
                </p>
                <p>
                  Hospitals and morgues in New York are struggling to cope with
                  the pandemic, and New York Governor Andrew Cuomo has warned
                  that New York risks running out of ventilators for patients in
                  six days.
                </p>
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
              <div class="post-reader-text post-reader-text-2 pt-50">
                <div class="row">
                  <div class="col-md-6">
                    <div class="post-reader-prev">
                      <span
                        >PREVIOUS NEWS <i class="fal fa-angle-right"></i
                      ></span>
                      <h4 class="title">
                        <a href="#"
                          >Kushner puts himself in middle of white house’s
                          chaotic coronavirus response.</a
                        >
                      </h4>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="post-reader-prev">
                      <span>NEXT NEWS <i class="fal fa-angle-right"></i></span>
                      <h4 class="title">
                        <a href="#"
                          >C.I.A. Hunts for authentic virus totals in china,
                          dismissing government tallies</a
                        >
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== POST LAYOUT 1 PART ENDS ======-->

    <!--====== LATEST NEWS PART START ======-->

    <our-latest-news :Posts="Posts" />

    <!--====== LATEST NEWS PART ENDS ======-->

    <!--====== POST FORM PART START ======-->

    <div class="post-form-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title">
              <h3 class="title">Leave an opinion</h3>
            </div>
            <div class="post-form-box">
              <form action="#">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-box">
                      <input type="text" placeholder="Full name" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="input-box">
                      <input type="text" placeholder="Email address" />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="input-box">
                      <textarea
                        name="#"
                        id="#"
                        cols="30"
                        rows="10"
                        placeholder="Tell us about your opinion…"
                      ></textarea>
                      <button class="main-btn" type="button">
                        POST OPINION
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--====== POST FORM PART ENDS ======-->

    <!--====== POST COMMENTS PART START ======-->

    <section class="post-comments-area pb-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="section-title">
              <h3 class="title">Post Comments</h3>
            </div>
            <div class="post-comments-list">
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-1.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-2.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item ml-30">
                <div class="thumb">
                  <img src="@/assets/images/comments-3.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
              <div class="post-comments-item">
                <div class="thumb">
                  <img src="@/assets/images/comments-4.png" alt="comments" />
                </div>
                <div class="post">
                  <a href="#">Reply</a>
                  <h5 class="title">Rafiqul islam</h5>
                  <p>
                    We’ve invested every aspect of how we serve our users over
                    the past Pellentesque rutrum ante in nulla suscipit, vel
                    posuere leo tristique.
                  </p>
                </div>
              </div>
            </div>
            <div class="post-load-btn">
              <a class="main-btn" href="#">LOAD MORE</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--====== POST COMMENTS PART ENDS ======-->

    <!--====== ADD PART ENDS ======-->

    <div class="add-area text-center">
      <a href="#">
        <img src="@/assets/images/ads/one_ad.png" alt="" />
      </a>
    </div>

    <!--====== ADD PART ENDS ======-->

    <footer-one />
    <!--====== GO TO TOP PART START ======-->
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
    <!--====== GO TO TOP PART ENDS ======-->
  </div>
</template>

<script>
import Header from "../../Utility/Header/index";
import Posts from "../../Data/TrendingHomeThree";
import FooterOne from "../../Utility/Footer/FooterOne.vue";
import StyleOne from "../../Utility/Sidebar/StyleOne.vue";
import OurLatestNews from "../../Utility/Common/OurLatestNews.vue";
import Drawer from "../../Mobile/Drawer.vue";
export default {
  components: { Header, FooterOne, StyleOne, OurLatestNews, Drawer },
  data: () => ({
    Posts: Posts.data,
    sidebar: false,
  }),
  created() {
    document.addEventListener("scroll", this.topToBottom);
  },
  methods: {
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
  },
};
</script>

<style></style>
