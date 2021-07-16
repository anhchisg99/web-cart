<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/shop">Shop</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </nav>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return{
      
    }
  },
  mounted(){
    this.$store.commit('addlocalStorage')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav{
  display:flex;
  justify-content: center;
  align-items: center;
}
#app{

}
ul{
  display:flex;
  justify-content: center;
  
}
li{
  margin:20px;
  
}
a{
  text-decoration: none;
}
</style>
