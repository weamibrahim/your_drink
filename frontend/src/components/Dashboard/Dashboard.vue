<template>
  
  <div >
      <div className="d-flex justify-content-center">
      <SidebarAPP/>
        
              
        <div className="container-fluid bg"><div className="overlay">
                <h2>Welcome to DashBoard</h2>
              </div></div>
       
      </div>
    </div>



</template>

<script>
import SidebarAPP from "./SideBar.vue"
export default {
name:"DashboardApp",
components: {
   SidebarAPP
  }
}

</script>

<style scoped>
/* Default styles */
.bg {
  background-image: url("https://img.freepik.com/free-photo/fresh-lemon-slice-healthy-cocktail-drink-generative-ai_188544-8793.jpg?w=1380&t=st=1693752127~exp=1693752727~hmac=10c8406427fb18833c1a89ddd0cf2161ebcc73199d9d137cafaf58cc538ebbce");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh; /* Ensure full viewport height */
  position: relative; /* Needed for overlay positioning */
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.658);
  padding: 20px;
  border-radius: 5px;
  text-align: center; /* Center-align the content */
}
.overlay h2 {
  margin: 0; /* Remove default margin */
}

/* Media queries */
@media (max-width: 768px) {
  /* Adjust overlay for smaller screens */
  .overlay {
    font-size: 14px;
    padding: 10px;
  }
  
  /* ... (other styles) */
}

</style>