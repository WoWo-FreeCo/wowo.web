import { defineStore } from 'pinia';

type State = {
  bellMessageToggle: boolean,
  adminOverlayToggle: boolean
}

const initialState: State = {
  bellMessageToggle: false,
  adminOverlayToggle: false
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
    }
  }
});
