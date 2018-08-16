<template>
  <div id="prodcut-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="item in products">
            <span class="name">{{item.name}}</span>
            <span class="price">${{item.price }}</span>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
//   props:['products'],
  data () {
    return {
    //   products: this.$store.state.products,
    products:this.$store.getters.saleProducts,
    }
  }
}
</script>
<style scoped>
#prodcut-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#prodcut-list-one ul{
    padding: 0;
}
#prodcut-list-one ul li{
    list-style-type:none;
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}

</style>

