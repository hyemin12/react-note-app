import { BiEdit } from "react-icons/Bi";
import { useAppDispatch } from "@hooks/redux";
import { toggleCreateNoteModal } from "@store/modal/modal.slice";
import { setEditNote } from "@store/note-list/noteList.slice";
import { ButtonProps } from "@/types/buttons";
import { NotesIconBox } from "@styles/styles";

const EditButton = ({ type, note }: ButtonProps) => {
  const dispatch = useAppDispatch();
  const onToggleModal = () => {
    dispatch(toggleCreateNoteModal(true));
    dispatch(setEditNote(note));
  };
  if (type === "archive" || type === "trash") return null;
  return (
    <NotesIconBox onClick={onToggleModal} data-info="Edit">
      <BiEdit style={{ fontSize: "1rem" }} />
    </NotesIconBox>
  );
};

export default EditButton;
