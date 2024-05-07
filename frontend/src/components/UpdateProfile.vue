<template>
  <div>
    <form class="card" @submit.prevent="updateProfile"> 
      <div class="card_background_img"></div>
      <div class="card_profile_img"></div>
      <div class="user_details">
        <div class="card-body m-2">
          <div class="row mb-3">
            <div class="col-sm-2 mt-3">name</div>
            <div class="col-sm-10 text-secondary">
              <input
                v-model="userData.user_name"
                type="text"
                id="user_name"
                class="form-control"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-2">Email</div>
            <div class="col-sm-10 text-secondary">
              <input
                v-model="userData.email"
                type="email"
                id="email"
                class="form-control"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-2">role</div>
            <div class="col-sm-10 text-secondary">
              <select v-model="userData.role" class="form-control" required>
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-2">gender</div>
            <div class="col-sm-10 text-secondary">
              <select v-model="userData.gender" class="form-control" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-2">Phone</div>
            <div class="col-sm-10 text-secondary">
              <input
                v-model="userData.mobile"
                type="text"
                id="mobile"
                class="form-control"
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-2">Address</div>
            <div class="col-sm-10 text-secondary">
              <input
                v-model="userData.address"
                type="text"
                id="address"
                class="form-control"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="card_count d-flex justify-content-center">
        <button class="btn btn-primary p-2 border-0" type="submit">
         update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "UpdateProfileApp",
  setup() {
    const data = JSON.parse(localStorage.getItem("userData"));
    const userData = ref(data || {
      user_name: "",
      email: "",
      password: "",
      gender: "",
      role: "",
      mobile: "",
      address: "",
    });
    const router = useRouter();

    const updateProfile = async () => {
      try {
        // Make an HTTP request to update the user data on the server
        const response = await fetch(`https://your-drink.onrender.com/api/users/update/${data._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData.value),
        });

        if (response.ok) {
          // Profile updated successfully
          const updatedUserData = await response.json();
          localStorage.setItem("userData", JSON.stringify(updatedUserData.user));
         // alert("Profile updated successfully!");
          router.push("/profile");
        } else {
          // Handle errors
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating your profile.");
      }
    };

    return {
      userData,
      updateProfile,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #e1e7ed;
  text-align: center;
}

h3 {
  font-size: 18px;
  font-weight: 500;
  color: #33363b;
}

p {
  font-size: 14px;
  color: #868d9b;
}

.card {
  max-width: 700px;
  height: auto;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 80px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.15);
  margin-bottom: 100px;
}

.card_profile_img {
  width: 150px;
  height: 150px;
  background-color: #868d9b;
  background: url("https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.2.1532466403.1676939380&semt=sph");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 2px solid #ffffff;
  border-radius: 120px;
  margin: 0 auto;
  margin-top: -60px;
}

.card_background_img {
  width: 100%;
  height: 180px;
  background-color: #e1e7ed;
  background: url("https://img.freepik.com/free-photo/birdhouse-branches-with-flowers-wooden-table-with-copyspace_181624-27751.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.2.1532466403.1676939380&semt=ais");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.card_count {
  padding: 30px;
  border-top: 1px solid #dde1e7;
}

.btn {
  background-color: #ffa06c;
}
</style>