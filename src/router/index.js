import Vue from "vue";
import VueRouter from'vue-router'


// const Home = () => import('../pages/home/Home')
// const Cart = () => import('../pages/cart/Cart')
// const Category = () => import('../pages/category/Category')
// const Profile = () => import('../pages/profile/Profile')

const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Category = () => import('views/category/Category')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router