<template>
  
  <div class="d-flex justify-content-center" >
    <form @submit.prevent="registerUser" class="form my-5">
     
     <p class="title">Register</p>
      <p class="message">Signup now and get full access to our app.</p>
      
        <label>
          <input v-model="user.user_name" class="input" type="text" placeholder="" required>
          <span> Name</span>
        </label>

       
      

      <label>
        <input v-model="user.email" class="input" type="email" placeholder="" required>
        <span>Email</span>
      </label>

      <label>
        <input v-model="user.password" class="input" type="password" placeholder="" required>
        <span>Password</span>
      </label>

      <label>
          <select v-model="user.gender"  class="input" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
         
            </select>
      </label>
      <label>
        <select v-model="user.role" class="input" required>
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
        </select>
      </label>
      <label>
        <input v-model="user.mobile" class="input" type="text" placeholder="" required>
        <span>Mobile</span>
      </label>
      <label>
        <input v-model="user.address" class="input" type="text" placeholder="" required>
        <span>Address</span>
      </label>

      <button type="submit" class="submit">Submit</button>
      <p class="signin">Already have an account? <router-link to="/login">Sign in</router-link></p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';
export default {
  name:'SignupApp',
  setup() {
    const user = ref({
      user_name: '',
      email: '',
      password: '',
      gender:'',
      role:'',
      mobile:'',
      address:''
      // Add other user properties here (last_name, email, password, etc.)
    });
 
const router = useRouter();
    const registerUser = async () => {
      try {
        // Send the user data to your Node.js backend
    // Send the user data to your Node.js backend using Axios
        const response = await axios.post('https://your-drink.onrender.com/api/users/register', user.value);

  console.log(response.data);
        
          const data = response.data;
          localStorage.setItem('userData', JSON.stringify(data.user));
          localStorage.setItem('accessToken', data.accessToken);

          // Handle successful registration (e.g., show a success message)
          console.log(data.message);
           router.push('/home');
        
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error:', error);
      }
    };

    return {
      user,
      registerUser,
    };
  },
};
</script>

<style scoped>
.imggro {
  background-image: url("https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
 width: 600px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #dddfec;
  color: #fff;

}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #f9ca9f ;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #f9ca9f ;
}

.message, 
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline #f9ca9f ;
}

.signin a {
  color:  #f9ca9f;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #ffffff;
  color: #000000;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgb(105, 105, 105);
  border-radius: 10px;
}

.form label .input + span {
  color: rgb(0, 0, 0);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #f9ca9f ;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #f9ca9f ;
}

.submit:hover {
  background-color: #fcc18a ;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

</style>