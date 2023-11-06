import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  viewEditTagsModal: boolean;
  viewAddTagsModal: boolean;
  viewCreateNoteModal: boolean;
  viewFilterModal: boolean;
}

const initialState: ModalState = {
  viewEditTagsModal: false,
  viewAddTagsModal: false,
  viewCreateNoteModal: false,
  viewFilterModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTagsModal: (state, { payload }) => {
      const { type, view } = payload;
      type === "add"
        ? (state.viewAddTagsModal = view)
        : (state.viewEditTagsModal = view);
    },
    toggleCreateNoteModal: (state, { payload }) => {
      state.viewCreateNoteModal = payload;
    },
    toggleFilterModal: (state, { payload }) => {
      state.viewFilterModal = payload;
    },
  },
});
export const { toggleTagsModal, toggleCreateNoteModal, toggleFilterModal } =
  modalSlice.actions;
export default modalSlice.reducer;
