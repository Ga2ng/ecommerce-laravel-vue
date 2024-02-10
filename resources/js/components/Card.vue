<template>
  <div class="custom-card">
    <img :src="imageSrc" class="card-img-top" alt="Brand Image">
    <div class="card-body">
      <h5 class="card-title mt-3 fw-bold">{{ brandName }}</h5>
      <p>IDR. {{ formattedPrice }},-</p>
      <ButtonState label="Add To Cart" :onClick="handleButtonClick" ></ButtonState>
    </div>
  </div>
</template>

<script>

export default {
    props: {
        brandName: {
            type: String,
            required: true
        },
        imageSrc: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    computed: {
        formattedPrice() {
            // Menggunakan toLocaleString untuk memformat angka menjadi string dengan tanda titik sebagai pemisah ribuan
            return this.price.toLocaleString('id-ID');
        }
    },
    methods: {
        handleButtonClick() {
            console.log('Tombol diklik!');
            // Tambahkan logika Anda di sini
        }
    }
};
</script>

<style scoped>
/* Gaya CSS untuk komponen Card */
.custom-card {
  width: 18rem;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Efek shadow */
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

</style>
