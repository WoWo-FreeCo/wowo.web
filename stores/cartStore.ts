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
    updateMerch(_merch: []) {
      // TODO: add merch updating flow
      this.merch = _merch;
      localStorage.setItem('cart-product', JSON.stringify(this.merch));
      console.log('–––––––– update merch');
    }
  }
});
