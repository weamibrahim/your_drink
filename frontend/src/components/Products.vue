<template>
<div class="container">
  <div class="my-5 d-flex justify-content-center">
      <input type="text" v-model="searchText" class="form-control " placeholder="Search by  Name or category or price ">
  
  

    </div>
<div  class="row row-cols-1 row-cols-md-3 g-4 my-3" >
  <div class="col" v-for="product in filteredProducts" :key="product.id">
    <div class="card border-0">
    <router-link :to="`product/${product._id}`">  <img :src="'http://localhost:7000/images/'+product.image" alt="...">
    </router-link>
      <div class="card-body">
        <h5 class="card-title text-center">{{product.name}}</h5>
        <p class="card-text text-center">{{product.price}}</p>
         <p class="card-text text-center">{{product.category}}</p>
      </div>
    </div>
  </div>
  
 
  
</div>
</div>
</template>

<script>

import {ref,onMounted,computed} from "vue";
import axios from 'axios';
export default {
 name: 'ProductsApp',


 setup(){
  const products = ref([])
  const searchText = ref("");
  const getallproducts = () => {
      axios.get("http://localhost:7000/api/Product/Products")
        .then((res) => {
         // console.log(res.data);
          products.value = res.data;
        })
        .catch((err) => console.log(err));
    };

  const filteredProducts = computed(() => {
      return products.value.filter((product) => {
        const allcategory = `${product.name} ${product.category} ${product.price}`;
        return allcategory.toLowerCase().includes(searchText.value.toLowerCase());
      });
    });


  

  onMounted(()=>{
    getallproducts();
 })

  return{
    products,
    
      filteredProducts,
      searchText
  }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  width: 415px;
  height: 300px;

}
input{
  width: 400px;
  border: 3px solid #ffa958;
}
</style>
