<template>
    <nav class="navbar navbar-expand-lg shadow bg-warning sticky-top p-0">
        <div class="container-fluid w-100 h-100">
            <a href="#" class="navbar-brand h-100 d-flex align-items-center justify-content-center">
                <h5 class="logo display-5 fw-bolder">HD</h5>
            </a>
            <button class="btn btn-danger shadow d-lg-none d-sm-block" id="navbarNav"><i class="bi bi-list"></i></button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item m-1">
                        <a class="btn btn-danger shadow rounded-5 active" aria-current="page" href="#">Store</a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="btn btn-danger shadow rounded-5" aria-current="page" href="#">Products</a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="btn btn-danger shadow rounded-5" aria-current="page" href="#">About</a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="btn btn-danger shadow rounded-5" aria-current="page" href="#">Admin</a>
                    </li>
                    <li class="nav-item m-1">
                        <a class="btn btn-danger shadow rounded-5" aria-current="page" href="#">Contact Us</a>
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

<style scoped>
.navbar {
    height: 10vh;
    background-color: transparent;
}
.logo {
    -webkit-text-stroke: 2px white;
    color: transparent;
}
</style>