import { defineStore } from 'pinia';

// const user = JSON.parse(localStorage.getItem('user') as string);

type State = {
  merch: any[];
  favMerch: any[];
}

const initialState: State = {
  merch: [],
  favMerch: []
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
      this.merch = _merch.filter((e: any) => e?.inventory?.quantity >= 1);
      localStorage.setItem('cart-product', JSON.stringify(this.merch));
      // console.log('–––––––– update merch');
    },
    updateFavMerch(_favMerch: []) {
      this.favMerch = _favMerch.filter((e: any) => e?.inventory?.quantity >= 1);
      localStorage.setItem('cart-fav-product', JSON.stringify(this.favMerch));
      // console.log('–––––––– update fav merch');
    }
  }
});
