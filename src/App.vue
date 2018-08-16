<template>
  <div id="app">
    <mt-header fixed title="Demo"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    
    <!-- spa模式 -->
    <!-- <mt-tab-container v-model="selected" swipeable="true" >
      <mt-tab-container-item id="home">
        {{selected}}
      </mt-tab-container-item>
      <mt-tab-container-item id="user">
        {{selected}}
      </mt-tab-container-item>
      <mt-tab-container-item id="trolley">
        {{selected}}
      </mt-tab-container-item>
      <mt-tab-container-item id="search">
        {{selected}}
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img src="./assets/images/home.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="user">
        <img src="./assets/images/user.png" slot="icon">
        会员
      </mt-tab-item>
      <mt-tab-item id="trolley">
        <img src="./assets/images/trolley.png" slot="icon">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img src="./assets/images/search.png" slot="icon">
        搜索
      </mt-tab-item>
    </mt-tabbar> -->
    
     <!-- webview模式  -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge" > {{ $store.getters.getAllCount }} </span></span >
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selected: 'home',
    }
  }
};
</script>


<style>
#app {
  padding-top: 40px;
  overflow-x: hidden;
  padding-bottom: 50px;
}
body {
  background-color: #fff;
}
.ico {
  font-size: 20px;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
  position: absolute
}
.v-enter-active,
.v-leave-active {
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header.is-fixed {
  z-index: 100;
}
</style>
