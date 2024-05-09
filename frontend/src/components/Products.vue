<template>
<div class="container">
  <div class="my-5 d-flex justify-content-center">
      <input type="text" v-model="searchText" class="form-control " placeholder="Search by  Name or category or price ">
  
  

    </div>

 <div class="  flex-column py-5  "  v-if="loading">
            <div class=" loadingBar "></div>
            <div class=" loadingBar "></div>
            <div class=" loadingBar "></div>
          </div>

<div  class="row row-cols-1 row-cols-md-3  g-5 my-3"  >
  <div class="col" v-for="product in filteredProducts" :key="product.id">
    <div class="card rounded-4 border-0" >
      <img :src="'http://localhost:7000/images/'+product.image" alt="..." class="img-fluid rounded-4">
   
      <div class="card-body">
        <h5 class="card-title text-center">{{product.name}}</h5>
        <p class="card-text text-center">{{product.price}}</p>
         <div class="d-flex justify-content-center">
          <button  class="btn btn-outline-secondary">  <router-link class="text-decoration-none text-secondary " :to="`product/${product._id}`"> show 
    </router-link></button>
         </div>
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
const loading = ref(true)
  const products = ref([])
  const searchText = ref("");
  const getallproducts = () => {
      axios.get("http://localhost:7000/api/Product/Products")
        .then((res) => {
         // console.log(res.data);
          products.value = res.data;
          loading.value = false;
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
    loading,
      filteredProducts,
      searchText
  }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{

 max-height: 250px;

}
input{
  width: 400px;
  border: 3px solid #ffa958;
}



.loadingBar{
  max-width: 700px;
  border-radius: 3px;
  margin: auto;
  margin-top: 10px;

  border:none;
  background: linear-gradient(to right, #c3c3c3 0%, #dbd7d4 50%, #ffffff 100%);
  height: 20px;
  
  animation: loading 4s infinite linear ;

}

@keyframes loading {
  0%{
      background-position: -800px 0;
  }
  100%{
      background-position: 800px 0px;
  }
}
@media  (max-width: 767px){
  

.loadingBar{
  max-width: 300px;
  border-radius: 3px;
  margin: auto;
  margin-top: 10px;

  border:none;
  background: linear-gradient(to right, #c3c3c3 0%, #dbd7d4 50%, #ffffff 100%);
  height: 20px;
  
  animation: loading 4s infinite linear ;

}

@keyframes loading {
  0%{
      background-position: -800px 0;
  }
  100%{
      background-position: 800px 0px;
  }
}

}
</style>
