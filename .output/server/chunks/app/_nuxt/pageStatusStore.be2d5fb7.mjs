import { d as defineStore } from '../server.mjs';

const initialState = {
  bellMessageToggle: false,
  adminOverlayToggle: false,
  videoDialogToggle: false,
  shareAccountToggle: false
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
    },
    toggleVideoDialog(_toggle) {
      this.videoDialogToggle = _toggle;
    },
    toggleShareAccount(_toggle) {
      this.shareAccountToggle = _toggle;
    }
  }
});

export { usePageStatusStore as u };
//# sourceMappingURL=pageStatusStore.be2d5fb7.mjs.map
