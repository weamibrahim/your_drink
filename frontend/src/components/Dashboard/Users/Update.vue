<template>
 <div class="d-flex justify-content-center">
    <SidebarApp />
    <div class="container-fluid bg  ">
    <h1 class="text-center text-white mt-4">Edit User</h1>
     <div className='d-flex justify-content-center '>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="editFirstName"  class="form-label text-white">First Name:</label>
        <input
          type="text"
          class="form-control"
          id="editFirstName"
          v-model="formData.name"
        />
      </div>
      <div class="form-group">
        <label for="editEmail"  class="form-label text-white">Email:</label>
        <input
          type="email"
          class="form-control"
          id="editEmail"
          v-model="formData.email"
        />
      </div>
      <div class="form-group">
        <label for="editAddress" class="form-label text-white">Address:</label>
        <input
          type="text"
          class="form-control"
          id="editAddress"
          v-model="formData.address"
        />
      </div>
      <div class="form-group">
        <label for="editMobile" class="form-label text-white">Mobile:</label>
        <input
          type="text"
          class="form-control"
          id="editMobile"
          v-model="formData.mobile"

        />
      </div>
      <div class="form-group">
        <label for="editRole" class="form-label text-white">Role:</label>
        <select v-model="formData.role" class="form-control" required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
      </div>
      <div class="form-group">
 <label for="editGender" class="form-label text-white">Gender:</label>
 <select v-model="formData.gender" class="form-control" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
      </div>

      <div  class="d-flex justify-content-center m-3">
      <button type="submit" class="btn btn-primary  mx-2">Save</button>
      <button @click="cancelEdit" class="btn btn-secondary">Cancel</button>
      </div>
    </form>
     </div>
  </div>
 </div>
</template>

<script>
import SidebarApp from "./../SideBar.vue";
import { ref, reactive } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "UpdateUser",
    components: {
   SidebarApp
  },
  setup() {
    const token = localStorage.getItem("accessToken");
    const router = useRouter();
     const route = useRoute(); 
    const userId = ref(''); // Define userId as a ref

    const formData = reactive({
     name: ref(''),
     email: ref(''),
     address: ref(''),
     mobile: ref(''),
     gender: ref(''),
     role: ref(''),


    });

    const getUserData = () => {
         userId.value = route.params.id;
      console.log(userId.value)
      axios
        .get(`https://your-drink.onrender.com/api/users/${userId.value}`,{
           headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const {user_name,email,address,mobile,gender,role} = res.data;
          formData.name = user_name;
          formData.email = email;
          formData.address = address;
          formData.mobile = mobile;
          formData.gender = gender;
          formData.role = role
        })
        .catch((err) => console.error(err));
    };

    const submitForm = () => {
      // Send the updated data to the server
      axios
        .put(`https://your-drink.onrender.com/api/users/update/${userId.value}`, {
          user_name: formData.name,
          email: formData.email,
          address: formData.address,
          mobile: formData.mobile,
          gender: formData.gender,
          role: formData.role
        },{
           headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
        )
        .then(() => {
          router.push(`/dashboard/users`);
        })
        .catch((err) => console.error(err));
    };

    const cancelEdit = () => {
      router.push(`/dashboard/users`);
    };

  

    // Load user data on component mount
    getUserData();

    return {
      formData,
      submitForm,
      cancelEdit,
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
input,select{
  width: 400px !important
}
@media (max-width: 900px) {
  input,select{
    width: 200px !important;
  }
}





</style>
