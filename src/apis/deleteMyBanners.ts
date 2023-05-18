import { axiosCustom } from './createAxios'

export async function deleteMyBanners(nickname: string, bannerId: number) {
    return await axiosCustom
        .delete(`banners/mybanners/${bannerId}`, { data: { nickname } })
        .then((res) => res.data)
}
