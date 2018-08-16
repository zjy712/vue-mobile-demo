<template>
    <div>
        
        <swiper :lunbotuList = this.lunbotuList :isfull="true" >
          
        </swiper>


        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                <router-link to="/home/newlist">
                        <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻</div>
                        </router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		                    <router-link to="/home/photoslist">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">图片</div></router-link>
                        </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">购买</div></router-link>
                  </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>
		           
		        </ul> 
		</div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import swiper from '../subcomponents/swiper'

export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      this.$http
        .get(
          "https://346e7c74-540e-40c2-9eb5-b98b34bde0a0.mock.pstmn.io/lunbotu"
        )
        .then(result => {
          if (result.body.staus === "0") {
            this.lunbotuList = result.body.message;
          } else {
            Toast("获取失败");
          }
        });
    },
    openLunbotu(url) {
      console.log(url);
    }
  },
 components: {
    swiper
  } 
};
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: 0;
  }
}
.mui-content > .mui-table-view:first-child {
  margin-top: 0px;
}
</style>
