<template>
  <div>
    <router-link class="buttons" :to="to">{{ label }}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
  }
};
</script>

<style>

/* .buttons {
  background: #D3242B;
} */

.buttons {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  color: #fff; /* Warna teks putih */
  background-color: #D3242B; /* Warna background */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.buttons:hover {
  /* Efek hover saat kursor di atas tombol */
  background-color: #f1444a; /* Warna latar belakang menjadi putih */
  /* color: #D3242B;  */
  /* border-color: #D3242B; */
}



</style>
