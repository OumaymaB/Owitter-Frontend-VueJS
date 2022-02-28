import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/post',
        name: 'Post',
        component: Post
      },
      {
        path: '/home/profile',
        name: 'Profile',
        component : () => import('../views/Profile.vue')
      },
      {
        path: '/home/followers',
        name: 'Followers',
        component : () => import('../views/Followers.vue')
      }

    ]
  },
  {
    path: '/register',
    name : 'Register',
    component : () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component : Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
