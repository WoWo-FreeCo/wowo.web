import { defineStore } from 'pinia';
import { GET_USER_CART, POST_USER_CART, GET_USER_CART_DETAIL } from '@/apis/requestURL';
import { ProductType } from '@/constants/common';

// const user = JSON.parse(localStorage.getItem('user') as string);

type State = {
  merch: any[];
  coldMerch: any[];
  generalMerch: any[];
  favMerch: any[];
}

const initialState: State = {
  merch: [],
  coldMerch: [],
  generalMerch: [],
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
      this.merch = _merch;
      console.log('–––––––– update merch');
      console.log(this.merch);
    },
    updateFavMerch(_favMerch: []) {
      this.favMerch = _favMerch.filter((e: any) => e?.inventory?.quantity >= 1);
      localStorage.setItem('cart-fav-product', JSON.stringify(this.favMerch));
      // console.log('–––––––– update fav merch');
    },
    async fetchCart() {
      const config = useRuntimeConfig();
      let generalId, coldId;
      try {
        // 確認是否有商品購物車 -> 一般 ＆ 冷鏈
        const res = await $fetch(`${config.public.apiBase}/${GET_USER_CART}`, {
          method: 'GET',
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        });
        const foundGeneral = res.data.find((e: any) => e.attribute === ProductType.General);
        const foundCold = res.data.find((e: any) => e.attribute === ProductType.ColdChain);
        if (!foundGeneral) {
          const resGeneral = await this.postUserCart(ProductType.General);
          generalId = resGeneral.data?.id;
        } else {
          generalId = foundGeneral?.id;
        }
        if (!foundCold) {
          const resCold = await this.postUserCart(ProductType.ColdChain);
          coldId = resCold.data?.id;
        } else {
          coldId = foundCold?.id;
        }
        await this.fetchCartDetails({
          generalId,
          coldId
        });
      } catch (e) {
        console.log(e);
      }
    },
    async postUserCart(type: ProductType) {
      const config = useRuntimeConfig();
      return await $fetch(`${config.public.apiBase}/${POST_USER_CART}`, {
        method: 'POST',
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        },
        body: {
          attribute: type
        }
      });
    },
    async fetchCartDetails({ generalId, coldId }: {
      generalId: number,
      coldId: number
    }) {
      const config = useRuntimeConfig();
      console.log(generalId, coldId);
      try {
        // 先取得一般商品購物車
        const resGeneral = await $fetch(`${config.public.apiBase}/${GET_USER_CART_DETAIL(generalId)}`, {
          method: 'GET',
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        });
        const resCold = await $fetch(`${config.public.apiBase}/${GET_USER_CART_DETAIL(coldId)}`, {
          method: 'GET',
          headers: {
            authorization: 'Bearer ' + localStorage.getItem('accessToken')
          }
        });

        const generalMerch: [] = [];
        const coldMerch: [] = [];
        // 一般
        resGeneral.data?.cartItems.forEach((e: any) => {
          generalMerch.push(
            {
              ...e?.product,
              quantity: e?.quantity
            } as never
          );
        });
        // 冷鏈
        resCold.data?.cartItems.forEach((e: any) => {
          coldMerch.push(
            {
              ...e?.product,
              quantity: e?.quantity
            } as never
          );
        });
        //
        this.updateMerch([
          ...generalMerch,
          ...coldMerch
        ]);
        console.log(resGeneral, resCold);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
