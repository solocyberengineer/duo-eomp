<template>
<div class="home container ">
<div class="row">
  <h2 class="display-2">Home</h2>
</div>
<div class="catigories" >
 <h4>Welcome to </h4>
  <div class="p-5">
  <h6 id="logotext">Heaven's Delights</h6></div>
  
  <h5>For all your sweet and savoury catering with refreshments included like:</h5>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner align-content-center">
    <div class="carousel-item active " data-bs-interval="10000">
      <img src="https://i.ibb.co/8nkPTqT/images.jpg" class="carisol d-block w-25 mx-auto mb-5" alt="sweet treats">
      <div class="carousel-caption  d-md-block w-25 align-items-center">
        <h5>Bakery</h5>

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/JzsK0vd/download.jpg" class="carisol d-block w-25 mx-auto mb-5" alt="savouries">
      <div class="carousel-caption  d-md-block w-25">
        <h5>Savouries</h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/ZzJLy9F/Sprite-Lemon-Lime-Flavoured-Drink-2-L-5449000234636.jpg" class="carisol d-block w-25 mx-auto mb-5" alt="refreshments">
      <div class="carousel-caption d-sm-block d-md-block w-25">
        <h5>Refreshments</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  }
}
</script>

<style scoped>
.catigories{
  font-weight: bolder;
  color: white;

}
.carousel-caption{

  background-color: black;
  bottom: 0;
  text-align: center;
  margin-left: 251px;
  border-bottom: 30% 30%;
}
@media (300px<= width<=900px){
   .carousel-caption{
    align-items: center;
   } 
}
</style>
