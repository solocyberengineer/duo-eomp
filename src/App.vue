<template>
  <div>
    <NavBar />
    <main class="container-fluid p-0">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';
// import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    // Footer
  }
}
</script>

<style src="./assets/style.css"></style>
