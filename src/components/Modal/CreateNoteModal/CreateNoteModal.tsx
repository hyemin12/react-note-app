import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import dayjs from "dayjs";
import { BiX, BiPlus } from "react-icons/Bi";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  toggleCreateNoteModal,
  toggleTagsModal,
} from "@store/modal/modal.slice";
import { setEditNote, setMainNotes } from "@store/note-list/noteList.slice";
import { TagsModal, TextEditor } from "@/components";
import { Note } from "@/types/note";
import ColorOptionBox from "./ColorOptionBox";
import PriorityOptionBox from "./PriorityOptionBox";
import { FixedContainer } from "../Modal.styes";
import {
  AddedTagsBox,
  OptionsBox,
  StyledInput,
  Box,
  ButtonGroup,
} from "./CreateNoteModal.styles";
import { ButtonFill, ButtonOutline } from "@styles/styles";

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

    const date = dayjs().format("YY-MM-DD h:mm A");

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
        <TagsModal type="add" addedTags={addedTags} tagsHandler={tagsHandler} />
      )}
      <Box $color={noteColor}>
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
          <div
            className="add_tags"
            onClick={() =>
              dispatch(toggleTagsModal({ type: "add", view: true }))
            }
          >
            태그 추가
            <BiPlus />
          </div>
          {addedTags.map(({ tag, id }) => (
            <div key={id}>
              <span className="createNote__tag">{tag}</span>
              <span
                className="createNote__tag-remove"
                onClick={() => tagsHandler(tag, "remove")}
              >
                <BiX />
              </span>
            </div>
          ))}
        </AddedTagsBox>

        <OptionsBox>
          <ColorOptionBox $noteColor={noteColor} setNoteColor={setNoteColor} />

          <PriorityOptionBox priority={priority} setPriority={setPriority} />
        </OptionsBox>

        <ButtonGroup>
          <ButtonOutline onClick={onCloseModal}>닫기</ButtonOutline>
          <div className="createNote__create-btn">
            <ButtonFill onClick={createNoteHandler}>
              {editNote ? (
                <span>저장하기</span>
              ) : (
                <>
                  <BiPlus /> <span>생성하기</span>
                </>
              )}
            </ButtonFill>
          </div>
        </ButtonGroup>
      </Box>
    </FixedContainer>
  );
};

export default CreateNoteModal;
