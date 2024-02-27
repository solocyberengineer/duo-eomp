<template>
    <nav class="navbar navbar-expand-lg justify-end sticky-top">
  <div class="container-fluid">
    <img src="https://i.ibb.co/6g2TwNM/Screenshot-2024-02-26-161040.png" class="navbar-brand" href="#">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" href="#">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" href="#">Admin</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" href="#">Contact us</router-link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>