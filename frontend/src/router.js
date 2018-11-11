import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CreateMarket from './views/CreateMarket.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'createmarket',
      component: CreateMarket
    },
    {
      path: '/market',
      name: 'market',
      component: Home // show markets
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
