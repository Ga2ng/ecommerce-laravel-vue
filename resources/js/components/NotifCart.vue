<template>
  <li class="nav-item">
    <router-link class="nav-link" to="/cart">
      <img src="../../assets/cart.svg" />
      <span v-if="cartNotification > 0" class="badge rounded-pill badge-primary bg-danger">{{ cartNotification }}</span>
    </router-link>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      // Mengambil nilai cartNotification dari getters Vuex
      cartNotification: 'cartNotification'
    }),
  }
};
</script>

<style scoped>
/* Style sesuai kebutuhan */
</style>
