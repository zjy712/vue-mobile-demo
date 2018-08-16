<template>
    <h1>新闻内容  ---- {{id}} </h1>
</template>

<script>
export default {
    data() {
        return {
            id :  this.$route.params.id
        }
    }
}
</script>
