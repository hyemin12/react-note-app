import styled from "styled-components";

export const Box = styled.div<{ $color: string }>`
  width: clamp(250px, 95%, 750px);
  background-color: #f6f6f6;
  color: black;
  border-radius: 10px;
  padding: 20px 18px 25px;

  .createNote__create-btn {
    display: flex;
    justify-content: flex-end;
  }
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .createNote__title {
    font-weight: 600;
    font-size: clamp(1.4rem, 3vw, 1.6rem);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  user-select: none;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: transparent;
  text-indent: 15px;
  margin: 20px 0 10px;
  font-size: clamp(1rem, 2vw, 1.1rem);
  transition: 250ms box-shadow ease-in;
`;

export const AddedTagsBox = styled.div`
  margin: 12px 0 30px;
  display: flex;
  div.add_tags {
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    border: none;
    background-color: #c4c4c4;
    color: rgba(0, 0, 0, 0.7);
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
    margin-right: 10px;
    span {
      display: flex;
      align-items: center;
    }
    .createNote__tag {
      margin-right: 3px;
    }
    .createNote__tag-remove {
      cursor: pointer;
      padding: 2px;
    }
  }
`;
export const OptionsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  margin: 15px 0 25px;

  select {
    font-size: clamp(14px, 1.5vw, 1rem);
    padding: 2px 10px;
    margin-left: 8px;
    user-select: none;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    background-color: #fff;
  }
  label {
    font-size: clamp(14px, 1.5vw, 1rem);
  }
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;
