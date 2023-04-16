import { axiosCustom } from './createAxios';

export async function postBannerInfo(bannerInfo: any) {
  return await axiosCustom
    .post('banners/custom', bannerInfo)
    .then((res) => res.data);
}
