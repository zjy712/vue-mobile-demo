// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jquery from 'jquery'

import Vuex from 'vuex'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/mui.min.css'
import './assets/css/icons-extra.css'



import VueResource from 'vue-resource'



Vue.use(VueResource);
Vue.use(MintUI);

Vue.use(Vuex);

var car = JSON.parse(localStorage.getItem('car') || '[]' )

var  store = new Vuex.Store({
  // ...
  state: {//this.$store.state.xxx
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var flag = false;
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))      
    }
  },//this.$store.commit('xxx', {})
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c+= item.count
      })
      return c;
    }
  },//this.$store.getters.xxx
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
