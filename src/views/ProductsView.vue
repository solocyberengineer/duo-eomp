<template>
  <div class="container ">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>
    <!-- {{products}} -->
    <div v-if="products" class="bg-light col-6 col-md-4 ">
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

                <small class="text-body-secondary">{{ prod.amount }}</small>
              </template>
            
      

  
    </Card>
  </div>

  </div>
  
</template>

<script>
import Card from '@/components/Card.vue';
export default {
  components: {
    Card
  },
  computed: {
    products() {
      console.log(this.$store.state.products);
      return this.$store.state.products;
    },

  },
  mounted() {
    this.$store.dispatch("fetchProducts")
  }

}
</script>

<style lang="scss" scoped></style>