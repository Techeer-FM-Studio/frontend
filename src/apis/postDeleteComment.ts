import { axiosCustom } from './createAxios';

export async function postDeleteComment(bannerId: number, id: number) {
  return await axiosCustom
    .delete(`banners/custom/${bannerId}/comments/${id}`)
    .then((res) => res.data);
}
