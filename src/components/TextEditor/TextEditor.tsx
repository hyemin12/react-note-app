import { Container } from "./TextEditor.styles";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "color",
  "background",
  "image",
  "blockquote",
  "code-block",
];

const modules = {
  toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
  ],
};

interface TextEditorProps {
  noteContent: string;
  setNoteContent: React.Dispatch<React.SetStateAction<string>>;
  color: string;
}

const TextEditor = ({
  noteContent,
  setNoteContent,
  color,
}: TextEditorProps) => {
  return (
    <Container noteColor={color}>
      <ReactQuill
        formats={formats}
        modules={modules}
        theme="snow"
        value={noteContent}
        onChange={setNoteContent}
      />
    </Container>
  );
};

export default TextEditor;
