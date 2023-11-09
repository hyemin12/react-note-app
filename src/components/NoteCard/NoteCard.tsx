import parse from "html-react-parser";
import { useAppDispatch } from "@hooks/redux";
import { readNote } from "@store/note-list/noteList.slice";
import { ReadNoteModal } from "..";
import { Note } from "@/types/note";
import {
  Card,
  ContentBox,
  FooterBox,
  TagsBox,
  TopBox,
} from "./NoteCard.styles";
import { ArchiveButton, EditButton, TrashButton, PinButton } from "../button";

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
      <Card color={color}>
        <TopBox>
          <div className="noteCard__title">
            {title.length > 10 ? title.slice(0, 10) + "..." : title}
          </div>
          <div className="noteCard__top-options">
            <span className="noteCard__priority">{priority}</span>

            <PinButton type={type} isPinned={isPinned} id={id} />
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
          <EditButton type={type} note={note} />
          <ArchiveButton type={type} note={note} />
          <TrashButton type={type} note={note} />
        </FooterBox>
      </Card>
    </>
  );
};

export default NoteCard;
