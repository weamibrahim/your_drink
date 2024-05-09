<template>
   <div class="d-flex justify-content-center">
   <SidebarApp/>
    <div class="container-fluid bg  ">
    <h1>Info of User</h1>
    <div class="card">
      <div class="card-body">
       
        <h5 class="card-title"> Name: {{ userData.firstName }}</h5>
        <h5 class="card-title"> Email: {{ userData.email }}</h5>
        <h5 class="card-title"> Address: {{ userData.address }}</h5>
        <h5 class="card-title"> Mobile: {{ userData.mobile }}</h5>
        <h5 class="card-title"> Gender: {{ userData.gender }}</h5>
        <h5 class="card-title"> Role: {{ userData.role }}</h5>
        <button class="btn btn-primary" @click="back">Go to Users</button>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import  SidebarApp from "./../SideBar.vue";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
  name: 'DetailsApp',
    components: {
   SidebarApp
  },
  setup() {
    const token = localStorage.getItem("accessToken");
    const id = ref('');
    const name = ref('');
    const email = ref('');
    const address = ref('');
    const mobile = ref('');
    const gender = ref('');
    const role = ref('');
   

    const route = useRoute();
    const router = useRouter();

    const getUserByID = () => {
      const userId = route.params.id;
      
      axios.get(`http://localhost:7000/api/users/${userId}`,{
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      })
        .then((res) => {
          const responseData = res.data; // Store response data in a different variable
          id.value = responseData.id;
          name.value = responseData.user_name;
          email.value = responseData.email;
          address.value = responseData.address;
          mobile.value = responseData.mobile;
          gender.value = responseData.gender;
          role.value = responseData.role
    
        })
        .catch((err) => console.error(err));
    };

    onMounted(() => {
      getUserByID();
    });

    const userData = computed(() => ({
      Id: id.value,
      firstName: name.value,
      email: email.value,
      address: address.value,
      mobile: mobile.value,
      gender: gender.value,
      role: role.value

    }));

    const back = () => {
      router.push('/dashboard/users');
    };

    return {
      userData,
      back,
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
</style>
