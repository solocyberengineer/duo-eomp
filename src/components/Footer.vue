<template>
    <div class="container-fluid feet shadow bg-warning">
<div class="row">
    <p class="lead">Heaven's Delight &copy;<span> {{ currYear }}</span> </p>

</div>
    </div>
</template>

<script>
    export default {
       name: 'FooterComp',
       data(){
        return{
            currYear: new Date().getFullYear()
        }
       }
    }
</script>

<style lang="scss" scoped>

</style>