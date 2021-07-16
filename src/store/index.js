import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
function localStorageCart(cart){
    localStorage.setItem('cart', JSON.stringify(cart));
}
export default new Vuex.Store({
    state:{
        items:[
            {id:1,name:"quan",des:"depnha",price:1000},
            {id:2,name:"ao",des:"depnha",price:1000},
            {id:3,name:"ao thun",des:"depnha1 ",price:1000}
          ],
          cart:[]
    },
    getters:{
        quantityCart(state){
            let sum = 0
            for(let i = 0; i<state.cart.length ;i++){
                sum += state.cart[i].quantity
            }
            return sum;
        }
    },
    actions:{

    },
    mutations:{
        addtoCart(state,product){
            let x = state.cart.find(i =>i.id == product.id)
            if(x){
                x.quantity++
            }else{
                state.cart.push({...product,quantity:1})
            }
            localStorageCart(state.cart);
        },

        addlocalStorage(state){
             let x = localStorage.getItem('cart');
            if(x){
             state.cart = JSON.parse(x)
            }
        }
    }
})