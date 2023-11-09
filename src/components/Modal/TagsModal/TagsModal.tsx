import React, { useState } from "react";
import { v4 } from "uuid";
import { BiX, BiPlus, BiMinus } from "react-icons/Bi";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getStandardName } from "@utils/getStandardName";
import { addTags, deleteTags } from "@store/tags/tags.slice";
import { removeTags } from "@store/note-list/noteList.slice";
import { toggleTagsModal } from "@store/modal/modal.slice";
import { Tag } from "@/types/tag";
import { DeleteBox, FixedContainer } from "../Modal.styes";
import { Box, StyledInput, TagsBox } from "./TagsModal.styles";

interface TagsModalProps {
  type: string;
  addedTags?: Tag[];
  tagsHandler?: (tag: string, type: string) => void;
}

const TagsModal = ({ type, addedTags, tagsHandler }: TagsModalProps) => {
  const dispatch = useAppDispatch();
  const { tagsList } = useAppSelector((state) => state.tags);
  const [inputValue, setInputValue] = useState<string>("");

  const onToggleTagsModal = () => {
    dispatch(toggleTagsModal({ type, view: false }));
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onDeleteTags = (tag: string, id: string) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tag }));
  };
  const onAddTagSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;
    dispatch(addTags({ tag: inputValue.toLowerCase(), id: v4() }));
    setInputValue("");
  };
  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <h4 className="editTags__title">
            {type === "add" ? "태그 추가" : "태그 수정"}
          </h4>
          <DeleteBox className="__close" onClick={onToggleTagsModal}>
            <BiX />
          </DeleteBox>
        </div>

        <form onSubmit={onAddTagSumbit}>
          <StyledInput
            type="text"
            value={inputValue}
            placeholder="new tag..."
            onChange={onChange}
          />
        </form>
        <TagsBox>
          {tagsList.map(({ tag, id }) => (
            <li key={id}>
              <p className="editTags__tag">{getStandardName(tag)}</p>
              {type === "edit" ? (
                <DeleteBox onClick={() => onDeleteTags(tag, id)}>
                  <BiX />
                </DeleteBox>
              ) : (
                <DeleteBox>
                  {addedTags?.find(
                    (addedTag: Tag) => addedTag.tag === tag.toLowerCase()
                  ) ? (
                    <BiMinus onClick={() => tagsHandler!(tag, "remove")} />
                  ) : (
                    <BiPlus onClick={() => tagsHandler!(tag, "add")} />
                  )}
                </DeleteBox>
              )}
            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  );
};

export default TagsModal;
