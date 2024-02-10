<template>
  <div class="about-page">
    <div class="container text-center d-flex flex-column justify-content-center align-items-center">
      <h1 class="display-3 mb-5">About Us</h1>
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <p class="lead">Website ini dibuat secara ugal-ugalan, begadang, dan menggunakan hati yang tulus dan ikhlas💪</p>
          <p class="lead">Saya masih pemula dan ingin belajar banyak tentang dunia website, jadi mohon bimbanganya puh sepuhhhh🙏🙏</p>
        </div>
      </div>
      <div class="icon row mt-5">
        <div class="col-md-6">
          <a href="https://www.instagram.com/ga2ng_p" target="_blank" class="social-link">
            <img src="../../assets/instagram.svg" alt="Instagram Logo" class="img-fluid social-logo">
          </a>
        </div>
        <div class="icon col-md-6">
          <a href="https://github.com/Ga2ng" target="_blank" class="social-link">
            <img src="../../assets/github.svg" alt="GitHub Logo" class="img-fluid social-logo">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding: 50px 0;
  margin-top: 150px;
}

.social-link {
  display: inline-block;
  margin: 0 auto;
}

.social-logo {
  width: 30px;
  height: auto;
  margin-bottom: 20px;
}

</style>
