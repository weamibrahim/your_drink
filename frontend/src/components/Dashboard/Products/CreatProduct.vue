<template>
  <div class="d-flex justify-content-center">
    <SidebarAPP />
    <div class="container-fluid bg  ">
   <h1 class='text-center text-white mt-4'>create product</h1>
    <div className='d-flex justify-content-center '>
    <form @submit.prevent="submitForm" enctype="multipart/form-data" >

      <div class="form-group"> 
           <label for="createImage" class="form-label text-white">Image:</label>
            <input
              type="file"
              class="form-control mb-3"
              id="createImage"
              accept="image/*"
              @change="handleImageChange"
            />
      </div>
      <div class="form-group">
        <label for="createFirstName" class="form-label text-white">Name:</label>
        <input
          type="text"
          class="form-control mb-3"
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
          class="form-control mb-3"
          id="createcategory"
          v-model="formData.category"
        />
      </div>
      <div class="form-group">
       <label for="createprice" class="form-label text-white">price</label>
        <input
          type="text"
          class="form-control mb-3"
          id="createprice"
          v-model="formData.price"
        />
      </div>
      <div class="d-flex justify-content-center">
      <button type="submit" class="btn btn-primary">Create</button>
      </div>
    </form>
    </div>
  </div>
  </div>
</template>

<script>
import {  reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import SidebarAPP from "./../SideBar.vue";
export default {
  name: "CreateProductAPP",
  components: {
   SidebarAPP
  },
  setup() {
    const token =localStorage.getItem('accessToken')
    const router = useRouter();
    const formData = reactive({
     name:"",
     category:"",
     price:"",
     des:"",
    image:null, // Add an image property to store the selected image
    });

    const handleImageChange = (event) => {
      // Update the formData with the selected image file
      formData.image = event.target.files[0];
      console.log(formData.image)
    };


    const submitForm = () => {
        const form = new FormData();
      form.append("name", formData.name);
      form.append("category", formData.category);
      form.append("price", formData.price);
      form.append("des", formData.des);
      form.append("image", formData.image); // Append the image file


console.log(form)
      // Send the new product data to the server
      axios.post("http://localhost:7000/api/Product/create",form,{
           headers: {
          
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
         
          router.push("/dashboard/allproduct"); // Navigate back to the products list after creating
        })
        .catch((err) => {
           console.log("form",form)
          
          console.error(err)});
    };
    console.log(formData)


    return {
      formData,
      submitForm,
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