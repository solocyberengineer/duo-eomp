<template>
  <div class="container-fluid ">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <div id="searchP">
      <input type="text" v-model="searchItem" @input="search" placeholder="Search a product..." required
        class="form-control m-1">
      <button class=" btn btn-danger p-2 g-2 mx-2" @click="sortProducts">Sort by Price</button>
      <button class=" btn btn-danger p-2 g-2" @click="filter">Filter</button>
    </div>

    <div v-if="products" class=" d-flex flex-wrap row-cols-md-4 mx-2 g-4">
      <Card v-for="prod in products" :key="prod.id" class="mx-1">
        <template #cardHeader>
          <h4 class="card-title bg-white">{{ prod.category }}</h4>
          <img :src="prod.prodUrl" class="img-fluid card-img-top" alt="image">

        </template>
        <template #cardBody>
          <div class="d-flex justify-content-center flex wrap bg-white ">
            <h5>{{ prod.prodName }}</h5>
          </div>
        </template>
        <template #cardFooter>
          <router-link :to="`/product/${prod.prodID}`" class="btn btn-danger">View details</router-link>
        </template>
      </Card>
    </div>

  </div>
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  data() {
    return {
      searchItem: "",
      searchedProducts: null,
      priceToggle: false
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
  methods: {
    async search() {
      await this.$store.dispatch('fetchProducts');
      this.searchedProducts = this.products.filter((item) => {
        if (item.prodName.toLowerCase().includes(this.searchItem.toLowerCase())) return item;
      })
      this.$store.dispatch('setProducts', this.searchedProducts);
    },
    sortProducts() {
      let products = (this.searchedProducts) ? this.searchedProducts : this.products;
      console.log(products)

      this.priceToggle = (this.priceToggle) ? false : true;
      if (this.priceToggle) {
        products.sort((a, b) => {
          return a.amount - b.amount
        })
      } else {
        products.sort((a, b) => {
          return b.amount - a.amount
        })
      }
    }
  }
}
</script>