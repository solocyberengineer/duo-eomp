<template>
  <div class="container-fluid ">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
<div id="searchP">
  <input type="text" v-model="searchItem" placeholder="Search a product" required class="form-control m-1" :onKeyup="searchProduct">
  <button class=" btn btn-danger p-2 g-2 mx-2">Sort</button>
  <button class=" btn btn-danger p-2 g-2">Filter</button>
</div>
<!-- <div v-if="filterProducts.length === 0">
<p>No product found</p>
</div>
<div v-else>
  <div class="filter-products">
    <Card v-for="product in filterProducts" :key="product.id">
        <template #cardHeader>
          <h4 class="card-title">{{ product.category }}</h4>
          <img :src="product.prodUrl" class="img-fluid card-img-top" alt="image">

        </template>
        <template #cardBody>
          <div class="d-flex justify-content-center flex wrap ">
            <h5>{{ product.prodName }}</h5>

            <p class="card-text">{{ product.quantity }} </p>
          </div>
        </template>
        <template #cardFooter>
          <router-link :to="`/product/${product.prodID}`"  class="btn btn-danger">View details</router-link>
        </template>
      </Card>
  </div> -->
<!-- </div> -->
    <div v-if="products" class="bg-light d-flex flex-wrap row-cols-md-4 mx-2 g-4">
      <Card v-for="prod in products" :key="prod.id">
        <template #cardHeader>
          <h4 class="card-title">{{ prod.category }}</h4>
          <img :src="prod.prodUrl" class="img-fluid card-img-top" alt="image">

        </template>
        <template #cardBody>
          <div class="d-flex justify-content-center flex wrap ">
            <h5>{{ prod.prodName }}</h5>

            <p class="card-text">{{ prod.quantity }} </p>
          </div>
        </template>
        <template #cardFooter>
          <router-link :to="`/product/${prod.prodID}`"  class="btn btn-danger">View details</router-link>
        </template>
      </Card>
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  data(){
return{
  searchItem: ""
}
  },

  components: {
    Card
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts")
  },
  methods:{
    searchProduct(){

    }
  }
}
</script>

<style scoped></style>