import { createStore } from 'vuex';
import cartNotif from './modules/cartNotif';

const store = createStore({
  modules: {
    cartNotif
  }
});

export default store;
