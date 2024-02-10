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
