// src/types/TaskInfo.ts

export type TaskInfo = {
  taskId: number;
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  isFinished: boolean;
  sharedMemberNicknameList: string[];
};
