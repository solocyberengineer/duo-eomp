<template>
     <div class="container vh-100">
<div class="row">
  <h2 class="display-2">Products</h2>
</div>
<div v-if="displayProduct">
  <div v-for="prod in displayProduct" :key="prod.id">


    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-100">
        <img :src="prod.prodUrl" class="card-img-top" alt="image">
        <div class="card-body">
          <h4 class="card-title">{{ prod.category }}</h4>
          <h5 >{{ prod.prodName }}</h5>
          <p class="card-text">{{ prod.quantity }} </p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary">{{ prod.amount }}</small>
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
      computed: {
        displayProduct(){
          return this.$store.state.product
        },
  
      },
      mounted(){
        this.$store.dispatch("fetchProduct")
      }

    }
</script>

<style lang="scss" scoped>

</style>