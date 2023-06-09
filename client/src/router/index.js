import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import fourOfour from '../components/404.vue'
import PostOne from '../components/Posts/PostOne/index.vue'
import StillHOT from '../components/Posts/StillHot/index.vue'
import Features from '../components/category/Feature.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Buzz',
    name: 'Buzz',
    component: StillHOT
  },
 {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
 
  {
    path: '/404',
    name: '404',
    component: fourOfour
  },
  {
    path: '/posts/post/:postId',
    name: 'PostOne',
    component: PostOne,
    props: true
}, {
  path: '/Categories/latest/PostsInCategory/:categorie_name',
  name: 'PostsInCategory',
  component: Features,
  props: true
}, {
    path: '/404',
    name: '404',
    component: fourOfour
  },  {
    path: '*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to,  ) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { x: 0, y: 0 }
    }
  }

})

export default router
