import { e as defineStore } from '../server.mjs';

const initialState = {
  bellMessageToggle: false,
  adminOverlayToggle: false,
  videoDialogToggle: false,
  shareAccountToggle: false,
  dailyVideoURL: ""
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
    },
    setDailyVideoURL(_url) {
      this.dailyVideoURL = _url;
      console.log(_url);
    }
  }
});

export { usePageStatusStore as u };
//# sourceMappingURL=pageStatusStore.795bbe6d.mjs.map
