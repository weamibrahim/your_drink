<template>
<div class="d-flex justify-content-center">
    <SidebarAPP />
    <div class="container-fluid bg">
    
  <h1 class="text-center text-white mt-4">Edit product</h1>
   <div className='d-flex justify-content-center '>
    <form @submit.prevent="submitForm" enctype="multipart/form-data" >

      <div class="form-group">
    <label for="image" class="form-label text-white">Image:</label>
    <input
      type="file"
      id="image"
      class="form-control mb-4"
      accept="image/*"
      @change="handleImageChange"
    />
  </div>
    <div class="form-group">
        <label for="createFirstName" class="form-label text-white">Name:</label>
        <input
          type="text"
          class="form-control mb-4"
          id="createFirstName"
          v-model="formData.name"
        />
      </div>
       <div class="form-group">
        <label for="createFirstName" class="form-label text-white">description:</label>
        <input
          type="text"
          class="form-control mb-3"
          id="createFirstName"
          v-model="formData.des"
        />
      </div>
      <div class="form-group">
        <label for="createcategory" class="form-label text-white">category</label>
        <input
          type="text"
          class="form-control mb-4"
          id="createcategory"
          v-model="formData.category"
        />
      </div>
      <div class="form-group">
       <label for="createprice" class="form-label text-white">price</label>
        <input
          type="number"
          class="form-control mb-4"
          id="createprice"
          v-model="formData.price"
        />
      </div>
       <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary mx-4">Save</button>
      <button @click="cancelEdit" class="btn btn-secondary">Cancel</button>
       </div></form>
   </div>
  </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import SidebarAPP from "./../SideBar.vue";
export default {
  name: "UpdateProductApp",
   components: {
   SidebarAPP
  },
  setup() {
      const token =localStorage.getItem('accessToken')
    const router = useRouter();
     const route = useRoute(); 
    const productId = ref(''); // Define productId as a ref

    const formData = reactive({
      name:"",
     category:"",
     price:"",
     des:"",
     image:null
    });

const handleImageChange = (event) => {
  const file = event.target.files[0];

  formData.image = file
};

    const getproductData = () => {
         productId.value = route.params.id;
      console.log(productId.value)


      
      axios
        .get(`https://your-drink.onrender.com/api/Product/${productId.value}`)
        .then((res) => {
          const { name,category,price,des } = res.data;
          formData.name=name
          formData.price=price
          formData.category=category
          formData.des=des

        })
        .catch((err) => console.error(err));
    };

    const submitForm = () => {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("category", formData.category);
      form.append("price", formData.price);
      form.append("des", formData.des);
    form.append("image", formData.image);
  // if (.value) {
  //   form.append("image", selectedImage.value);
  // }
  
      // Send the updated data to the server
      axios
        .put(`https://your-drink.onrender.com/api/Product/update/${productId.value}`, form,{
           headers: {
           
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          router.push(`/dashboard/allproduct`);
        })
        .catch((err) => console.error(err));
    };

    const cancelEdit = () => {
      router.push(`/dashboard/allproduct`);
    };

  

    // Load product data on component mount
    getproductData();

    return {
      formData,
      submitForm,
      cancelEdit,
      handleImageChange
    };
  },
};
</script>
<style scoped>
.bg {
  background-image: url("https://img.freepik.com/free-photo/fresh-lemon-slice-healthy-cocktail-drink-generative-ai_188544-8793.jpg?w=1380&t=st=1693752127~exp=1693752727~hmac=10c8406427fb18833c1a89ddd0cf2161ebcc73199d9d137cafaf58cc538ebbce");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh; /* Ensure full viewport height */
  position: relative; /* Needed for overlay positioning */
}
form{
  max-width: 600px;
  margin-top: 50px;
}
@media (max-width: 900px) {
  input{
    width: 200px !important;
  }
}


input{
  width: 400px
}
</style>