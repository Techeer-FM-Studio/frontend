import { axiosCustom } from './createAxios';

export async function postDeleteComment(id: number) {
  return await axiosCustom
    .get(`banners/custom/comments/${id}`)
    .then((res) => res.data);
}
