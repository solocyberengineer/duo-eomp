<template>
  <div class="container-fluid ">
    <div class="row">
      <h2 class="display-2">Products</h2>
    </div>

    <div v-if="products" class="bg-light d-flex row col">
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
  }
}
</script>

<style lang="scss" scoped></style>