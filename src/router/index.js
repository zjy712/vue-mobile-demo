import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import MemberContainer from '@/components/tabbar/MemberContainer'
import ShopcartContainer from '@/components/tabbar/ShopcartContainer'
import SearchContainer from '@/components/tabbar/SearchContainer'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/Newsinfo'

import PhotoList from '@/components/photos/PhotoList'

import GoodsList from '@/components/goods/GoodsList'
import GoodsIndo from '@/components/goods/GoodsInfo'

Vue.use(Router)

import moment from 'moment'

Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD hh:mm:ss") {
  return moment(dataStr).format(pattern)
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: HomeContainer
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeContainer
    },
    {
      path: '/member',
      name: 'Member',
      component: MemberContainer
    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      component: ShopcartContainer
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchContainer
    },
    {
      path: '/home/newlist',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/home/newsinfo/id',
      component: NewsInfo
    },
    {
      path: '/home/photoslist',
      component: PhotoList
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      name: 'goodsinfo',
      component: GoodsIndo
    }
  ],
  linkActiveClass: 'mui-active' //覆盖默认的路由高亮类
})
