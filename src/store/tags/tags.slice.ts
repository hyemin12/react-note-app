import { createSlice } from "@reduxjs/toolkit";
import { Tag } from "@/types/tag";
import { v4 } from "uuid";

interface TagState {
  tagsList: Tag[];
}
const initialState: TagState = {
  tagsList: [
    { tag: "learnings", id: v4() },
    { tag: "works", id: v4() },
    { tag: "quotes", id: v4() },
  ],
};
export const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
});

export default tagSlice.reducer;
