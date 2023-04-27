// src/types/TaskInfo.ts

export type TaskInfo = {
  taskId?: number;
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  isFinished: boolean;
  sharedMemberNicknameList: string[];
};

export type BannerTaskInfo = {
  bannerId: number;
  type: string;
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  imageUrl: [string, string];
  isFinished: boolean;
};
