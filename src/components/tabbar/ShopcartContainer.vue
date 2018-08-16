<template>
    
    <div class="shopcar-container">
        <div class="goods-list">
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <mt-switch></mt-switch>
                        <img class="logo" src="http://img14.360buyimg.com/n1/s450x450_jfs/t18052/318/2334327001/256076/23da5f45/5af13917Naca6cb3d.jpg">
                        <div class="info">
                            <h1>华为 HUAWEI P20 AI智慧徕卡双摄全面屏游戏手机</h1>
                            <p>
                                <span class="price">￥4999</span>
                                <numbox></numbox>
                                <a href="">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
    </div>

    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>

    </div>
    
</template>

<script>
import numbox from '../subcomponents/shopcar_numbox'

export default {
    components: {
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopcar-container {
    background-color: #eee;
    overflow: hidden;
}

.goods-list {
    
    .mui-card-content-inner {
        display: flex;
        align-items: center;
    }
    img {
        width: 60px;
        height: 60px;
    }
    
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    h1 {
        width: 260px;
        font-size: 14px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .price {
        color: red;
        font-weight: 700;

        }
    }
}
</style>

