// TODO: api 설계서 나오면 수정하기
export type BannerItemType = {
  id: number;
  type: string;
  owner: string;
  title: string;
  memo: string;
  startAt: string;
  endAt: string;
  imageUrl: string[];
  likeCnt: number;
  finished: boolean;
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
