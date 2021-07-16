<template>
  <div class="cart">
      <h1>This is CART :{{$store.getters.quantityCart}}</h1>
      <cart-item 
        v-for="product in cart" :key="product.id"
        v-bind:product="product"
      />
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
    name:'Cart',
    components:{
        CartItem
    },
    data(){
        return{
            cart: this.$store.state.cart
        }
    },
    computed:{
        
    },
    
}
</script>

<style scoped>

</style>