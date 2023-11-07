import { useAppSelector } from "@hooks/redux";
import { Note } from "@/types/note";
import { NoteCard } from "@/components";
import { NotesContainer } from "@styles/styles";

const filterdNotes = (notes: Note[], filter: string) => {
  const lowPriority = notes.filter(({ priority }) => priority === "low");
  const highPriority = notes.filter(({ priority }) => priority === "high");

  switch (filter) {
    case "low":
      return [...lowPriority, ...highPriority];
    case "high":
      return [...highPriority, ...lowPriority];
    case "latest":
      return notes.sort((a, b) => b.createdTime - a.createdTime);
    case "created":
      return notes.sort((a, b) => a.createdTime - b.createdTime);
    case "edited": {
      const editedNotes = notes.filter(({ editedTime }) => editedTime);
      const normalNotes = notes.filter(({ editedTime }) => !editedTime);
      const sortEdited = editedNotes.sort(
        (a, b) => (b.editedTime as number) - (a.editedTime as number)
      );
      return [...sortEdited, ...normalNotes];
    }
    default:
      return notes;
  }
};

const getAllNotes = (mainNotes: Note[], filter: string) => {
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  return (
    <>
      {pinned.length > 0 && (
        <>
          <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {filterdNotes(pinned, filter).map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </>
      )}
      {normal.length > 0 && (
        <>
          <div className="allNotes__notes-type">
            All Notes <span>({normal.length})</span>
          </div>
          <NotesContainer>
            {filterdNotes(normal, filter).map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </>
      )}
    </>
  );
};

export default getAllNotes;
