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
  reducers: {},
});

export default noteSlice.reducer;
