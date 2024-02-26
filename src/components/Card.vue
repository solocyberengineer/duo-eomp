<template>
    <div class="Card">
        <div class="card-header">
            <slot name="cardHeader">

            </slot>

        </div>
<div class="card-body">
    <slot name="cardBody"></slot>
</div>
    </div>
</template>

<script>
    export default {
        name: 'CardView'
    }
</script>

<style lang="scss" scoped>

</style>