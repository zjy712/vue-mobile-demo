<template>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item' , item == '明星' ? 'mui-active' : '']" v-for="(item, index) in listTitle" :key="index" 
							@click="getPhotoList(item)" >
							{{item}}
						</a>
					</div>
				</div>
				<div class="main">
					<ul class="photo-list">
						<li v-for="(item, id) in listPhotos" :key="item[id]" >
							<img v-lazy.main="item.url">
						</li>
</ul>
				</div>
			</div>
</template>

<script>
import mui from '../../assets/js/mui.min.js'



export default {
    data() {
		return {
			listTitle:['明星','美女','壁纸','动漫','宠物','摄影','摄影','设计'],
			listPhotos:[],
			url : 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=明星&tag2=全部&ie=utf8'
		};
	},
	mounted() {
		mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	},
	methods: {
		getPhotoList(item) {
			this.$http.get('https://gank.io/api/data/%E7%A6%8F%E5%88%A9/100/1').then( res => {
				this.listPhotos = res.body.results;
				console.log(res.body.results);
				
			} )
		}
	}
};
</script>

<style lang="scss" scoped>
*{
	touch-action: pan-y;
}

.photo-list {
	list-style: none;
	background-color: #ccc;
	padding: 0;
	margin: 8px;
	li {
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 9px #999;
		img {
			width: 100%;
		}
		img [lazy=loading] {
			width: 10px;
			height: 10px;
			margin: auto;
}
	}
}

</style>


