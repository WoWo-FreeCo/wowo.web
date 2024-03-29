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
    loginSuccess(_token = '') {
      // TODO: add login flow
      this.status.loggedIn = true;
      localStorage.setItem('accessToken', _token);
    },
    logout() {
      this.status.loggedIn = false;
      this.user = {};
      localStorage.removeItem('accessToken');
    }
  }
});
