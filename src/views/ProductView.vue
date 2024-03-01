<template>
    <div class="container ">
        <div class="row">
            <h2 class="display-2">Product</h2>
        </div>
        <div v-if="product" class="bg-light " >
            <Card :key="product.prodID" class="row" id="prodImg" >
                
                <template #cardHeader><div class="col"><h2>Category</h2><h3>{{ product.category }}</h3> </div>
                    <img :src="product.prodUrl" class="img-fluid card-img-top "   alt="image"></template>
                <template #cardBody>
                    <div class=" col bg-danger"><h3>Price</h3><p>R {{ product.amount }}</p> </div></template>
                <template #cardFooter><div class="bg-light ">{{ product.quantity }}</div></template>
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
        product() {
            return this.$store.state.product;
        },
    },
    mounted() {
        let product = this.$route.path.split('/').at(-1);
        this.$store.dispatch("fetchProduct", product);
    }
}
</script>

<style  scoped>
#prodImg{
    display: flex;
    width: 550px;
    height: 350px;
}

</style>