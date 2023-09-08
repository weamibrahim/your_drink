<template>
<div>
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              
              
              <img
                src="https://img.freepik.com/free-photo/fresh-cocktails-wooden-table-with-leafs-generative-ai_188544-12374.jpg?w=1380&t=st=1693926235~exp=1693926835~hmac=e8413b663a9ad11ae4342a2c019d963c48b5abe4ee1832aff3386f639347acc5"
                class="d-block w-100 image"
                alt="..."
                
              />
            
            </div>
            <div class="carousel-item">
               <img
                src="https://img.freepik.com/free-photo/colorful-collage-fruits-texture-close-up_23-2149870264.jpg?w=1380&t=st=1693925966~exp=1693926566~hmac=6b2941b47a2c7f130a40626c823b27b274094b8c18ca1f48ad5946cd930ca382"
                class="d-block w-100 image"
                alt="..."
              
              />
            
              <!-- https://img.freepik.com/free-photo/front-view-chocolate-dessert-glass-with-straw_23-2148603311.jpg?t=st=1693751387~exp=1693751987~hmac=a163739083283d4c9dd1ab7021d7a6cbfc1be0e40060ba9c3bbd265b1b0c7d74 -->
            </div>
            <div class="carousel-item">
              
              <img
                src="https://img.freepik.com/free-photo/front-close-view-organic-fresh-juices-bottles-served-with-tubes-fruits-wooden-cutting-board-brown-table_140725-94487.jpg?w=1060&t=st=1693926609~exp=1693927209~hmac=3113b09b43dbc79b0e057f10d4211dbd2d204553050af940743c400061c56ae1"
                class="d-block w-100 image"
                alt="..."
                
              />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


            <div class="container-fluid py-5" >
                <div class="container pt-5" >
                    <div class="row " >
                        <div class="col-md-6 "  >
                            <div class="h-100 " >
                                <img class=" w-100 h-100 rounded-5" src="https://img.freepik.com/free-photo/milkshake-set-table_140725-9239.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.1.1532466403.1676939380&semt=sph"  />
                            </div>
                        </div>
                        <div class="col-md-6 pt-5 pb-lg-5">
                            <div class="text bg-white p-4 p-lg-5 my-lg-5" >
                                <h6 class="text-warning text-uppercase" s>About Us</h6>
                                <h1 class="mb-3">We Provide Best flower  In Your Budget</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                <div class="row mb-4">
                                    <div class="col-6">
                                        <img class="img-fluid impart rounded-5 " src="https://img.freepik.com/free-photo/delicious-green-smoothie-with-avocado_23-2148858664.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.2.1532466403.1676939380&semt=sph" />
                                    </div>
                                    <div class="col-6">
                                        <img class="img-fluid impart rounded-5" src="https://img.freepik.com/free-photo/raspberry-lemonade-drink_123827-22232.jpg?size=626&ext=jpg&uid=R50739859&ga=GA1.2.1532466403.1676939380&semt=sph" />
                                    </div>
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
 name: 'HomeApp',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icons {
  font-size: 40px;
  color: black;
}


.image{

  max-height: 700px;
}
/* Media queries */
@media (max-width: 768px) {
  /* Adjust card width and spacing for smaller screens */
  .col-md-4 {
    flex: 0 0 100%; /* Make cards span the full width */
    margin: 1rem 0;
  }
  
 .impart{
  border-radius: 50px;
 }

}
</style>
