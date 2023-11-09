import { BiSolidTrashAlt } from "react-icons/Bi";
import { useAppDispatch } from "@hooks/redux";
import { deleteNote, setTrashNotes } from "@store/note-list/noteList.slice";
import { Note } from "@/types/note";
import { NotesIconBox } from "@styles/styles";

interface TrashButtonProps {
  note: Note;
  type: string;
}
const TrashButton = ({ type, note }: TrashButtonProps) => {
  const dispatch = useAppDispatch();
  const onTrashNote = () => {
    dispatch(setTrashNotes(note));
  };
  const onDeleteNote = () => {
    dispatch(deleteNote(note));
  };
  return (
    <NotesIconBox
      onClick={type === "trash" ? onDeleteNote : onTrashNote}
      data-info="Delete"
    >
      <BiSolidTrashAlt />
    </NotesIconBox>
  );
};

export default TrashButton;
