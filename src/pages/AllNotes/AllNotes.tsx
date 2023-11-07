import React, { useState } from "react";
import { Box, InputBox, TopBox } from "./AllNotes.styles";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { toggleFilterModal } from "@store/modal/modal.slice";
import { ButtonOutline, Container, EmptyMsgBox } from "@styles/styles";
import getAllNotes from "@utils/getAllNotes";
import { FilterModal } from "@/components";

const AllNotes = () => {
  const dispatch = useAppDispatch();
  const { mainNotes } = useAppSelector((state) => state.notesList);
  const { viewFilterModal } = useAppSelector((state) => state.modal);
  const [filter, setFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const onToggleFilterModal = () => {
    dispatch(toggleFilterModal(true));
  };
  const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  const filterClearHandler = () => {
    setFilter("");
  };

  return (
    <Container>
      {mainNotes.length > 0 ? (
        <>
          {viewFilterModal && (
            <FilterModal
              filter={filter}
              filterHandler={filterHandler}
              filterClearHandler={filterClearHandler}
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
            <div>
              <ButtonOutline onClick={onToggleFilterModal} className="nav__btn">
                정렬
              </ButtonOutline>
            </div>
          </TopBox>
          <Box>{getAllNotes(mainNotes, filter)}</Box>
        </>
      ) : (
        <EmptyMsgBox>노트가 없습니다</EmptyMsgBox>
      )}
    </Container>
  );
};

export default AllNotes;
