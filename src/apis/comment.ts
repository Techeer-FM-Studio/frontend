import { customAxios } from './customAxios';

export const postDeleteComment = async (bannerId: number, id: number) => {
  return await customAxios
    .delete(`banners/custom/${bannerId}/comments/${id}`)
    .then((res) => res.data);
};

export const postComment = async (
  comments: string,
  writer: string,
  bannerId: number,
) => {
  return await customAxios
    .post(`banners/custom/${bannerId}/comments`, { writer, comments })
    .then((res) => res.data);
};

export const getComments = async (id: number, page: number, size: number) => {
  return await customAxios
    .get(`banners/custom/${id}/comments/page`, { params: { page, size } })
    .then((res) => res.data);
};
