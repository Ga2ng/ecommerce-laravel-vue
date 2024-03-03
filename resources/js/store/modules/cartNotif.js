import axios from "axios";

const state = {
  cartItems: [], // Menggunakan array untuk menyimpan detail produk
};

const getters = {
  cartNotification(state) {
    let totalQuantity = 0;
    for (const item of state.cartItems) {
      totalQuantity += parseInt(item.quantity);
    }
    return totalQuantity;
  }
};

const actions = {
  updateCartNotification(context, notification) {
    console.log("notification:", notification);
    context.commit('incrementCartItem', notification); // Memanggil mutasi incrementCartItem dengan ID yang diberikan
  },
  async getAllData() {
    try {
      let response = await axios.get("/api/getAllData"); // Sesuaikan dengan URL yang Anda daftarkan di Laravel
      console.log(response);
      return response.data; // Mengembalikan data yang diperoleh dari server
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error; // Melempar error ke komponen yang memanggil aksi ini
    }
  }
};

const mutations = {
  incrementCartItem(state, id) {
    const existingItem = state.cartItems.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      state.cartItems.push({ id: id, quantity: 1 });
    }
  }
};

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
};
