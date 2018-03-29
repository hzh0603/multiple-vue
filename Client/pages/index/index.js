import Vue from 'vue'
import Index from './index.vue'
import router from '../../router/index'

new Vue({
    el:'#app',
    router,
    template: '<Index/>',
    components: { Index }
})