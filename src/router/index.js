import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            name:'Hello',
            component:HelloWorld 
        },
        {
           path:'/shop',
           name:'shop',
           component:Shop
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
         }
    ]
})