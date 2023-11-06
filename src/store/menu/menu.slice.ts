import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  isOpen: boolean;
}
const initialState: MenuState = {
  isOpen: false,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleMenu: (state, { payload }) => {
      state.isOpen = payload;
    },
  },
});
export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
