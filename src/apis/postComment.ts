import { axiosCustom } from './createAxios';

export async function postComment(
  comments: string,
  writer: string,
  bannerId: number,
) {
  console.log(comments, writer, bannerId);
  return await axiosCustom
    .post(`banners/custom/${bannerId}/comments`, { writer, comments })
    .then((res) => res.data);
}
