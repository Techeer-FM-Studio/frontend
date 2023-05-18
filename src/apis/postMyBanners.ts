import { axiosCustom } from './createAxios'

export async function postMyBanners(nickname: string, id: number) {
    console.log(nickname, id)
    return await axiosCustom
        .post(`banners/mybanners/${id}`, { nickname: nickname })
        .then((res) => res.data)
}
