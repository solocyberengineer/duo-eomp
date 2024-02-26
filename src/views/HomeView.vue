<template>
<div class="home container">
<div class="row">
  <h2 class="display-2">Home</h2>
</div>
<div class="catogaries">
 <h4>Welcome to </h4>
  <div class="p-5">
  <h6 id="logotext">Heaven's Delights</h6></div>
  
  <h5>For all your sweet and savoury catering with refreshments included like:</h5>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://i.ibb.co/8nkPTqT/images.jpg" class="carisol d-block w-25" alt="sweet treats">
      <div class="carousel-caption d-none d-md-block">
        <h5>Sweet Treats</h5>

      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://i.ibb.co/JzsK0vd/download.jpg" class="carisol d-block w-25" alt="savouries">
      <div class="carousel-caption d-none d-md-block">
        <h5>Savouries</h5>
       
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://i.ibb.co/ZWvKWL3/download-1.jpg" class="carisol d-block w-25" alt="refreshments">
      <div class="carousel-caption d-none d-md-block">
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

<style>
.home {
  background-color: yellow;
}

</style>
