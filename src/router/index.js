import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/components/Cart'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Authentication from '@/components/Authentication'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/login',
      name: 'Authentication',
      component: Authentication
    }
  ]
})
