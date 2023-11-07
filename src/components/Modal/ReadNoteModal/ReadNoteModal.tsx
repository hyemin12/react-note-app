import parse from "html-react-parser";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch } from "@hooks/redux";
import { Note } from "@types/note";
import { readNote } from "@store/note-list/noteList.slice";
import { DeleteBox, FixedContainer } from "../Modal.styes";
import { Box } from "./ReadNoteModal.styles";

interface ReadNoteModalProps {
  type: string;
  note: Note;
}

const ReadNoteModal = ({ type, note }: ReadNoteModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <FixedContainer>
      <Box style={{ backgroundColor: note.color }}>
        <DeleteBox
          onClick={() => dispatch(readNote({ type, id: note.id }))}
          className="readNote__close-btn"
        >
          <FaTimes />
        </DeleteBox>
        <div className="readNote__title">{note.title}</div>
        <div className="readNote__content">{parse(note.content)}</div>
      </Box>
    </FixedContainer>
  );
};

export default ReadNoteModal;
