// TODO: api 설계서 나오면 수정하기
export type BannerItemType = {
  type: string;
  id: number;
  writer: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  imageUrl: string[];
  likeCnt: number;
  isFinished: boolean;
  isLiked: boolean;
  isIncluded: boolean;
  readCnt: number;
};

export type BannerPageableType = {
  totalPages: number;
  totalElements: number;
  size: number;
  page: number;
  content: BannerItemType[];
};

export type BannerCommentPageableType = {
  totalPages: number;
  totalElements: number;
  size: number;
  page: number;
  content: BannerComment[];
};

export type BannerComment = {
  id: number;
  writer: string;
  comments: string;
  createdAt: string;
  updatedAt: string;
};
