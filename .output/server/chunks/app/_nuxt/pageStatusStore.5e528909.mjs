import { d as defineStore } from '../server.mjs';

const initialState = {
  bellMessageToggle: false,
  adminOverlayToggle: false
};
const usePageStatusStore = defineStore({
  id: "pageStatus",
  state: () => initialState,
  getters: {},
  actions: {
    toggleBellMessage(_toggle) {
      this.bellMessageToggle = _toggle;
    },
    toggleAdminOverlay(_toggle) {
      this.adminOverlayToggle = _toggle;
    }
  }
});

export { usePageStatusStore as u };
//# sourceMappingURL=pageStatusStore.5e528909.mjs.map
