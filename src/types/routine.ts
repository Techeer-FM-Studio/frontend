// TODO: api 설계서 나오면 수정하기
export type TaskInfo = {
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  isFinished: boolean;
  isOpened: boolean;
  sharedMemberInfo: { sharedMember: string }[];
};

export type TaskInfoListResponse = {
  year: number;
  month: number;
  taskInfoList: TaskInfo[];
};
