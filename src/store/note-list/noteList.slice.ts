import { createSlice } from "@reduxjs/toolkit";
import { Note } from "@/types/note";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: Note[] | null;
}
const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};
export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter((tag) => tag !== payload),
      }));
    },
  },
});
export const { removeTags } = noteSlice.actions;
export default noteSlice.reducer;
