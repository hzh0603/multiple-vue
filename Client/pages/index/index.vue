<template>
    <div>
        <h2>{{name}}</h2>
        <router-link to="/hello">Go to hello Route（页面不会刷新）</router-link>
        <router-view/>
        <p>
            <a href="info.html">GO TO info.html（页面刷新）</a>
        </p>

    </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                text:'加载了index.vue啦，good'
            }
        }
    }
</script>

<style scoped>
</style>