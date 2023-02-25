import { defineStore } from 'pinia';

// const user = JSON.parse(localStorage.getItem('user') as string);

type State = {
  merch: []
}

const initialState: State = {
  merch: []
};

export const useCartStore = defineStore({
  id: 'cart',
  state: () => initialState,
  getters: {
    // normalMerch: state => state.cartMerch.normal,
    // coldChainMerch: state => state.cartMerch.coldChain
  },
  actions: {
    updateMerch(_category: 'Normal' | 'ColdChain', _items: []) {
      // TODO: add merch updating flow
    }
  }
});
