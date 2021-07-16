<template>
    <div class="shop">
            <h1>This is Shop</h1>
            <item v-for="item in items" :key="item.id"
                v-bind:item="item"
            />
            <p>{{items}}</p>
    </div>

</template>

<script>
import Item from './Item.vue'
export default {
    name:'Shop',
    components:{
        Item
    },
    data(){
        return{
            items: this.$store.state.items
        }
    }
}
</script>

<style scoped>

</style>