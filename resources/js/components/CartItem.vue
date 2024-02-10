<template>
  <div class="cart-item row mb-3">
    <div class="col"><img :src="product.imageSrc" class="img-fluid" alt="Product Image"></div>
    <div class="col">{{ product.brandName }}</div>
    <div class="col">Quantity: {{ quantity }}</div>
    <div class="col">Price: IDR {{ formattedPrice }},-</div>
    <div class="col">Total Price: IDR {{ formattedTotalPrice }},-</div>
    <div class="col">
      <div class="d-flex gap-2">
        <button class="btn btn-danger btn-sm" @click="decrement">-</button>
        <button class="btn btn-primary btn-sm" @click="increment">+</button>
        <button class="btn btn-danger btn-sm" @click="removeItem"><img src="../../assets/trash.svg" /></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    quantity: Number
  },
  computed: {
    formattedPrice() {
      // Menggunakan toLocaleString untuk memformat angka menjadi string dengan tanda titik sebagai pemisah ribuan
      return this.product.price.toLocaleString('id-ID');
    },
    formattedTotalPrice() {
      // Menggunakan toLocaleString untuk memformat angka menjadi string dengan tanda titik sebagai pemisah ribuan
      return (this.product.price * this.quantity).toLocaleString('id-ID');
    }
  },
  methods: {
    increment() {
      this.$emit('increment');
    },
    decrement() {
      this.$emit('decrement');
    },
    removeItem() {
      this.$emit('remove');
    }
  }
};
</script>

<style scoped>
/* Styling sesuai kebutuhan */
</style>
