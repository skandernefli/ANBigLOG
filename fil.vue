

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
<div v-else-if="index !== skip_1 && index !== skip_2" class="post-text mt-30">
                    <p>
                    <div v-if="data.type ==='backlink'" >
                      <div v-if="JSON.parse(data.value).position === 'start'">
                   
                         <a :href="JSON.parse(data.value).backlinkLink"><u>{{JSON.parse(data.value).textOfLink }}</u></a> {{ content[index + 1].value }}
                          {{ assignSkip_1(index) }}
                          <div v-if="content[index + 1] ==='backlink'" >
                            <div v-if="JSON.parse(data.value).position !== 'end'" >

                            {{iprevious=index}}
                            {{inext=index+1}}
                            <div v-if="inext>iprevious">

                            </div>

                          </div>                          </div>

                        
                          
                          </div>
                        
                        
                          </div>

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
            iprevious=0;
            inext=0;