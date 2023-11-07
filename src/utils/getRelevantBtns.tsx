import { RiInboxUnarchiveFill } from "react-icons/ri";
import { FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { NotesIconBox } from "@styles/styles";
import { Note } from "@types/note";
import { Dispatch } from "@reduxjs/toolkit";
import { toggleCreateNoteModal } from "@store/modal/modal.slice";
import {
  deleteNote,
  restoreNote,
  setArchiveNotes,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from "@store/note-list/noteList.slice";

interface GetRelevantBtns {
  type: string;
  note: Note;
  dispatch: Dispatch;
}

const getRelevantBtns = ({ type, note, dispatch }: GetRelevantBtns) => {
  const onToggleModal = () => {
    dispatch(toggleCreateNoteModal(true));
    dispatch(setEditNote(true));
  };
  console.log(type, note, dispatch);
  if (type === "achive") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive"
        >
          <RiInboxUnarchiveFill style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox onClick={() => dispatch(setTrashNotes(note))}>
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else if (type === "trash") {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-info="Restore"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox onClick={onToggleModal} data-info="Edit">
          <FaEdit style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive"
        >
          <FaTrashRestore style={{ fontSize: "1rem" }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete"
        >
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }
};
export default getRelevantBtns;
