<template>
    <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <!-- <a href="#" @click.prevent="openLunbotu(item.url)" ><img :src="item.img" ></a> -->
                 <a :href="item.url" ><img :src="item.img_url" :class="{'full': isfull}" ></a>
            </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
    props: ['lunbotuList' ,"isfull"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        text-align: center;
    }
    img {
        height: 100%;
        
    }
}

.full{
    width: 100%;
}

</style>
