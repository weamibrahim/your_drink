<template>
  <div> 

<div class="card">
        <div class="card_background_img"></div>
        <div class="card_profile_img"></div>
        <div class="user_details">
          <div className="card-body m-2 " >
                                        <div className="row mb-3 ">
                                            <div className="col-sm-2 mt-3">
                                               name
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control mt-3 text-center" >{{user.user_name }}</span>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Gender
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control text-center" > {{user.gender}} </span>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Email
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control text-center" >{{user.email}} </span>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Phone
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control text-center" >{{user.mobile}} </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Address
                                            </div>
                                            <div className="col-sm-10 text-secondary ">
                                                <span className="pt-2 form-control text-center" > {{user.address}} </span>
                                            </div>
                                        </div>



                                       

                                    </div>
        </div>
        <div class="card_count d-flex justify-content-center">
            
          
            <button class="btn  p-2 border-0"><router-link class="nav-link  text-dark fs-3"  aria-current="page" to="/update">update</router-link></button>
        </div>
    </div>
      
  
  </div>
</template>

<script>
import { ref} from "vue";

export default {

name:"ProfileApp",

setup() {
    const user = ref({});
   
   const userData = localStorage.getItem("userData");

   user.value = JSON.parse(userData);
   

    return {
      user,
    
    };
  }
}
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

p{
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

.btn{
background-color: #ffa06c;
}
.btn:hover{
background-color: #e0dddc;
}

</style>