<template>
    <div class="cartItem">
      <p>{{product.name}}</p>
      <p>{{product.quantity}}</p>
      <p>{{product.price}}</p>
      <button>quet the </button>
  </div>
</template>

<script>
export default {
    name:'CartItem',
    props:['product']
}
</script>

<style scoped>

</style>