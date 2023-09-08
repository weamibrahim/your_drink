<template>
   <div class="d-flex justify-content-center">
    <SidebarApp />
    <div class="container-fluid bg  ">
   
    <!-- Add a search input field -->
    <div class="mb-3 my-3">
      <input type="text" v-model="searchText" class="form-control" placeholder="Search by Name or email or address">
      
    </div>
                                              
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">email</th>
          <th scope="col">address</th>
          <th scope="col">delete</th>
          <th scope="col">view</th>
          <th scope="col">update</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,index) in filteredUsers" :key="user.id" >
          
          <th scope="row">{{ index+1 }}</th>
          <td>{{ user.user_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address}}</td>

          <td><button class="btn btn-danger" @click="deleteUser(user._id)">Delete</button></td>
          <td><button class="btn btn-info"> <router-link class="btn" :to="`users/${user._id}`">show </router-link></button></td>
          <td><button class="btn btn-primary"><router-link      class="btn"             :to="`update/${user._id}`">update</router-link></button></td>
          
        </tr>
      </tbody>
    </table>
  </div>
   </div>
</template>

<script>
import SidebarApp from "./../SideBar.vue"
import { ref, onMounted ,computed} from "vue";
import axios from "axios";

export default {
  name: 'UsersApp',
    components: {
   SidebarApp
  },

  setup() {
    const users = ref([]);
    const searchText = ref("");
    const getallusers = () => {
      axios.get("http://localhost:7000/api/users/alluser")
        .then((res) => {
         // console.log(res.data);
          users.value = res.data;
        })
        .catch((err) => console.log(err));
    };
    const deleteUser = (id) => {
      axios.delete(`http://localhost:7000/api/users/delete/${id}`)
        .then((res) => {
          console.log(res.data);
          getallusers();
        })
        .catch((err) => console.log(err));
    };
     // Function to filter users based on the search text
    const filteredUsers = computed(() => {
      return users.value.filter((user) => {
        const fullName = `${user.user_name} ${user.email} ${user.address}`;
        return fullName.toLowerCase().includes(searchText.value.toLowerCase());
      });
    });


   
    onMounted(() => {
      getallusers();
      
    });

    return {
      users,
      deleteUser,
       searchText,
      
      filteredUsers
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
  height: 100vh; /* Ensure full viewport height */
  position: relative; /* Needed for overlay positioning */
}
input{
  width: 300px;
}
</style>
