// src/types/routine.ts

// TaskInfo : 달력에 개인 소유로 관리되는 일정과 관련된 타입 모음
// 일정 목록 월별 불러오기 / 하나 불러오기 / 추가 / 수정 / 삭제
export type TaskInfoType = {
  taskId?: number;
  writer?: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  isFinished: boolean;
  sharedMembersNicknameList?: string[];
};

// BannerTaskInfo : 배너에서 공유받은 일정과 관련된 타입 모음
// 일정 목록 월별 불러오기 / 일정 추가 / 일정 삭제
export type BannerTaskInfoType = {
  bannerId?: number;
  type: string;
  writer?: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  imageUrl: [string, string];
  isFinished: boolean;
};

export type DeleteRoutineResponseType = {
  nickname: string;
};
