<template>
    <nav class="navbar navbar-expand-lg shadow bg-warning sticky-top p-0">
        <div class="container-fluid w-100 h-100">
            <a href="#" class="navbar-brand h-100 d-flex align-items-center justify-content-center">
                <h5 class="logo display-5 fw-bolder">HD</h5>
            </a>
            <button class="btn btn-danger shadow d-lg-none d-sm-block" data-bs-toggle="offcanvas"
                data-bs-target="#sideNav"><i class="bi bi-list"></i></button>
            <div class="collapse navbar-collapse ms-auto" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item m-1">
                        <router-link to="/" class="btn btn-danger shadow rounded-5"
                            :class="{ 'active': this.activePage() === 0 }" href="#">Store</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link to="/products" class="btn btn-danger shadow rounded-5"
                            :class="{ 'active': this.activePage() === 1 }" href="#">Products</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link to="/about" class="btn btn-danger shadow rounded-5"
                            :class="{ 'active': this.activePage() === 2 }" href="#">About</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link to="/admin" class="btn btn-danger shadow rounded-5"
                            :class="{ 'active': this.activePage() === 3 }" href="#">Admin</router-link>
                    </li>
                    <li class="nav-item m-1">
                        <router-link to="/contact" class="btn btn-danger shadow rounded-5"
                            :class="{ 'active': this.activePage() === 4 }" href="#">Contact Us</router-link>
                    </li>
                </ul>
            </div>
            <div class="offcanvas offcanvas-end bg-danger" tabindex="" id="sideNav" aria-labelledby="sideNavLabel">
                <div class="offcanvas-header d-flex justify-content-between">
                    <h5 class="offcanvas-title fw-bolder text-white fs-4 d-lg-none d-sm-" id="sideNavLabel">Heaven Delights</h5>
                    <button type="button" class="btn btn-danger shadow d-lg-none d-sm-block" data-bs-dismiss="offcanvas" aria-label="Close"><i class="bi bi-x-circle"></i></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav d-lg-none d-sm-block">
                        <li class="nav-item m-1">
                            <router-link to="/" class="btn btn-danger shadow w-100 rounded-5"
                                :class="{ 'active': this.activePage() === 0 }" href="#">Store</router-link>
                        </li>
                        <li class="nav-item m-1">
                            <router-link to="/products" class="btn btn-danger shadow w-100 rounded-5"
                                :class="{ 'active': this.activePage() === 1 }" href="#">Products</router-link>
                        </li>
                        <li class="nav-item m-1">
                            <router-link to="/about" class="btn btn-danger shadow w-100 rounded-5"
                                :class="{ 'active': this.activePage() === 2 }" href="#">About</router-link>
                        </li>
                        <li class="nav-item m-1">
                            <router-link to="/admin" class="btn btn-danger shadow w-100 rounded-5"
                                :class="{ 'active': this.activePage() === 3 }" href="#">Admin</router-link>
                        </li>
                        <li class="nav-item m-1">
                            <router-link to="/contact" class="btn btn-danger shadow w-100 rounded-5"
                                :class="{ 'active': this.activePage() === 4 }" href="#">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            paths: {
                '/': 0,
                '/products': 1,
                '/about': 2,
                '/admin': 3,
                'contact': 4
            },
            currentPath: null
        }
    },
    mounted() {
    },
    methods: {
        activePage() {
            console.log(this.paths[this.$route.path]);
            return this.paths[this.$route.path];
        }
    }
}
</script>

<style scoped>.navbar {
    height: 10vh;
    background-color: transparent;
}

.logo {
    -webkit-text-stroke: 2px white;
    color: transparent;
}</style>