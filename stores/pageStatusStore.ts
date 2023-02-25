import { defineStore } from 'pinia';

type State = {
  bellMessageToggle: boolean
}

const initialState: State = {
  bellMessageToggle: false
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
    }
  }
});
