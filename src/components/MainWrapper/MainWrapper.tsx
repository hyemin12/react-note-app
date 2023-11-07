import React from "react";
import { Note } from "@types/note";
import { NoteCard } from "..";
import { NotesContainer } from "@styles/styles";

interface MainWrapperProps {
  notes: Note[];
  type: string;
}

const MainWrapper = ({ notes, type }: MainWrapperProps) => {
  return (
    <NotesContainer>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} type={type} />
      ))}
    </NotesContainer>
  );
};

export default MainWrapper;
