<template>
 <div>
            <div class="container-fluid bg-dark text-light footer pt-5  wow " data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6">
                            <h4 class="section-title ff-secondary text-start fw-normal mb-4" >Company</h4>
                <div class="row">
                           <router-link to="#" class=" text-decoration-none text-white "> ABOUT US </router-link>
                           <router-link to="#" class=" text-decoration-none text-white">contact us </router-link>

                           <router-link to="#" class=" text-decoration-none text-white">  Privacy Policy</router-link>
                           <router-link to="#" class=" text-decoration-none  text-white"> Terms & Condition</router-link>
                    </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h4 class="section-title ff-secondary text-start  fw-normal mb-4"  >Contact</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt mx-2"></i>Our Locatio 1 Mahmoud Salamah  Al Attarin, Alexandria</p>
                            <p class="mb-2"><i class="fa fa-phone-alt  mx-2"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope  mx-2"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social " ><i  class="fab fa-twitter "></i></a>
                                <a class="btn btn-outline-light btn-social mx-2" ><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social mx-2"><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social mx-2" ><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h4 class="section-title ff-secondary text-start  fw-normal mb-4"  >Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div class="position-relative mx-auto" >

                                <button type="button" class="btn py-2 position-absolute my-3"  >SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                             
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>

<script>
export default {
 name: 'FooterApp',




}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
    background-color: #ecc29a;;
}
button:hover{
    background-color: #dddfec;
    color: black;
}
</style>
