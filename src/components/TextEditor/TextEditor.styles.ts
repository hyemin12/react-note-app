import styled from "styled-components";

export const Container = styled.div<{ noteColor: string }>`
  .ql-toolbar,
  .ql-container {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .ql-editor {
    height: 200px;
    background-color: transparent;
  }
`;
