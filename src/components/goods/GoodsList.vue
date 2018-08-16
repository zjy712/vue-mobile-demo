<template>
    <div class="goods-list">

        <div class="goods-item" v-for="(item, index) in goodlist" :key="index" @click="goDetail(item.id)" >
            <img :src="item.img_url">
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.narket_price}} </span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{item.stock_quantity}} 件</span>
                </p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            pageindex:1,
            goodlist: []
        }
    },
    created() {
        this.getGoodList();
    },
    methods: {
        getGoodList() {
            this.$http.get("https://267664bd-b65a-4dae-869f-51f956e659ec.mock.pstmn.io/goods").then(res => {
                console.log(res);
                this.goodlist = res.body.message
            }).catch(err => {
                console.log(2);
            })
        },
        goDetail(id) {
            console.log(id);
            
            this.$router.push(
                {name: 'goodsinfo', params: {id} }
            );
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 7px;
    
    .goods-item {
        padding: 1px;
        margin: 3px 0;
        width: 49%;
        border: 1px bold #ccc;
        box-shadow: 0 0 6px #999;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: h 293px;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
            margin-left: 2px;
        }
    
    .info {
        background-color: #eee;
        p {
            margin: 0;
            padding: 5px;
        }
        .price {
            .now {
                color: red;
                font-weight: bold;
                font-size: 16px;
            }
        }
        .old {
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>

