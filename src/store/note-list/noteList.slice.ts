import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
import { Note } from "@/types/note";
import { notes } from "@/notesData";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: Note | null;
}
const initialState: NoteState = {
  mainNotes: [...notes],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};
enum noteType {
  mainNotes = "mainNotes",
  archiveNotes = "archiveNotes",
  trashNotes = "trashNotes",
}

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setMainNotes: (state, { payload }) => {
      // 노트 수정
      const inCludedNote = state.mainNotes.find(({ id }) => id === payload.id);
      if (inCludedNote) {
        state.mainNotes = state.mainNotes.map((note) =>
          note.id === payload.id ? payload : note
        );
      } else {
        // 노트 추가
        state.mainNotes.push(payload);
      }
      toast.info(`노트가 ${inCludedNote ? "수정" : "추가"}되었습니다.`);
    },
    setTrashNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.trashNotes.push({ ...payload, isPinned: false });
      toast.info(`노트가 휴지통으로 이동했습니다.`);
    },
    setArchiveNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.filter(({ id }) => id !== payload.id);
      state.archiveNotes.push({ ...payload, isPinned: false });
      toast.info("노트가 보관함으로 이동했습니다.");
    },
    unArchiveNote: (state, { payload }) => {
      state.archiveNotes = state.archiveNotes.filter(
        ({ id }) => id !== payload.id
      );
      state.mainNotes.push(payload);
      toast.info("노트 1개가 보관이 취소되었습니다.");
    },
    restoreNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
      state.mainNotes.push(payload);
      toast.info("노트 삭제가 취소되었습니다.");
    },
    deleteNote: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(({ id }) => id !== payload.id);
      toast.info("노트가 완전히 삭제되었습니다.");
    },
    setPinnedNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) =>
        note.id === payload ? { ...note, isPinned: !note.isPinned } : note
      );
      toast.info("노트가 고정되었습니다.");
    },
    setEditNote: (state, { payload }) => {
      state.editNote = payload;
    },
    readNote: (state, { payload }) => {
      const { type, id } = payload;

      const setRead = (notes: noteType) => {
        state[notes] = state[notes].map((note) =>
          note.id === id ? { ...note, isRead: !note.isRead } : note
        );
      };

      if (type === "archive") {
        setRead(noteType.archiveNotes);
      } else if (type === "trash") {
        setRead(noteType.trashNotes);
      } else {
        setRead(noteType.mainNotes);
      }
    },
    removeTags: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) => ({
        ...note,
        tags: note.tags.filter((tag) => tag !== payload),
      }));
    },
  },
});
export const {
  removeTags,
  unArchiveNote,
  setArchiveNotes,
  setMainNotes,
  setTrashNotes,
  setPinnedNotes,
  restoreNote,
  deleteNote,
  setEditNote,
  readNote,
} = noteSlice.actions;
export default noteSlice.reducer;
