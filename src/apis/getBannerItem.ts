import { axiosCustom } from './createAxios';

export async function getBannerItem(
  nickname: string,
  id: string | string[] | undefined,
) {
  //TODO: jwt 구현되면 바꾸기, 임시로 test1 닉네임 보내기 - 노션 참고할 것

  return await axiosCustom
    .get(`banners/custom/${id}`, { params: { nickname } })
    .then((res) => res.data);
}
