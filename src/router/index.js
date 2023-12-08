import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Layout from '@/views/layout'
import Search from '@/views/search'
import MyOrder from '@/views/myorder'
import Pay from '@/views/pay'
import ProDetail from '@/views/prodetail'
import SearchList from '@/views/search/list'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/pay',
    component: Pay
  },
  {
    path: '/myorder',
    component: MyOrder
  },
  {
    path: '/prodetail:id',
    component: ProDetail
  },
  {
    path: '/searchlist',
    component: SearchList
  }
]

const router = new VueRouter({
  routes
})

export default router
