import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { toggleFilterModal } from "@store/modal/modal.slice";
import { FilterModal } from "@/components";
import NoteList from "./NoteList";
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { ButtonOutline, Container, EmptyMsgBox } from "@styles/styles";

const AllNotes = () => {
  const dispatch = useAppDispatch();
  const { mainNotes } = useAppSelector((state) => state.notesList);
  const { viewFilterModal } = useAppSelector((state) => state.modal);
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const onToggleFilterModal = () => {
    dispatch(toggleFilterModal(true));
  };
  const onfilterNotes = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const onClearfilterNotes = () => {
    setFilter("");
  };

  if (mainNotes.length < 1)
    return (
      <Container>
        {" "}
        <EmptyMsgBox>노트가 없습니다</EmptyMsgBox>
      </Container>
    );
  return (
    <Container>
      {viewFilterModal && (
        <FilterModal
          filter={filter}
          filterHandler={onfilterNotes}
          filterClearHandler={onClearfilterNotes}
        />
      )}
      <TopBox>
        <InputBox>
          <input
            type="text"
            value={searchInput}
            placeholder="노트의 제목을 입력해주세요"
            onChange={onChange}
          />
        </InputBox>
        <div className="notes__filter-btn">
          <ButtonOutline onClick={onToggleFilterModal} className="nav__btn">
            정렬
          </ButtonOutline>
        </div>
      </TopBox>
      {/* note list */}
      <Box>
        {pinned.length > 0 && (
          <NoteList title="고정한 노트" notes={pinned} filter={filter} />
        )}
        {normal.length > 0 && (
          <NoteList title="모든 노트" notes={normal} filter={filter} />
        )}
      </Box>
    </Container>
  );
};

export default AllNotes;
