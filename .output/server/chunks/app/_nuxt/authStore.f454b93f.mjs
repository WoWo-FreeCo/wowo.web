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
    loginSuccess(_token = "", _rt = "") {
      this.status.loggedIn = true;
      console.log("abc, ", _rt);
      localStorage.setItem("accessToken", _token);
      localStorage.setItem("refreshToken", _rt);
    },
    logout() {
      this.status.loggedIn = false;
      this.user = {};
      localStorage.removeItem("accessToken");
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=authStore.f454b93f.mjs.map
