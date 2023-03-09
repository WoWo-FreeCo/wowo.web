import { defineStore } from 'pinia';

type State = {
  bellMessageToggle: boolean;
  adminOverlayToggle: boolean;
  videoDialogToggle: boolean;
  shareAccountToggle: boolean;
  dailyVideoURL: string;
}

const initialState: State = {
  bellMessageToggle: false,
  adminOverlayToggle: false,
  videoDialogToggle: false,
  shareAccountToggle: false,
  dailyVideoURL: ''
};

export const usePageStatusStore = defineStore({
  id: 'pageStatus',
  state: () => initialState,
  getters: {
    //
  },
  actions: {
    toggleBellMessage(_toggle: boolean) {
      this.bellMessageToggle = _toggle;
    },
    toggleAdminOverlay(_toggle: boolean) {
      this.adminOverlayToggle = _toggle;
    },
    toggleVideoDialog(_toggle: boolean) {
      this.videoDialogToggle = _toggle;
    },
    toggleShareAccount(_toggle: boolean) {
      this.shareAccountToggle = _toggle;
    },
    setDailyVideoURL(_url: string) {
      this.dailyVideoURL = _url;
      console.log(_url);
    }
  }
});
