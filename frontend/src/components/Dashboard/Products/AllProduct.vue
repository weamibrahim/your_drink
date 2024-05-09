<template>

     <div className="d-flex justify-content-center">
      <SidebarAPP/>
    <!-- Add a search input field -->
     <div class="container-fluid bg">      <div class="mb-3 my-3">
      <input type="text" v-model="searchText" class="form-control" placeholder="Search by  Name or price or category ">
    
    </div>
    <button class="btn btn-success my-2" >  <router-link class="btn"  to="createproduct">create </router-link> </button>
     <div class="table-responsive">  
    <table class="table  ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">image</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">category</th>
          
          <th scope="col">delete</th>
          <!-- <th scope="col">view</th> -->
          <th scope="col">update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product,index) in filteredproducts" :key="product.id">
          
          <th scope="row">{{ index+1}}</th>
       <td><img v-if="product.image" :src="'https://your-drink.onrender.com/images/'+product.image" alt="" ></td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
          
          <td><button class="btn btn-danger" @click="deleteproduct(product._id)">Delete</button></td>
          <!-- <td><button class="btn btn-info"> <router-link class="btn" :to="`/products/${product.id}`">show </router-link></button></td> -->
          <td><button class="btn btn-primary"><router-link      class="btn"             :to="`updateproduct/${product._id}`">update</router-link></button></td>
          
        </tr>
      </tbody>
    </table>
    </div>
     </div>
  </div>
</template>

<script>
import { ref, onMounted ,computed} from "vue";
import axios from "axios";
import SidebarAPP from "../SideBar.vue"
export default {
  name: 'AllProductApp',
  components:{
    SidebarAPP

  },

  setup() {
    const token = localStorage.getItem('accessToken')
    const products = ref([]);
    const searchText = ref("");
    const getallproducts = () => {
      axios.get("https://your-drink.onrender.com/api/Product/Products")
        .then((res) => {
          console.log(res.data);
          products.value = res.data;

        })

        .catch((err) => console.log(err));
    };
    const deleteproduct = (id) => {
      axios.delete(`https://your-drink.onrender.com/api/Product/delete/${id}`,{
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      })
        .then((res) => {
          console.log(res.data);
          getallproducts();
        })
        .catch((err) => console.log(err));
    };
     // Function to filter products based on the search text
    const filteredproducts = computed(() => {
      return products.value.filter((product) => {
        const fullName = `${product.name} ${product.category} ${product.price}`;
        return fullName.toLowerCase().includes(searchText.value.toLowerCase());
      });
    });


    
    onMounted(() => {
      getallproducts();
      
    });

    return {
      products,
      deleteproduct,
       searchText,
      filteredproducts
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  text-decoration: none;
  color: white;
}
.bg {
  background-image: url("https://img.freepik.com/free-photo/fresh-lemon-slice-healthy-cocktail-drink-generative-ai_188544-8793.jpg?w=1380&t=st=1693752127~exp=1693752727~hmac=10c8406427fb18833c1a89ddd0cf2161ebcc73199d9d137cafaf58cc538ebbce");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  position: relative; 
  padding-bottom:0px !important;

  /* Needed for overlay positioning */
}
input{
  width: 300px;
}
img{
  width: 100px;
  height: 100px;
}
</style>
