import { useParams } from "react-router-dom";
import { useAppSelector } from "@hooks/redux";
import { MainWrapper } from "@/components";
import { Note } from "@/types/note";
import { Container, EmptyMsgBox } from "@styles/styles";

const TagNotes = () => {
  const { mainNotes } = useAppSelector((state) => state.notesList);

  const { name } = useParams() as { name: string };

  const notes: Note[] = mainNotes.filter((note) =>
    note.tags.find(({ tag }) => tag === name)
  );

  return (
    <Container>
      {notes.length === 0 ? (
        <EmptyMsgBox>노트가 없습니다.</EmptyMsgBox>
      ) : (
        <MainWrapper notes={notes} type={name} />
      )}
    </Container>
  );
};

export default TagNotes;
