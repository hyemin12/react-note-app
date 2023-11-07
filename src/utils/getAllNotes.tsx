import { useAppSelector } from "@hooks/redux";
import { Note } from "@types/note";
import { NoteCard } from "@/components";
import { NotesContainer } from "@styles/styles";

const getAllNotes = (notes: Note[], filter: string) => {
  return (
    <>
      <div className="allNotes__notes-type">All Notes</div>
      <NotesContainer>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} type="notes" />
        ))}
      </NotesContainer>
    </>
  );
};

export default getAllNotes;
