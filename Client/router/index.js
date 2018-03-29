import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Hello from '../components/Hello.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'

export  default new Router({
    mode:'history',
    routes:[
        {
          path:'/'
        },
        {
            path:'/hello',
            component:Hello
        },
        {
            path: '*',
            component: NotFoundComponent
        }
    ]
})