import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  toggleCreateNoteModal,
  toggleTagsModal,
} from "@store/modal/modal.slice";
import { setEditNote, setMainNotes } from "@store/note-list/noteList.slice";
import { TagsModal, TextEditor } from "@/components";
import { ButtonFill, ButtonOutline } from "@styles/styles";
import { DeleteBox, FixedContainer } from "../Modal.styes";
import {
  AddedTagsBox,
  OptionsBox,
  StyledInput,
  TopBox,
  Box,
} from "./CreateNoteModal.styles";
import { Note } from "@/types/note";

const CreateNoteModal = () => {
  const dispatch = useAppDispatch();
  const { editNote } = useAppSelector((state) => state.notesList);
  const { viewAddTagsModal } = useAppSelector((state) => state.modal);

  const [noteTitle, setNoteTitle] = useState(editNote?.title || "");
  const [noteContent, setNoteContent] = useState(editNote?.content || "");
  const [addedTags, setAddedTags] = useState(editNote?.tags || []);
  const [noteColor, setNoteColor] = useState(editNote?.color || "");
  const [priority, setPriority] = useState(editNote?.priority || "low");

  const onCloseModal = () => {
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  const tagsHandler = (tag: string, type: string) => {
    const newTag = tag.toLowerCase();
    if (type === "add") {
      setAddedTags([...addedTags, { tag: newTag, id: v4() }]);
    } else {
      setAddedTags(addedTags.filter(({ tag }) => tag !== newTag));
    }
  };

  const createNoteHandler = () => {
    if (!noteTitle) {
      return toast.error("타이틀을 작성해주세요");
    }
    if (noteContent === `<p><br/></p>`)
      return toast.error("내용을 작성해주세요");

    const date = dayjs().format("DD/MM/YY h:mm A");

    let note: Partial<Note> = {
      title: noteTitle,
      content: noteContent,
      tags: addedTags,
      color: noteColor,
      priority,
      editedTime: new Date().getTime(),
    };

    if (editNote) {
      note = { ...editNote, ...note };
    } else {
      note = {
        ...note,
        date,
        createdTime: new Date().getTime(),
        editedTime: null,
        isPinned: false,
        isRead: false,
        id: v4(),
      };
    }
    dispatch(setMainNotes(note));
    dispatch(toggleCreateNoteModal(false));
    dispatch(setEditNote(null));
  };

  return (
    <FixedContainer>
      {viewAddTagsModal && (
        <TagsModal
          type="edit"
          addedTags={addedTags}
          tagsHandler={tagsHandler}
        />
      )}
      <Box>
        <TopBox>
          <h2 className="createNote_title">노트 생성하기</h2>
          <DeleteBox
            className="createNote__close-btn"
            onClick={onCloseModal}
          ></DeleteBox>
        </TopBox>

        <StyledInput
          type="text"
          value={noteTitle}
          name="title"
          placeholder="제목..."
          onChange={(e) => setNoteTitle(e.target.value)}
        />

        <TextEditor
          color={noteColor}
          noteContent={noteContent}
          setNoteContent={setNoteContent}
        />

        <AddedTagsBox>
          {addedTags.map(({ tag, id }) => (
            <div key={id}>
              <span className="createNote__tag">{tag}</span>
              <span
                className="createNote__tag-remove"
                onClick={() => tagsHandler(tag, "remove")}
              >
                <FaTimes />
              </span>
            </div>
          ))}
        </AddedTagsBox>

        <OptionsBox>
          <ButtonOutline
            onClick={() =>
              dispatch(toggleTagsModal({ type: "add", view: true }))
            }
          >
            Add Tag
          </ButtonOutline>
          <div>
            <label htmlFor="color">배경색 : </label>
            <select
              value={noteColor}
              id="color"
              onChange={(e) => setNoteColor(e.target.value)}
            >
              <option value="">White</option>
              <option value="#ffcccc">Red</option>
              <option value="#ccffcc">Green</option>
              <option value="#cce0ff">Blue</option>
              <option value="#ffffcc">Yellow</option>
            </select>
          </div>

          <div>
            <label htmlFor="priority">우선순위 : </label>
            <select
              value={priority}
              id="priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </OptionsBox>

        <div className="createNote__create-btn">
          <ButtonFill onClick={createNoteHandler}>
            {editNote ? (
              <span>저장하기</span>
            ) : (
              <>
                <FaPlus /> <span>생성하기</span>
              </>
            )}
          </ButtonFill>
        </div>
      </Box>
    </FixedContainer>
  );
};

export default CreateNoteModal;
