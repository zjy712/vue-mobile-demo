<template>
    <div>
        <!-- <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
					<router-link :to="'/home/newsinfo/' + item.id " >
                        <img class="mui-media-object mui-pull-left" :src="item.img_url" a>		
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间: {{item.add_time | dataFormat}} </span>
                                <span>点击:{{item.click}}次</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul> -->

            <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.uniquekey">
					<!-- <router-link :to="'/home/newsinfo/' + item.id " > -->
                    <a :href="item.url">
                        <img class="mui-media-object mui-pull-left" :src="item.thumitembnail_pic_s">		
						<div class="mui-media-body">
							<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间: {{item.date | dataFormat}} </span>
                               <span>来源：{{item.author_name}}</span>
                            </p>
						</div>
					</a>
				</li>
			</ul>
            <mt-button type = "danger" size= "large" plain @click="getMore" >加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
    data() {
        return {
            newsList: [],
            apiUrl: 'http://v.juhe.cn/toutiao/index?type=&key=3ea61378a4f3fb3048875396e63a12b1'
            // apiUrl: "https://5d927ba8-bb78-4264-a512-db3312b72fa6.mock.pstmn.io/getnewslist"
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            // this.$http.get("https://5d927ba8-bb78-4264-a512-db3312b72fa6.mock.pstmn.io/getnewslist")
            //     .then(result => {
            //         if (result.body.staus === "0") {
            //             this.newsList = result.body.message;
            //         } else{
            //             Toast('获取新闻列表失败')
            //         }
            //     })

            this.$http.get('/restful/toutiao/index?type=&key=3ea61378a4f3fb3048875396e63a12b1').then(res => {
                 this.newsList = res.body.result.data
            }).catch(err => {
                console.log(err);
            })
          
        }
        
    }
}
</script>
<style lang="scss" scoped>
.mui-table-view {
    h1{font-size: 14px}
    .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
}
</style>



