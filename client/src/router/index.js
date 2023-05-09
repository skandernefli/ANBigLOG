import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Dark from '../views/Dark'
import HomeTwo from '../views/HomeTwo'
import HomeThree from '../views/HomeThree'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'
import Archive from '../views/Archive.vue'
import fourOfour from '../components/404.vue'
import PostOne from '../components/Posts/PostOne/index.vue'
import PostTwo from '../components/Posts/PostTwo/index.vue'
import PostThree from '../components/Posts/PostThree/index'
import Business from '../components/category/Buisness.vue'
import Entertainment from '../components/category/Entertainment.vue'
import Features from '../components/category/Feature.vue'
import Sports from '../components/category/Sports.vue'
import Trending from '../components/category/Trending.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dark',
    name: 'Dark',
    component: Dark
  },
  {
    path: '/home-two',
    name: 'HomeTwo',
    component: HomeTwo
  },
  {
    path: '/home-three',
    name: 'HomeThree',
    component: HomeThree
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
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/404',
    name: '404',
    component: fourOfour
  },
  {
    path: '/posts/postOne',
    name: 'PostOne',
    component: PostOne
  },
  {
    path: '/posts/posttwo',
    name: 'PostTwo',
    component: PostTwo
  },
  {
    path: '/posts/postthree',
    name: 'PostThree',
    component: PostThree
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: Entertainment
  },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
