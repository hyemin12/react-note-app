import { Note } from "@/types/note";

export const filterdNotes = (notes: Note[], filter: string) => {
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
