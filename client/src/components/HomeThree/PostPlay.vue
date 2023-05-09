<template>
  <section class="post-play-area mt-100">
    <div class="container custom-container">
      <div class="row no-gutters">
        <div class="col-lg-8">
          <div class="post-play-item">
            <img :src="require(`@/assets/images/${datas[0].image}`)" alt="" />
            <div class="post-play-content">
              <h3 class="title">
                <router-link to="/posts/postOne">{{
                  datas[0].title
                }}</router-link>
              </h3>
              <div class="play-meta">
                <a @click.prevent="$store.dispatch('toggleVideo')"
                  ><i class="fas fa-play"></i
                ></a>
                <h5 class="title">{{ datas[0].category.name }}</h5>
                <span>{{ datas[0].category.create_At }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="post-play-list">
            <template v-for="(data, index) in datas.slice(0, 5)">
              <div :key="index" class="post-play-list-item">
                <div class="play-meta">
                  <a @click.prevent="$store.dispatch('toggleVideo')"
                    ><i class="fas fa-play"></i
                  ></a>
                  <h5 class="title">{{ data.category.name }}</h5>
                  <span>{{ data.category.create_At }}</span>
                </div>
                <h5 class="title">
                  <router-link to="/posts/postOne">{{
                    data.title
                  }}</router-link>
                </h5>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
    },
  },
};
</script>

<style></style>
