import { axiosCustom } from './createAxios';

export async function postLike(nickname: string, id: number) {
  //TODO: jwt 구현되면 바꾸기, 임시로 test1 닉네임 보내기 - 노션 참고할 것

  return await axiosCustom
    .get(`banners/custom/comments/${id}/likes`, { params: { nickname } })
    .then((res) => res.data);
}