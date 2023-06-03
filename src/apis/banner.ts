import { customAxios } from './customAxios';

export const getBannerList = async (
  nickname: string,
  page: string | string[] | undefined,
  size: string | string[] | undefined,
  filter: string | string[] | undefined = '',
) => {
  //TODO: jwt 구현되면 바꾸기

  if (filter !== '') filter += '/';
  if (page) page = String(Number(page) - 1);
  return await customAxios
    .get(`banners/${filter}page`, { params: { nickname, page, size } })
    .then((res) => res.data);
};

export const deleteBannerInfo = async (id: number) => {
  return await customAxios
    .delete(`banners/custom/${id}`)
    .then((res) => res.data);
};

export const deleteMyBanners = async (nickname: string, bannerId: number) => {
  return await customAxios
    .delete(`banners/mybanners/${bannerId}`, { data: { nickname } })
    .then((res) => res.data);
};

export const getBannerItem = async (
  nickname: string,
  id: string | string[] | undefined,
) => {
  //TODO: jwt 구현되면 바꿔야함

  return await customAxios
    .get(`banners/custom/${id}`, { params: { nickname } })
    .then((res) => res.data);
};

export const postMyBanners = async (nickname: string, id: number) => {
  console.log(nickname, id);
  return await customAxios
    .post(`banners/mybanners/${id}`, { nickname: nickname })
    .then((res) => res.data);
};

export const postBannerInfo = async (bannerInfo: any) => {
  return await customAxios
    .post('banners/custom', bannerInfo)
    .then((res) => res.data);
};
