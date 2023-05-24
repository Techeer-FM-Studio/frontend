import { axiosCustom } from './customAxios';

export async function postCalender(nickname: string, id: number) {
  //TODO: jwt 구현되면 바꾸기, 임시로 test1 닉네임 보내기 - 노션 참고할 것

  return await axiosCustom
    .get(`banners/custom/${id}/tasks`, { params: { nickname } })
    .then((res) => res.data);
}
