import { BiSolidArchiveIn, BiSolidArchiveOut } from "react-icons/Bi";
import { useAppDispatch } from "@hooks/redux";
import {
  restoreNote,
  setArchiveNotes,
  unArchiveNote,
} from "@store/note-list/noteList.slice";
import { Note } from "@/types/note";
import { NotesIconBox } from "@styles/styles";

interface ArchiveButtonProps {
  note: Note;
  type: string;
}

const ArchiveButton = ({ type, note }: ArchiveButtonProps) => {
  const dispatch = useAppDispatch();
  const onArchiveNote = () => {
    dispatch(setArchiveNotes(note));
  };
  const onRestoreNote = () => {
    dispatch(restoreNote(note));
  };
  const onUnArchiveNote = () => {
    dispatch(unArchiveNote(note));
  };

  if (type === "archive")
    return (
      <NotesIconBox onClick={onUnArchiveNote} data-info="Unarchive">
        <BiSolidArchiveOut />
      </NotesIconBox>
    );
  if (type === "trash")
    return (
      <NotesIconBox onClick={onRestoreNote} data-info="Restore">
        <BiSolidArchiveIn />
      </NotesIconBox>
    );
  return (
    <NotesIconBox onClick={onArchiveNote} data-info="Archive">
      <BiSolidArchiveIn />
    </NotesIconBox>
  );
};

export default ArchiveButton;
