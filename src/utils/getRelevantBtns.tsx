import TrashButton from "@/components/button/TrashButton";
import EditButton from "@/components/button/EditButton";
import ArchiveButton from "@/components/button/ArchiveButton";
import { Note } from "@/types/note";

export interface ButtonProps {
  type: string;
  note: Note;
}

const getRelevantBtns = ({ type, note }: ButtonProps) => {
  return (
    <>
      <EditButton type={type} note={note} />
      <ArchiveButton type={type} note={note} />
      <TrashButton type={type} note={note} />
    </>
  );
};
export default getRelevantBtns;
