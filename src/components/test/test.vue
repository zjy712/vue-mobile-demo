<template>

    <div class="goodsinfo-container">
        <input type="button" value="111" @click="addToShopCar" >
        <transition
        @before-enter = "beforeEnter"
        @enter = "enter"
        @after-enter = "afterEnter">
        <div class="ball" v-show="ballFlag" >as</div>
        </transition>

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
            ballFlag: false
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo()
    },
    methods: {
        getLunbotu() {
            this.$http.get("https://267664bd-b65a-4dae-869f-51f956e659ec.mock.pstmn.io/thumuimages/"+this.id)
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
            this.$http.get("https://267664bd-b65a-4dae-869f-51f956e659ec.mock.pstmn.io//goods/getinfo/"+this.id)
                .then(res => {
                    if (res.body.status === 0) {
                        this.goodsInfo = res.body.message;
                    }
                })
        },
        addToShopCar() {
            this.ballFlag = !this.ballFlag
            console.log(this.ballFlag);
            
        },
        beforeEnter(el){
                el.style.transform = "translate(0px,0px)"
                console.log(1);
                
            },
        enter(el, done){
            el.offsetWidth
            el.style.zIndex 
            el.style.transform = "translate(110px,295px)"
            
            el.style.transition = "all 100s ease"
            
            done();
        },
        afterEnter(el){
            // console.log(2);
            this.ballFlag = !this.ballFlag

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
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color:red;
    position: absolute;
    z-index: 99;
    left: 150px;
    top: 390px;
}
.v-leave-active,.v-enter-to,.v-leave-to {
    z-index: 99;
}
</style>
