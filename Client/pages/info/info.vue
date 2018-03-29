<template>
    <div>
        <h2>{{text}}</h2>
        <a href="/">GO TO index.html</a>

        <a href="/hello">GO TO Hello（页面刷新）</a>
    </div>

</template>

<script>
    export default {
        name: "app",
        data(){
            return {
                text:'加载了info.vue啦'
            }
        }
    }
</script>

<style scoped>
</style>