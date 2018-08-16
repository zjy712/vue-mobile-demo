<template>
    <div class="goodsinfo-container">

        <transition
        @before-enter = "beforeEnter"
        @enter = "enter"
        @after-enter = "afterEnter">
        <div class="ball" v-show="ballFlag" ref="ball" ></div>
        </transition>

    <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
                <swiper :lunbotuList = this.lunbotuList  :isfull="false"> </swiper>  
			</div>
		</div>
	</div>

    <!-- 购买区域 -->

    <div class="mui-card">
		<div class="mui-card-header">{{goodsInfo.title}}</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
                <p class="price">
                    市场价：<del>￥ {{goodsInfo.narket_price}} </del> &nbsp;&nbsp; 销售价：<span class="now_price">
                        ￥{{goodsInfo.sell_price}}
                    </span>
                </p>
                <p>
                    购买数量： <numbox @getcount = "getSelectedCount" ></numbox>
                </p>
                <p>
                    <mt-button type="primary" size="small" >立即购买</mt-button>
                    <mt-button type="danger" size="small" @click.prevent ="addToShopCar" >加入购物车</mt-button>
                </p>
			</div>
		</div>
	</div>

    <!-- 商品参数 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{goodsInfo.goods_no}} </p>
                        <p>库存情况：{{goodsInfo.stock_quantity}} </p>
                        <p>上架时间：{{goodsInfo.add_tine}} </p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain >图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain >商品评论</mt-button>
                </div>
	</div>
    
    </div>
</template>

<script>
import swiper from '../subcomponents/swiper'
import numbox from '../subcomponents/goodsinfo_numbox'


export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbotuList: [],
            goodsInfo: {},
            ballFlag: false,
            selectedCount: 1
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo()
    },
    methods: {
        getLunbotu() {
            this.$http.get("https://346e7c74-540e-40c2-9eb5-b98b34bde0a0.mock.pstmn.io/goodsinfo/"+this.id)
            .then(res => {
                if (res.body.status === 0) {
                    res.body.message.forEach(item => {
                        item.img_url = item.src;
                        
                    });
                    this.lunbotuList = res.body.message ;
                }
            }).catch(err => {
                    console.log(err);
                    
                })
        },
        getGoodsInfo() {
            this.$http.get("https://346e7c74-540e-40c2-9eb5-b98b34bde0a0.mock.pstmn.io/getgoods/"+this.id)
                .then(res => {
                    if (res.body.status === 0) {
                        this.goodsInfo = res.body.message;
                    }
                })
        },
        addToShopCar() {
            this.ballFlag = !this.ballFlag;
            var goodsinfo = {
                id: this.id,
                count: this.selectedCount,
                price: this.goodsInfo.sell_price,
                selected: true
            };
            console.log(this.selectedCount);
            this.$store.commit("addToCar",goodsinfo)
        },
        beforeEnter(el){
                el.style.transform = "translate(0,0)"

            },
        enter(el, done){
            el.offsetWidth

            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePostition = document.getElementById('badge').getBoundingClientRect();
            const xDist = badgePostition.left - ballPosition.left;
            const yDist = badgePostition.top - ballPosition.top;

            
            el.style.transform = `translate(${xDist}px,${yDist}px)`
            
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done();
        },
        afterEnter(el){
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count) {
            this.selectedCount = count;
        }

    },
    components: {
        swiper,
        numbox
    }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
    overflow: hidden;
    background-color: #eee;

    .now_price {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer {
        display: block;
        button {
            margin: 10px 0;
        }
    }
}

.ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:red;
    position: absolute;
    z-index: 999;
    left: 150px;
    top: 390px;
}
.v-enter, .v-leave-to{
    opacity: 1;
}
</style>
