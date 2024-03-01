<template>
  <div class="container vh-100">
<div class="row">
  <h2 class="display-2">About</h2>
</div>
<div class="bg-dark rounded-5 slide-in shadow p-1">
  <p>


    <span class="about text-white">We are a local capetonian  catering company delivering our products since 1/1/2024.
  It was started by Rezaar Osman and Ghamzah Samuels.We saw a need  to provide 
  for different local events with adequate prices. Starting out we provided services to
  our family and friends and since then our clientele has grown tremendously </span>
  </p>
</div>
<div class="animation">
  <h2 class="anime fw-bolder text-white ">Heaven Delights</h2>
</div>
</div>

</template>
<style scoped>
.about{
  font-weight: 150;
  font-size: large;
}

.anime{
  font-size: 140px;
 
}
.animation{
  position: relative;
  animation: fallFromTop 1.5s ease forwards
}
@keyframes fallFromTop{
  from{
    transform: translateY(-100%);
    opacity:0
  }
  to{
    transform: translateY(0);
    opacity: 1;
  }
}
.slide-in{
  animation: slideIn 4s forwards;
  opacity: 0
}
@keyframes slideIn{
  from {
    transform: rotateX(-180deg);
    opacity: 0
  }
  to{
    transform: rotateX(0);
    opacity: 1
  }
}
@media (300px<= width<=900px){
   .anime{
    font-size: 100px
   } 
}
</style>