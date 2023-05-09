<template>
  <div>
    <drawer @toggleSidebar="toggleSidebar" :sidebar="sidebar" />

    <Header @toggleSidebar="toggleSidebar" />
    <!--====== POST LAYOUT 1 PART START ======-->
    <section class="post-layout-1-area post-layout-3-area pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
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
          </div>
          <div class="col-lg-8">
            <div class="post-layout-top-content post-layout-top-content-3">
              <div
                class="
                  post-categories
                  d-flex
                  justify-content-between
                  align-content-center
                "
              >
                <div class="categories-share">
                  <ul>
                    <li><i class="fas fa-comment"></i>45020</li>
                    <li><i class="fas fa-fire"></i>45020</li>
                    <li>6 minutes read</li>
                  </ul>
                </div>
              </div>
              <div class="post-content">
                <h3 class="title">
                  Digital Asset help compan design create and run the next
                  generation of business applications.
                </h3>
                <div class="post-author">
                  <div class="author-info">
                    <div class="thumb">
                      <img src="@/assets/images/author1.png" alt="" />
                    </div>
                    <h5 class="title">Rafiqul islam</h5>
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
                <div class="thumb">
                  <img src="@/assets/images/post-layout.png" alt="" />
                </div>
              </div>
              <div class="post-text mt-30">
                <p>
                  Entilators will be taken from certain New York hospitals and
                  redistributed to the worst-hit parts of the state under an
                  order to be signed by Governor Andrew Cuomo.
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
                <h3 class="title">What’s the debate over masks?</h3>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="text">
                      <p>
                        Masks may also help lower the risk of individuals
                        catching the virus through the droplets another person’s
                        sneeze or a cough - and people can be taught how put
                        masks on and take them off correctly they argue.
                      </p>
                      <p>
                        On Thursday New York mayor Bill de Blasio urged all New
                        Yorkers to cover their faces when outside and near
                        others, but not to use surgical masks, which are in
                        short supply.
                      </p>
                      <p>
                        Meanwhile, residents in Laredo, Texas will know is face
                        a $1,000 (£816) fine if they fail to cover their noses
                        and mouths while outside, after officials issued an
                        emergency ordinance to approximately 250,000 residents
                        this weekend. However, more and more health experts now
                        say they’re benefits. They argue that the public use of
                        masks can primarily help by preventing.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="text">
                      <img src="@/assets/images/post-thumb-7.png" alt="" />
                      <p class="mt-20">
                        Masks may also help lower the risk of individuals
                        catching the virus through the droplets another person’s
                        sneeze or a cough - and people can be taught how put
                        masks on and take them off correctly they argue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="post-text">
                <div class="play-thumb mt-10 mb-35">
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
                <h3 class="title">Which states are not in lockdown?</h3>
                <ul>
                  <li><a href="#">Should more of us wear face masks?</a></li>
                  <li>
                    <a href="#"
                      ><u
                        >Why some countries wear face masks and others don’t</u
                      ></a
                    >
                  </li>
                  <li>
                    <a href="#">Coronavirus: Are homemade face masks safe?</a>
                  </li>
                </ul>
                <p>
                  The comments from Dr Fauci, who heads the National Institute
                  of Allergy and Infectious Diseases, appeared to contradict
                  those of President Trump, who has consistently dismissed the
                  notion of a nationwide lockdown.
                </p>
                <p>
                  “It’s awfully tough to say, ‘close it down.’ We have to have a
                  little bit of flexibility,” Mr Trump said on Wednesday.
                </p>
              </div>
              <div class="post-quote post-quote-3-style text-center">
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
                    <img src="@/assets/images/author1.png" alt="" />
                    <h5 class="title">Rafiqul islam</h5>
                    <span>Frontend Developer</span>
                  </div>
                </div>
              </div>
              <div class="post-text mt-35">
                <p>
                  Both the US Centers for Disease Control (CDC) and the World
                  Health Organization are reassessing their guidance on face
                  masks, as experts race to find ways to fight the highly
                  contagious virus.
                </p>
                <p>
                  Covid-19 is carried in airborne droplets from people coughing
                  or sneezing, but there is some dispute over how far people
                  should distance themselves from each other, and whether masks
                  are useful when used by the public.
                </p>
                <div class="thumb pt-10 pb-35">
                  <img src="@/assets/images/post-thumb-4.png" alt="" />
                </div>
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
                  to them in Korean, and tell them we need their help.
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
            </div>
            <div
              class="
                post-reader-text post-reader-text-2 post-reader-text-3
                pt-50
              "
            >
              <div class="row">
                <div class="col-md-6">
                  <div class="post-reader-prev">
                    <span
                      >PREVIOUS NEWS <i class="fal fa-angle-right"></i
                    ></span>
                    <h4 class="title">
                      <a href="#"
                        >Kushner puts himself in middle of white house’s chaotic
                        coronavirus response.</a
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
          <div class="col-lg-4">
            <style-one :datas="posts" />
          </div>
        </div>
      </div>
    </section>

    <!--====== POST LAYOUT 1 PART ENDS ======-->

    <!--====== LATEST NEWS PART START ======-->
    <our-latest-news :Posts="posts" />

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
    <Footer />
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
import StyleOne from "../../Utility/Sidebar/StyleOne.vue";
import Posts from "../../Data/NewsRowCard";
import OurLatestNews from "../../Utility/Common/OurLatestNews.vue";
import Footer from "../../Utility/Footer/FooterOne";
import Drawer from "../../Mobile/Drawer.vue";
export default {
  components: { Header, StyleOne, OurLatestNews, Footer, Drawer },
  data: () => ({
    posts: Posts.data,
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
