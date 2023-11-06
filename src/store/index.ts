import { configureStore } from "@reduxjs/toolkit";

import menuSlice from "./menu/menu.slice";
import modalSlice from "./modal/modal.slice";
import noteListSlice from "./note-list/noteList.slice";
import tagsSlice from "./tags/tags.slice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    modal: modalSlice,
    noteList: noteListSlice,
    tags: tagsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
