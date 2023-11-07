import parse from "html-react-parser";
import { BsFillPinFill } from "react-icons/bs";
import { useAppDispatch } from "@hooks/redux";
import getRelevantBtns from "@utils/getRelevantBtns";
import { readNote, setPinnedNotes } from "@store/note-list/noteList.slice";
import { ReadNoteModal } from "..";
import { Note } from "@types/note";
import { NotesIconBox } from "@styles/styles";
import {
  Card,
  ContentBox,
  FooterBox,
  TagsBox,
  TopBox,
} from "./NoteCard.styles";

interface NoteCardProps {
  note: Note;
  type: string;
}
const NoteCard = ({ note, type }: NoteCardProps) => {
  const dispatch = useAppDispatch();
  const { title, content, tags, color, priority, date, isPinned, id, isRead } =
    note;

  const abbreviationBodyLanguage = () => {
    if (content.includes("img")) {
      return content;
    } else {
      return content.length > 75 ? content.slice(0, 75) + "..." : content;
    }
  };

  return (
    <>
      {isRead && <ReadNoteModal type={type} note={note} />}
      <Card style={{ backgroundColor: color }}>
        <TopBox>
          <div className="noteCard__title">
            {title.length > 10 ? title.slice(0, 10) + "..." : title}
          </div>
          <div className="noteCard__top-options">
            <span className="noteCard__priority">{priority}</span>

            {type !== "archive" && type !== "trash" && (
              <NotesIconBox
                onClick={() => dispatch(setPinnedNotes(id))}
                className="noteCard__pin"
              >
                <BsFillPinFill style={{ color: isPinned ? "red" : "" }} />
              </NotesIconBox>
            )}
          </div>
        </TopBox>
        <ContentBox onClick={() => dispatch(readNote({ type, id }))}>
          {parse(abbreviationBodyLanguage())}
        </ContentBox>

        <TagsBox>
          {tags.map(({ tag, id }) => (
            <span key={id}>{tag}</span>
          ))}
        </TagsBox>

        <FooterBox>
          <div className="noteCard__date">{date}</div>
          <div>{getRelevantBtns({ type, note, dispatch })}</div>
        </FooterBox>
      </Card>
    </>
  );
};

export default NoteCard;
