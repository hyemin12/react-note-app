import { v4 } from "uuid";

export const notes = [
  {
    title: "노트 1",
    content: "노트 1 콘텐트",
    tags: [{ tag: "learnings", id: v4() }],
    color: "yellow",
    priority: "high",
    isPinned: false,
    isRead: false,
    date: "23-11-08 2:55 PM",
    createdTime: new Date("2023-11-07T16:55:00").getTime(),
    editedTime: null,
    id: v4(),
  },
  {
    title: "노트 2",
    content: "노트 2 콘텐트",
    tags: [{ tag: "quotes", id: v4() }],
    color: "violet",
    priority: "high",
    isPinned: false,
    isRead: false,
    date: "23-11-08 2:55 PM",
    createdTime: new Date("2023-11-07T16:55:00").getTime(),
    editedTime: null,
    id: v4(),
  },
];
