<template>
  
    <div class="sidebar">
      <div className="list-group list-group-flush my-3">
        <RouterLink to="/dashboard" class="text-decoration-none text-black mx-3 my-2">
          HOME
        </RouterLink>
        <!-- <RouterLink to="/dashboard/alluser" className="text-decoration-none text-black mx-3 my-2">
          USER
        </RouterLink> -->
        <RouterLink to="/dashboard/allproduct" className="text-decoration-none text-black mx-3 my-2">
          products
        </RouterLink>
          <RouterLink to="/dashboard/users" className="text-decoration-none text-black mx-3 my-2">
          users
        </RouterLink>
        <!-- <RouterLink className="text-decoration-none text-black mx-3 my-2"  to="/login">
          Logout
        </RouterLink>  -->
      </div>
    </div>
</template>

<script>
export default {
name:"SidebarApp"
}
</script>

<style scoped> 

  
  
  
  
  
  
  
  
  
  
</style>