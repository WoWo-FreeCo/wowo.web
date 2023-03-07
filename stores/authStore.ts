import { defineStore } from 'pinia';

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
    loginSuccess(_token = '', _rt = '') {
      // TODO: add login flow
      this.status.loggedIn = true;
      console.log('abc, ', _rt);

      localStorage.setItem('accessToken', _token);
      localStorage.setItem('refreshToken', _rt);
    },
    logout() {
      this.status.loggedIn = false;
      this.user = {};
      localStorage.removeItem('accessToken');
    }
  }
});
