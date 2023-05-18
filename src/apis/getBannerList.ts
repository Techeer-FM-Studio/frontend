import { axiosCustom } from './createAxios';

export async function getBannerList(
  nickname: string,
  page: string | string[] | undefined,
  size: string | string[] | undefined,
  filter: string | string[] | undefined = '',
) {
  //TODO: jwt 구현되면 바꾸기, 임시로 test1 닉네임 보내기 - 노션 참고할 것
  console.log('filter', filter);
  console.log('pagepagepage', page);

  if (filter !== '') filter += '/';
  if (page) page = String(Number(page) - 1);
  return await axiosCustom
    .get(`banners/${filter}page`, { params: { nickname, page, size } })
    .then((res) => res.data)
    .catch((error) => console.log(error));
}
