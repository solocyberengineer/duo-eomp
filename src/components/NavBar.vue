<template>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" href="#">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product" class="nav-link" href="#">Product</router-link>
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