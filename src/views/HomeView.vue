<template>
    <div class="home bg-secondary">
        <div id="homeCarousel" class="carousel slide carousel-fade bg-dark h-100" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-current="true"
                    aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner h-100">
                <div class="home carousel-item active h-100">
                    <div class="row g-0 d-flex h-100">
                        <div class="col-lg-3 d-sm-none d-lg-block"></div>
                        <div class="col-sm-12 col-lg-6 p-5 flex-fill d-flex flex-column justify-content-evenly mx-auto">
                            <h4 class="title display-4 fw-bold">Heaven Delights</h4>
                            <h5 class="display-5 fs-1 fw-bold text-white text-start">Catering</h5>
                            <p class="fs-7 text-white fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci enim nostrum aut quae sit aperiam aliquid ducimus fugit, unde ab ipsum facilis id
                                sed recusandae in commodi quibusdam doloremque sint.</p>
                        </div>
                        <div class="col-sm-12 col-lg-3 d-flex align-items-start justify-content-end">
                            <button class="btn my-5 home-carousel-btn d-flex align-items-center justify-content-center shadow"><span>Go
                                    to</span><i class="bi bi-arrow-right-circle m-1"></i></button>
                        </div>
                    </div>
                </div>
                <div class="home carousel-item h-100" style="background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/3Mj0rZd/rachel-park-hrlvr2-Zl-UNk-unsplash.jpg)">
                    <div class="row g-0 d-flex h-100">
                        <div class="col-lg-3 d-sm-none d-lg-block"></div>
                        <div class="col-sm-12 col-lg-6 p-5 flex-fill d-flex flex-column justify-content-evenly mx-auto">
                            <h4 class="title display-4 fw-bold">Heaven Delights</h4>
                            <h5 class="display-5 fs-1 fw-bold text-white text-start">Catering</h5>
                            <p class="fs-7 text-white fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Adipisci enim nostrum aut quae sit aperiam aliquid ducimus fugit, unde ab ipsum facilis id
                                sed recusandae in commodi quibusdam doloremque sint.</p>
                        </div>
                        <div class="col-sm-12 col-lg-3 d-flex align-items-start justify-content-end">
                            <button class="btn my-5 home-carousel-btn d-flex align-items-center justify-content-center shadow"><span>Go
                                    to</span><i class="bi bi-arrow-right-circle m-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="banner bg-warning shadow d-flex align-items-center justify-content-center">
            <h5 class="fw-bold text-white">What we Offer</h5>
        </div> -->
        <!-- <div class="bg-white">
            asd
        </div> -->
    </div>
</template>

<script>

// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {

    }
}
</script>

<style scoped>
.title {
    font-family: "Arial";
    -webkit-text-stroke: 1px white;
    color: transparent;
}

.home {
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://i.ibb.co/2kVNR61/dan-gold-4-jh-DO54-BYg-unsplash.jpg);
    background-position: center;
    height: 90vh;
    backdrop-filter: blur(2px);
}

.home-carousel-btn {
    background-color: var(--primary);
    color: white;
    width: 40%;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;

    &:hover {
        color: white;
        backdrop-filter: blur(8px);
    }
}
.banner {
    height: 10vh;
}
</style>
