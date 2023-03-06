import { d as defineStore } from '../server.mjs';

const initialState = {
  status: {
    loggedIn: false
  },
  user: {}
};
const useAuthStore = defineStore({
  id: "auth",
  state: () => initialState,
  getters: {
    userName: (state) => {
      var _a;
      return (_a = state.user) == null ? void 0 : _a.username;
    }
  },
  actions: {
    updateUser(data) {
      this.user = data;
    },
    loginSuccess(_token = "") {
      this.status.loggedIn = true;
      localStorage.setItem("accessToken", _token);
    },
    logout() {
      this.status.loggedIn = false;
      this.user = {};
      localStorage.removeItem("accessToken");
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=authStore.812c8117.mjs.map
