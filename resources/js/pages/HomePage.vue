<template>
  <div class="jumbotron">
    <h1 class="display-4 fw-bolder">Sneakers that steal the spotlight, wherever you step.</h1>
    <p class="lead">Elevate your everyday with premium kicks, handcrafted for comfort and style. Shop our latest collection and find your perfect pair.</p>
    <!-- <router-link to="/shop" class="btn btn-lg">Get Started</router-link> -->
    <ButtonDirect to="/shop" label="Get Started" linkClass="" ></ButtonDirect>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>


h1, p{
  /* color: #CAFF33; */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1); 
}
.jumbotron {
  background-image: url('../../assets/darkjordan.png');
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  height: 100vh; /* Tinggi elemen 100% tinggi layar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
