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
  reducers: {},
});

export default menuSlice.reducer;
