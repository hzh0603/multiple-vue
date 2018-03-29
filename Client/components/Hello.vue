<template>
    <div>
        <h3>欢迎来到Hello</h3>
        <h3>{{text}}</h3>
        <router-link to='/'>返回</router-link>
    </div>
</template>

<script>
    export default {
        name: "hello",
        data(){
            return {
                text:"进来这里说明已经加载了Hello.vue了"
            }
        }
    }
</script>

<style scoped>

</style>