import { filterdNotes } from "@utils/filterdNotes";
import { NoteCard } from "@/components";
import { Note } from "@/types/note";
import { NotesContainer } from "@styles/styles";

interface NoteListProps {
  title: string;
  notes: Note[];
  filter: string;
}

const NoteList = ({ title, notes, filter }: NoteListProps) => {
  return (
    <>
      <h3 className="allNotes__notes-type">
        {title}
        <span>({notes.length})</span>
      </h3>
      <NotesContainer>
        {filterdNotes(notes, filter).map((note) => (
          <NoteCard key={note.id} note={note} type="notes" />
        ))}
      </NotesContainer>
    </>
  );
};

export default NoteList;
