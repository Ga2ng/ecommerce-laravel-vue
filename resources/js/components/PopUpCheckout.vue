<template>
  <div class="popup-container">
    <div class="popup">
      <h3 class="mb-4">Checkout</h3>
      <div class="mb-3">
        <p>Total Price: IDR {{ formatPrice(totalPrice) }},-</p>
      </div>
      <div class="d-flex justify-content-between">
        <button @click="closePopup" class="btn btn-danger">Cancel</button>
        <button @click="checkout" class="btn btn-success">Checkout</button>
      </div>
    </div>
    <div class="overlay" @click="closePopup"></div>
  </div>
</template>

<script>
export default {
  props: {
    totalPrice: {
      type: Number,
      required: true
    }
  },
  methods: {
    closePopup() {
      this.$emit('close'); // Mengirimkan event close ke parent component
    },
    checkout() {
      // Logika checkout
      alert('Checkout successful!'); // Ubah dengan logika sesuai kebutuhan
      window.location.reload(); // Refresh halaman setelah checkout
    },
    formatPrice(price) {
      // Format angka dengan tanda . setiap 3 angka
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>

<style scoped>
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1000; /* Pastikan nilai z-index lebih tinggi dari overlay */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999; /* Pastikan nilai z-index lebih rendah dari popup */
}
</style>
