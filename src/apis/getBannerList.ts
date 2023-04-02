import { axiosCustom } from './createAxios';

export async function getBannerList(page: number, type: string) {
  return await axiosCustom
    .get('banner/page', { data: { page, type } })
    .then((res) => res.data);
}
