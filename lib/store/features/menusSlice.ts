import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  menus: string[];
  isOpenSidebar: boolean;
}

const initialState: CartState = {
  menus: [],
  isOpenSidebar: false,
};

export const menusSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addMenu: (state, action) => {
      state.menus.push(action.payload);
    },
    toggleSidebar(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMenu, toggleSidebar } = menusSlice.actions;

export default menusSlice.reducer;
