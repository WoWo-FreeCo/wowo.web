import { d as defineStore } from '../server.mjs';

const initialState = {
  merch: []
};
const useCartStore = defineStore({
  id: "cart",
  state: () => initialState,
  getters: {},
  actions: {
    updateMerch(_category, _items) {
    }
  }
});

export { useCartStore as u };
//# sourceMappingURL=cartStore.8a46ad15.mjs.map
