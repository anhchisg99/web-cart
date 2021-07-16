<template>
  <div class="item">
      <p>{{item.name}}</p>
      <p>{{item.des}}</p>
      <p>{{item.price}}</p>
      <button @click="$store.commit('addtoCart',item)">buy</button>
  </div>
</template>

<script>
export default {
    name:'item',
    props:['item'],
    methods:{
        
    }
}
</script>

<style>
.item{
    width:200px;
    height: 200px;
    background-color: aqua
}
button{
    padding:5px;
    border-radius:5px;


    text-align: center;
}
</style>