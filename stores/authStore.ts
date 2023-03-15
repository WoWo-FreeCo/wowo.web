import { defineStore } from 'pinia';
import { useCartStore } from './cartStore';
import { GET_PROFILE } from '@/apis/requestURL';

// const user = JSON.parse(localStorage.getItem('user') as string);

type State = {
  status: {
    loggedIn: boolean
  };
  user: any | {};
}

const initialState: State = {
  status: {
    loggedIn: false
  },
  user: {
  }
};

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => initialState,
  getters: {
    userName: state => state.user?.username
  },
  actions: {
    updateUser(data: {}) {
      this.user = data;
    },
    async loginSuccess(_token = '', _rt = '') {
      // TODO: add login flow
      this.status.loggedIn = true;

      localStorage.setItem('accessToken', _token);
      localStorage.setItem('refreshToken', _rt);
      const cartStore = useCartStore();
      await cartStore.fetchCart();
      await this.fetchUserProfile();
    },
    logout() {
      const cartStore = useCartStore();
      this.status.loggedIn = false;
      this.user = {};
      localStorage.removeItem('accessToken');
      cartStore.clearMerch();
    },
    async fetchUserProfile() {
      const config = useRuntimeConfig();
      const accessToken = localStorage.getItem('accessToken');
      try {
        const res = await $fetch(`${config.public.apiBase}/${GET_PROFILE}`, {
          method: 'GET',
          headers: { Authorization: 'Bearer ' + accessToken }
        });
        this.updateUser(res.data);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    }
  }
});
