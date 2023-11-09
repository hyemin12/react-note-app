import { BiSolidPin } from "react-icons/Bi";
import { useAppDispatch } from "@hooks/redux";
import { setPinnedNotes } from "@store/note-list/noteList.slice";
import { NotesIconBox } from "@styles/styles";

interface PinButton {
  isPinned: boolean;
  id: string;
  type: string;
}
const PinButton = ({ type, isPinned, id }: PinButton) => {
  const dispatch = useAppDispatch();
  const onSetPinnedNote = () => {
    dispatch(setPinnedNotes(id));
  };
  if (type === "archive" || type === "trash") return null;
  return (
    <NotesIconBox className="noteCard__pin" onClick={onSetPinnedNote}>
      {isPinned ? (
        <BiSolidPin style={{ color: isPinned ? "#333" : "transparent" }} />
      ) : null}
    </NotesIconBox>
  );
};

export default PinButton;
