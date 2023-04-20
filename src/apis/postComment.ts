import { axiosCustom } from './createAxios';

export async function postComment(
  comment: string,
  writer: string,
  bannerId: number
) {
  return await axiosCustom
    .get(`banners/custom/${bannerId}/comments`, { params: { comment, writer } })
    .then((res) => res.data);
}
