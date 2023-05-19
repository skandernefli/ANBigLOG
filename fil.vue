<template>
<template v-if="Posts.content.length!==0" v-for="(data, index) in Posts.content">
    
    
    <div v-if="index===0" :key="index">
        <div v-if="data.type==='backlink'" class="post-text mt-30">
                 <div v-if="JSON.parse(Posts.content[index + 1].value).position === 'start'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> 
                        </p>
                        {{ skip_1(index) }}

                </div>
         
    </div>
        <div v-if="data.type==='text'" class="post-text mt-30">
            <div v-if="Posts.content[index + 1].type === 'backlink'">
                 <div v-if="JSON.parse(Posts.content[index + 1].value).position === 'end'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> 
                        </p>

                </div>
                <div v-else-if="JSON.parse(Posts.content[index + 1].value).position === 'middle'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> {{ Posts.content[index + 2] }}
                        </p>
                        {{ skip_2(index) }}
                </div>
                <div v-else-if="JSON.parse(Posts.content[index + 1].value).position === 'between'">
                        <p>
                            {{ data.value }}
                        </p>
                        <p>
                         :)<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a>
                        </p>
                        <p>
                            {{ Posts.content[index + 2] }}
                        </p>
                        {{ skip_2(index) }}
                </div>
            </div>
            <div v-else >
            <p>
                {{ data.value }}
            </p>
            </div>
        </div>
        <div v-else-if="data.type==='points'"  class="post-text mt-30">
            <ul>
                  <li><a>{{ data.value }}</a></li>
            </ul>
        </div>  
        <div  v-else-if="data.type==='title'"  class="post-text pt-20">
                <h3 class="title">{{ data.value }}</h3>
        </div>
        <div  v-else-if="data.type==='subtitle'" class="post-text pt-20">
                <h5 class="title">{{ data.value }}</h5>
        </div>
        <div  v-else-if="data.type==='thumb'" class="row pt-10">
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
        <div  v-else-if="data.type==='quote'"  class="post-text pt-20">
               <p>
                  <span class="quote-text">{{ data.value }}</span>
                </p>
        </div>
        <div v-else-if="data.type==='image'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                  <span>{{ data.title }}</span>
                    <span>{{ data.desciption }}</span>
                </div>
        </div>
        <div v-else-if="data.type==='externalImage'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                </div>
        </div>
        <div v-else-if="data.type==='postquote'" class="post-quote d-block d-md-flex align-items-center">
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
        <div v-else-if="data.type==='video'" class="post_gallery_play">
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
        </div>
        <div v-else-if="data.type==='file' || data.type==='audio' || data.type==='externalAudio' ||data.type==='externalFile' ||data.type==='externalLink' " > 
            <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
        </div>
        <div v-if="data.type==='code'" class="post-text mt-30">
            <div v-html="data.value"></div>
        </div>
        
    </div>
    <div v-else-if="index===Posts.content.length-1" >
        <div v-if="index!==skip_1 || index!==skip_2">

        <div v-if="data.type==='text'" class="post-text mt-30">
           <p>
                {{ data.value }}
            </p>
  
        </div>
        <div v-else-if="data.type==='points'"  class="post-text mt-30">
            <ul>
                  <li><a>{{ data.value }}</a></li>
            </ul>
        </div>  
        <div  v-else-if="data.type==='title'"  class="post-text pt-20">
                <h3 class="title">{{ data.value }}</h3>
        </div>
        <div  v-else-if="data.type==='subtitle'" class="post-text pt-20">
                <h5 class="title">{{ data.value }}</h5>
        </div>
        <div  v-else-if="data.type==='thumb'" class="row pt-10">
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
        <div  v-else-if="data.type==='quote'"  class="post-text pt-20">
               <p>
                  <span class="quote-text">{{ data.value }}</span>
                </p>
        </div>
        <div v-else-if="data.type==='image'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                  <span>{{ data.title }}</span>
                    <span>{{ data.desciption }}</span>
                </div>
        </div>
        <div v-else-if="data.type==='externalImage'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                </div>
        </div>
        <div v-else-if="data.type==='postquote'" class="post-quote d-block d-md-flex align-items-center">
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
        <div v-else-if="data.type==='video'" class="post_gallery_play">
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
        </div>
        <div v-else-if="data.type==='file' || data.type==='audio' || data.type==='externalAudio' ||data.type==='externalFile' ||data.type==='externalLink' " > 
            <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
        </div>
        <div v-if="data.type==='code'" class="post-text mt-30">
            <div v-html="data.value"></div>
        </div>
        
    </div></div>
    <div v-else-if="index!==skip_1 || index!==skip_2 ">
        <div v-if="data.type==='backlink'" class="post-text mt-30">
                 <div v-if="JSON.parse(Posts.content[index + 1].value).position === 'start'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> 
                            {{ skip_1(index) }}
                        </p>

                </div>
         
    </div>

        <div v-if="data.type==='text'" class="post-text mt-30">
            <div v-if="Posts.content[index + 1].type === 'backlink'">
                 <div v-if="JSON.parse(Posts.content[index + 1].value).position === 'end'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> 
                        </p>

                </div>
                <div v-else-if="JSON.parse(Posts.content[index + 1].value).position === 'middle'">
                        <p>
                            {{ data.value }}<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a> {{ Posts.content[index + 2] }}
                        </p>
                        {{ skip_2(index) }}
                </div>
                <div v-else-if="JSON.parse(Posts.content[index + 1].value).position === 'between'">
                        <p>
                            {{ data.value }}
                        </p>
                        <p>
                         :)<a :href="JSON.parse(Posts.content[index + 1].value).backlinkLink"><u>{{
                            JSON.parse(Posts.content[index +1].value).textOfLink }}</u></a>
                        </p>
                        <p>
                            {{ Posts.content[index + 2] }}
                        </p>
                        {{ skip_2(index) }}
                </div>
            </div>
            <div v-else >
            <p>
                {{ data.value }}
            </p>
            </div>
        </div>
        <div v-else-if="data.type==='points'"  class="post-text mt-30">
            <ul>
                  <li><a>{{ data.value }}</a></li>
            </ul>
        </div>  
        <div  v-else-if="data.type==='title'"  class="post-text pt-20">
                <h3 class="title">{{ data.value }}</h3>
        </div>
        <div  v-else-if="data.type==='subtitle'" class="post-text pt-20">
                <h5 class="title">{{ data.value }}</h5>
        </div>
        <div  v-else-if="data.type==='thumb'" class="row pt-10">
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
        <div  v-else-if="data.type==='quote'"  class="post-text pt-20">
               <p>
                  <span class="quote-text">{{ data.value }}</span>
                </p>
        </div>
        <div v-else-if="data.type==='image'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                  <span>{{ data.title }}</span>
                    <span>{{ data.desciption }}</span>
                </div>
        </div>
        <div v-else-if="data.type==='externalImage'" class="post-text pt-20">
               <div class="thumb pt-20 pb-35">
                  <img :src="data.value" alt="" />
                </div>
        </div>
        <div v-else-if="data.type==='postquote'" class="post-quote d-block d-md-flex align-items-center">
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
        <div v-else-if="data.type==='video'" class="post_gallery_play">
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
        </div>
        <div v-else-if="data.type==='file' || data.type==='audio' || data.type==='externalAudio' ||data.type==='externalFile' ||data.type==='externalLink' " > 
            <button class="main-btn" :href="data.value" target="_blank">Click me! :)</button>
        </div>
        <div v-if="data.type==='code'" class="post-text mt-30">
            <div v-html="data.value"></div>
        </div>
        
   
   
   
    


    </div>
  </template>
</template>

<script>
import Header from "../../Utility/Header/index";
import StyleOne from "../../Utility/Sidebar/StyleOne.vue";
import FooterOne from "../../Utility/Footer/FooterOne.vue";
import OurLatestNews from "../../Utility/Common/OurLatestNews.vue";
import Drawer from "../../Mobile/Drawer.vue";

export default {
  props: {
    id: {
      type: String,
    }
  },
  components: { Header, StyleOne, FooterOne, OurLatestNews, Drawer },
  data: () => ({
    Posts: "Posts",
    headerimage: "headerimage",
    coverimage:"coverimage",
    skip_1:-1,
    skip_2:-1,
    sidebar: false,
  }),
  async created() {
    await this.fetchPosts();
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
        this.coverimage=this.coverToShow(this.Posts);
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
    skip_1(index){
            this.skip_1=index+1;
    },
    skip_2(index){
            this.skip_2=index+2;
    },    

  },
};
</script>